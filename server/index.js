const express = require('express')
const dotenv = require("dotenv").config()
const cors = require("cors")
const {mongoose} = require("mongoose")
const app = express()

// Mongodb connection
mongoose.connect(process.env.MONGO_URL).then(() =>{console.log('Database connected')}).catch((err) =>{
    console.log(err)
})

const PORT = 8000

app.use(express.json())
app.use('/', require("./routes/authRoutes"))
app.use("/register", require("./routes/authRoutes"))

app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})

