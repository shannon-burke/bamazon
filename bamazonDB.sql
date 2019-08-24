DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DEC(10, 2),
stock_quantity INT(10)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", "Pet Food", 7.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Food", "Pet Food", 7.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Food Bowl", "Pet Supplies", 3.25, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kitty Litter", "Pet Supplies", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Litter Box", "Pet supplies", 5.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toy Mouse", "Pet Toys", 1.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Ball", "Pet Toys", 1.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Collar", "Pet Accessories", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leash", "Pet Accessories", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Treats", "Pet Food", 3.25, 200);