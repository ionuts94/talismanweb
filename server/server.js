const express = require('express');
const cors = require('cors');
const md5 = require('md5');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const jsonParser = bodyParser.json();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'muieceko'
})

db.connect(err => err ? console.log(err) : console.log("MySQL Connected"));

app.use(cors());

app.listen('4000', () => {
    console.log('Server running on port 4000')
})

app.post('/register', jsonParser, (req, res, next) => {
    console.log(req.body);
    const { username, password, confirmPassword } = req.body;
    const md5password = md5(password);
    const user = {
        username: username,
        password: password,
        md5password: md5password,
        gd: 99999
    }
    console.log(user)
})