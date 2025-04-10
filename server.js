const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3306,
        password: "",
        database: "fogado"
    }
);
 
app.use(express.json());
app.use(cors());
 
app.get("/", (req, res) => {
    res.send("Fut a backend!")
});
app.get("/sz", (req, res) => {
    const sql = "SELECT * FROM szobak;";
    db.query(sql, (err, result) =>{
        if(err) return res.status(500).json({error: err.message});
        return res.json(result);
    })
});
app.get("/sz/t", (req, res) => {
    const sql = "SELECT * FROM szobak WHERE agy > 3;";
    db.query(sql,[req.params.id], (err, result) =>{
        if(err) return res.status(500).json({error: err.message});
        return res.json(result);
    })
});
app.get("/sz/sz", (req, res) => {
    const sql = "SELECT * FROM `szobak` WHERE szazon=7;";
    db.query(sql,[req.params.id], (err, result) =>{
        if(err) return res.status(500).json({error: err.message});
        return res.json(result);
    })
});
 
app.listen(3001, () => {
    console.log("elindult a szerver a 3001-es porton");
});
 
 