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
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("★===▼・ᴥ・▼===★===^･ω･^===★")
        questions();
    })
};

function questions() {
    inquirer.prompt([{
        type: "input",
        message: "Which item would you like to buy? (please enter ID)",
        name: "itemID"
    },
    {
        type: "input",
        message: "How much ya want?",
        name: "unitsBuy"
    }]).then(function (inquirerResponse) {
        var item = inquirerResponse.itemID - 1

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            var quantity = res[item].stock_quantity - inquirerResponse.unitsBuy;
            var product = res[item].product_name

            if (res[item].stock_quantity >= inquirerResponse.unitsBuy) {
                var query = connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        { stock_quntity: quantity },
                        { item_id: item }
                    ],
                    function (err, res) {
                        console.log("You bought " + inquirerResponse.unitsBuy + " " + product + "(s)! Thanks!");
                    });
            }

            else if (res[item].stock_quantity < inquirerResponse.unitsBuy) {
                console.log("Looks like we don't have quite that much. Bummer.")
            }

            else {
                console.log("Uhhhhhh... Oops?");
            }
        });
        listItems();
    });
};