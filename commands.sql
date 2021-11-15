// CREATE DATABASE

CREATE DATABASE eyeglass_shop;

// MAKE 3 TABLES

CREATE TABLE Products (
    Product_ID UUID PRIMARY KEY NOT NULL,
    Product_Title VARCHAR(100) NOT NULL UNIQUE,
    Price NUMERIC NOT NULL,
    Quantity SMALLINT NOT NULL,
    Category VARCHAR(20) NOT NULL
);

CREATE TABLE Customers (
    Customer_ID UUID PRIMARY KEY NOT NULL,
    Username VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(300) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Orders (
    Order_ID UUID PRIMARY KEY NOT NULL,
    Customer_ID UUID REFERENCES Customers (Customer_ID),
    Created_At TIMESTAMP NOT NULL
);

CREATE TABLE Products_Orders_Join (
    ID UUID PRIMARY KEY NOT NULL,
    Product_ID UUID NOT NULL REFERENCES Products (Product_ID),
    Order_ID UUID NOT NULL REFERENCES Orders (Order_ID)
);

INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Victoria''s Secret Women''s Eyeglasses Diamond Edition', 190.00, 3, 'women');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Victoria''s Secret Women''s Eyeglasses', 120.99, 5, 'women');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Ray Parker Men''s Eyeglasses', 90.00, 6, 'men');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Kids'' Jumbo Glasses', 49.90, 10, 'kids');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Sunglasses 2', 40.00, 4, 'sunglasses');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Sunglasses 1', 50.00, 3, 'sunglasses');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Ray Ban Women''s Eyeglasses', 89.90, 7, 'women');
INSERT INTO products (product_ID, product_Title, price, quantity, category) VALUES (uuid_generate_v4(), 'Ray Ban Men''s Eyeglasses', 90.99, 5, 'men');

INSERT INTO customers (customer_ID, username, password, email) VALUES (uuid_generate_v4(), 'Alex', '123', 'alex@gmail.com');
INSERT INTO customers (customer_ID, username, password, email) VALUES (uuid_generate_v4(), 'John', 'abc', 'john@gmail.com');
INSERT INTO customers (customer_ID, username, password, email) VALUES (uuid_generate_v4(), 'Laila', 'hellow04ld', 'laila@gmail.com');
INSERT INTO customers (customer_ID, username, password, email) VALUES (uuid_generate_v4(), 'Chrisy', 'yolocu', 'chrispratt21@gmail.com');

INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), '3569e471-3eab-4d1f-9d4a-bca7995a5dc8', NOW()::DATE);
INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), '5e613605-16cf-4729-9fa5-ab662ab537aa', NOW()::DATE);
INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), '3569e471-3eab-4d1f-9d4a-bca7995a5dc8', NOW()::DATE);
INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), '5e613605-16cf-4729-9fa5-ab662ab537aa', NOW()::DATE);
INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), 'a1e4a3b2-aa1f-4fc6-b022-ad1224f045ac', NOW()::DATE);
INSERT INTO orders (order_ID, customer_ID, created_at) VALUES (uuid_generate_v4(), '0f3a18cc-e033-47e3-b81d-93056e665529', NOW()::DATE);

INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '296a0c57-7c17-4c7b-99ab-4bd24f26f509', 'ab44a4e9-1cc1-428e-a115-385fc648e328');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '8386903b-83bb-41f1-adeb-1e6e6c2a7ff5', 'ab44a4e9-1cc1-428e-a115-385fc648e328');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), 'e1e39524-1ece-4f66-866a-f7e244a68010', 'ea2aaab4-afe4-43cb-a340-9edce8bca32c');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '782296db-ae0c-4337-9c6f-013596f11547', '672a991c-ebfe-4bc4-87b0-d870d69cae86');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), 'e1e39524-1ece-4f66-866a-f7e244a68010', 'ab44a4e9-1cc1-428e-a115-385fc648e328');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '42a9330e-13fa-49c3-86d1-994206b8c70d', 'ab44a4e9-1cc1-428e-a115-385fc648e328');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '8b184535-fe71-4645-801a-dfc10d1964d5', '2520b22e-efdd-4eb5-9d89-7e948664a0cb');
INSERT INTO products_orders_join (ID, product_ID, order_id) VALUES (uuid_generate_v4(), '296a0c57-7c17-4c7b-99ab-4bd24f26f509', 'ea2aaab4-afe4-43cb-a340-9edce8bca32c');

SELECT products.product_id, product_title, price, customer_id FROM products INNER JOIN (orders INNER JOIN products_orders_join ON orders.order_id = products_orders_join.order_id) ON products.product_id = products_orders_join.product_id;