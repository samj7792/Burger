const mysql = require("mysql");
const keys = require("./keys");

const connection = mysql.createConnection(keys.mysql);

connection.connect(err=> {
    if (err) throw err;
    console.log("DB is online");
});

module.exports = connection;