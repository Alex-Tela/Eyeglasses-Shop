import os
from os import stat
from flask import Flask, Response
from flask_restful import Resource, Api, request
from flask_cors import CORS
from uuid import uuid4
import simplejson as json
import psycopg2
from psycopg2 import Error

db_filename = os.environ.get('POSTGRES_DB_NAME')
db_pass = os.environ.get('POSTGRES_DB_PASS')

app = Flask(__name__)
CORS(app)
api = Api(app)

users = []
products = []


def create_connection(db_filename, password):
    conn = None
    try:
        conn = psycopg2.connect(f"dbname={db_filename} user=postgres password={password}")
        #print(conn.closed)
    except Error as e:
        print(e)
    
    return conn

def create_product(conn, product):
    query = """INSERT INTO products (product_id, product_title, price, category, quantity) VALUES(generate_uuid_v4(), ?, ?, ?, ?);"""
    cursor = conn.cursor()
    cursor.execute(query, product)
    conn.commit()
    return cursor.lastrowid

def get_customers(conn):
    query = """SELECT * FROM customers;"""
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    print(list(results))
    return list(results)

def get_customer(conn, customer):
    query = """SELECT customer_id, username, password, email FROM customers WHERE username = """ + f"\'{customer}\'" + """;"""
    print(query)
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    print(list(results))
    return list(results)

def login_customer(conn, customer):
    check = get_customer(conn, list(customer)[0])  # we should get back an array
    print(check)
    if len(check) == 0:
        return "Invalid credentials!"   # user does not exist
    else:
        details = list(customer)
        # print("Details: " + str(details))
        # print(check[0][1])
        # print(check[0][2])
        if (details[0] == check[0][1] and details[1] == check[0][2]):
            return f"User {details[0]} is logged in"
        else:
            return "Second Catch: Invalid credentials!"   # user does not exist

def create_customer(conn, customer):
    # check if customer already exists
    check = get_customer(conn, list(customer)[0])  # we should get back an array
    print(check)
    if len(check) != 0:
        return "Enter other credentials"   # user already exists
    else:
        details = list(customer)
        query = """INSERT INTO customers (customer_id, username, password, email) VALUES(""" + f"\'{str(uuid4())}\'" + """, """ + f"\'{details[0]}\'" + """, """ + f"\'{details[1]}\'" + """, """ + f"\'{details[2]}\'" + """);"""
        print(query)
        cursor = conn.cursor()
        cursor.execute(query, customer)
        conn.commit()
        return "Account created succesfully!"

def get_products(conn):
    query = """SELECT * FROM products;"""
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    print(list(results))
    return list(results)

def get_product_by_id(conn, product):
    query = """SELECT product_id, product_title, price, category, quantity FROM products WHERE product_id = """ + f"\'{product}\'" + """;"""
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    print(list(results))
    return list(results)

def get_product_by_cat(conn, product):
    query = """SELECT product_id, product_title, price, category, quantity FROM products WHERE category = """ + f"\'{product}\'" + """;"""
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    print(list(results))
    return list(results)


headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'PUT,GET, POST', 'Access-Control-Allow-Headers': 'Content-Type'}

# Users - we will mostly use it for login and registering.
class Users(Resource):
    def options (self):
        return {'Allow' : 'GET, POST, PUT'}, 200, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'PUT,GET, POST', 'Access-Control-Allow-Headers': 'Content-Type'}

    def get(self, name=None):
        conn = create_connection("eyeglass_shop", "16dKL!07hai")
        if name is not None:
            try:
                resource = get_customer(conn, name)
                users_json = json.dumps(resource) # get one user
                conn.close()
                return Response(response=users_json, status=200, content_type="application/json")
            except Exception as e:
                conn.close()
                return Response('{"error": ' + str(e) + '}', status=500, content_type="application/json")
        else: 
            resource = get_customers(conn)
            users_json = json.dumps(resource) # get all users
            conn.close()
            return Response(response=users_json, status=200, content_type="application/json")

    def post(self):
        conn = create_connection("eyeglass_shop", "16dKL!07hai")

        try:
            data = request.json
        except Exception as e:
            conn.close()
            error = {"error": str(e)}
            return Response(json.dumps(error), status=500, content_type='application/json')

        try:
            print(data) 
            if (len(data.keys()) == 4):
                user = (data['username'], data['password'], data['email'], data['type'])
            else:
                user = (data['username'], data['password'], data['type'])

            if (data['type'] == 'register'):
                resource = create_customer(conn, user)

            elif (data['type'] == 'login'):
                resource = login_customer(conn, user)

            user_json = json.dumps(resource)
            conn.close()
            response = Response(response=user_json, status=200, content_type='application/json')
            return response
        except Exception as e: 
            conn.close()
            error = {"error": str(e)}
            return Response(json.dumps(error), status=500, content_type='application/json')

    def put(self, id):
        index = None
        for i in range(len(users)):
            if users[i]["id"] == id:
                resource = users[i] # the user we want to delete
                index = i
                break

        if index < len(users):
            users[index] = request.json
            response = Response(response=resource, status=200, content_type="application/json")
        else:
            response = Response({"Error": "User does not exist!"}, status=500, content_type="application/json")

    def delete(self, id):
        resource = None
        for user in users:
            if user["id"] == id:
                resource = user # the user we want to delete
                break

        if resource is not None:
            users.remove(resource)
            response = Response(response=resource, status=200, content_type="application/json")
        else:
            response = Response({"Error": "User does not exist!"}, status=404, content_type="application/json")


#-------------------------------------------------------------------------------------------------------------------


# Products - we will use it for getting the info about a product when viewing a product page.
# Also for when we want to view a list of all the products
class Products(Resource):
    def get(self, id=None, cat=None):
        conn = create_connection("eyeglass_shop", "16dKL!07hai")
        if id is not None:
            try:
                resource = get_product_by_id(conn, id)
                products_json = json.dumps(resource) # get one user
                conn.close()
                return Response(response=products_json, status=200, content_type="application/json")
            except Exception as e:
                conn.close()
                return Response('{"error": ' + str(e) + '}', status=404, content_type="application/json")

        elif cat is not None:
            try:
                resource = get_product_by_cat(conn, cat)
                products_json = json.dumps(resource) # get one user
                conn.close()
                return Response(response=products_json, status=200, content_type="application/json")
            except Exception as e:
                conn.close()
                return Response('{"error": ' + str(e) + '}', status=404, content_type="application/json")

        else: 
            resource = get_products(conn)
            products_json = json.dumps(resource) # get all users
            conn.close()
            return Response(response=products_json, status=200, content_type="application/json")

    def post(self):
        conn = create_connection("eyeglass_shop", "16dKL!07hai")
        body = request.json
        products.append(body)
        response = Response(status=200, content_type="application/json")
        conn.close()
        return response

    def put(self, id):
        index = None
        for i in range(len(products)):
            if products[i]["id"] == id:
                resource = products[i] # the user we want to delete
                index = i
                break

        if index < len(products):
            products[index] = request.json
            response = Response(response=resource, status=200, content_type="application/json")
        else:
            response = Response({"Error": "User does not exist!"}, status=404, content_type="application/json")

    def delete(self, id):
        resource = None
        for prod in products:
            if prod["id"] == id:
                resource = prod # the user we want to delete
                break

        if resource is not None:
            users.remove(resource)
            response = Response(response=resource, status=200, content_type="application/json")
        else:
            response = Response({"Error": "User does not exist!"}, status=404, content_type="application/json")


#-------------------------------------------------------------------------------------------------------------------


api.add_resource(Users, "/users", "/users/<string:name>")
api.add_resource(Products, "/products", "/products/<string:id>", "/products/cat/<string:cat>")

if __name__ == "__main__":
    app.run(debug=True)