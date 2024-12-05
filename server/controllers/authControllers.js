const User = require("../models/user")

const test = (req, res)=>{
    res.json("test is working")
}


const registerUser = async (req, res) =>{
    try{
        const {name, email, password} = req.body
        // Check name
        if(!name){
            return res.json({
                error:"name is required "
            })
        }
        // Check Password
        if(!password || password.length <6){
            return res.json({
                error:"password is required and should be atleast 6 characters long"
            })
        }

        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error:"email already exists"
            })
        }

        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}