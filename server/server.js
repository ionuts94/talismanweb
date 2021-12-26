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
    password: 'muieceko',
    database: 'db_account'
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
        name: username,
        pw2: password,
        pwd: md5password,
        gd: 99999
    }
    const sql = "INSERT INTO t_account SET ?"

    // TODO: Check if account exists before adding it to database
    try {
        db.query(sql, user, err => {
            if (err) {
                console.log(err);
                res.json({ "status": "failed" });
            }
            res.json({ "status": "success" });
        })
    } catch (err) {
        console.log(err);
        res.json({
            "status": "failed",
            "error": err
        })
    }
})