const express = require('express')
const app = express()
const router = require('./route')
const connectDb = require('./dbConnection')
const cors = require("cors")
require("dotenv").config()
// cors().config()

connectDb()

PORT = 4000

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use(express.json())
app.use('/',router)

app.listen(PORT,(err) => {
    if (err) throw err;                                                                                                                                                                                                                                                                                            
    console.log(`Server is running on port ${PORT}`)
});