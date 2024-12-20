const {mongoose} = require("mongoose")
const {Schema} = mongoose

// Creating Schema
const userSchema = new Schema ({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    roadmaps: String,
    elaborate: String,
    summarize: String

})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel