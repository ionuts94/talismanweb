const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'muieceko'
})

db.connect(err => err ? console.log(err) : console.log("MySQL Connected"));

app.listen('4000', () => {
    console.log('Server running on port 4000')
})