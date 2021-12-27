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

app.post('/register', jsonParser, async (req, res, next) => {
    console.log(req.body);
    const { username, password, confirmPassword } = req.body;
    const md5password = md5(password);
    const user = {
        name: username,
        pw2: password,
        pwd: md5password,
        gd: 99999
    }

    const checkAccountExistSql = `SELECT * FROM t_account WHERE name='${username}'`;
    const insertSql = "INSERT INTO t_account SET ?"
    
    // Check if user exists before adding to database
    db.query(checkAccountExistSql, {}, (err, results) => {
        console.log(results.length);
        if (err) {
            console.log(err)
        } else {
            if (results.length > 0) {
                res.json({
                    "status": "failed",
                    "message": "Account already exists. Please use another one."
                })
            } else {
                db.query(insertSql, user, err => {
                    if (err) {
                        console.log(err);
                        res.json({ "status": "failed" });
                    }
                    res.json({ 
                        "status": "success",
                        "message": "Account created successfully."
                    });
                })
            }
        }
    })
})