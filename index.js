require('dotenv').config()


const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')

const eventServer = express() 

eventServer.use(cors())
eventServer.use(express.json())
eventServer.use(routes)

const PORT = 4000 || process.env.PORT

eventServer.listen(PORT,()=>{
    console.log(`Server ${4000} running successfully`);
})

eventServer.get('/',(req,res)=>{
    res.send(`<h1>server running successfully and redy to accept client request</h1>`)
})