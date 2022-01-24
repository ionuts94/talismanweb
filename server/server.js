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
const db_game = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'muieceko',
    database: 'db_game'
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

app.post('/change-password', jsonParser, async (req, res, next) => {
    console.log(req.body);
    const { account, currentPassword, newPassword } = req.body;
    
    const getAccount = `SELECT * FROM t_account WHERE name='${account}'`;

    db.query(getAccount, {}, (err, results) => {
        if (results.length > 0) {
            if (currentPassword == results[0].pw2) {
                console.log('Password matched');

                const md5password = md5(newPassword);
                const updatePasswordSql = `UPDATE t_account SET pwd='${md5password}', pw2='${newPassword}' WHERE name='${account}'`;
                db.query(updatePasswordSql, {md5password: md5password, newPassword: newPassword, account: account}, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                })
            } else {
                res.json({
                    "status": "failed",
                    "message": "Username or password error"
                })
            }
        } else {
            res.json({
                "status": "failed",
                "message": "Account not found"
            })
        }
    })
})

app.post('/insert-team', jsonParser, async (req, res, next) => {
    const { playerOne, playerTwo } = req.body;
    
    const checkExist = `SELECT * FROM t_pvp WHERE playerOne='${playerOne}' OR playerTwo='${playerOne}' OR playerOne='${playerTwo}' OR playerTwo='${playerTwo}'`;
    const insertSql = "INSERT INTO t_pvp SET ?";

    // Check if players are registered to pvp event
    db_game.query(checkExist, {}, (err, results) => {
        console.log(results.length);
        if (err) {
            console.log(err)
        } else {
            if (results.length > 0) {
                res.json({
                    "color": "rgba(232, 23, 0, 1)",
                    "text": "One or both players are already registerd for events. Please contact PERY if you want to amend."
                })
            } else {
                db_game.query(insertSql, { playerOne: playerOne, playerTwo: playerTwo }, err => {
                    if (err) {
                        console.log(err);
                        res.json({ 
                            "color": "rgba(232, 23, 0, 1)", 
                            "text": err.message
                        });
                    }
                    res.json({ 
                        "color": "rgba(0, 176, 85, 1)",
                        "text": "Team inserted successfully"
                    });
                })
            }
        }
    })
})

app.get('/get-teams', jsonParser, async (req, res, next) => {
    const selectSql = 'SELECT * FROM t_pvp';

    db_game.query(selectSql, {}, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                "data": results
            })
        }
    });
})