const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


//MY SQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host           : 'localhost',
    user           : 'root',
    password       : 'password',
    database       : 'nodejs_mydb'     
})




//Listen on environment port  or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))