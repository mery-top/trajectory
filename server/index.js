const express = require('express')
const dotenv = require("dotenv").config()
const cors = require("cors")
const {mongoose} = require("mongoose")


// Mongodb connection
mongoose.connect(process.env.MONGO_URL).then(() =>{console.log('Database connected')}).catch((err) =>{
    console.log(err)
})

const app = express()

const PORT = 8000


app.use('/', require("./routes/authRoutes"))


app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})

