var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3400,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("Connection Error :(")
    }
    console.log("Connected as " + connection.threadId);
    listItems();
});

function listItems() {
    connection.query("SELECT * FROM products", function (err, res) {

    })
};

function questions() {

};