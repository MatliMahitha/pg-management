const express = require('express')
const app = express()
const configureDB = require('./config/database')
configureDB()
const router = require('./config/routes')
const port = 3009
   
app.use(express.json())
app.use('/',router)

app.listen(port,() => {
    console.log('listening to port',port)
})

