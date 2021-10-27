from os import stat
from flask import Flask, Response
from flask_restful import Resource, Api, request
import json

from werkzeug.wrappers import response

app = Flask(__name__)
api = Api(app)

users = []
products = []

# Users - we will mostly use it for login and registering.
class Users(Resource):
    def get(self, id=None):
        if id is not None:
            resource = None
            for user in users:
                if user["id"] == id:
                    resource = user
                    break
            
            products_json = json.dumps(resource)  # get one user
        else: 
            products_json = json.dumps(users)  # get all users
        response = Response(response=products_json, status=200, content_type="application/json")
        return response

    def post(self):
        body = request.json
        users.append(body)
        response = Response(status=200, content_type="application/json")
        return response

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
            response = Response({"Error": "User does not exist!"}, status=404, content_type="application/json")

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
        if id is not None:
            resource = None
            for prod in products:
                if prod["id"] == id:
                    resource = prod
                    break
            
            products_json = json.dumps(resource)  # get one product

        elif cat is not None:
            resource = []
            for prod in products:
                if prod["cat"] == cat:
                    resource.append(json.dumps(prod))  # get multiple products based on a category
                    
        else: 
            products_json = json.dumps(products)  # get all products
        response = Response(response=products_json, status=200, content_type="application/json")
        return response

    def post(self):
        body = request.json
        products.append(body)
        response = Response(status=200, content_type="application/json")
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


api.add_resource(Users, "/users", "/users/<string:id>")
api.add_resource(Products, "/products", "/products/<string:id>", "/products/<string:cat>")

if __name__ == "__main__":
    app.run(debug=True)