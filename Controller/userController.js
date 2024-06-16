const users = require('../Model/usersSchema')

const jwt = require('jsonwebtoken')

//register
exports.register = async(req,res)=>{
    console.log('inside controller request');
    const {username,email,password} = req.body
    try{const existUser = await users.findOne({email})

    if(existUser){
        res.status(406).json('Acount alrady exist.... please login')
    }
    else{
        const newUser = new users({
            username,
            email,
            password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }}
    catch(err){
        console.log('Register request failed due to ',err);
        res.status(401).json('Register request failed due to ',err)
    }
}

//login
exports.login = async(req,res)=>{
    console.log('inside controller login function');

    const{email,password}=req.body

    try{const existingUser = await users.findOne({email,password})
    console.log(existingUser);
    if(existingUser){
        const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")
        res.status(200).json({
            existingUser,
            token
        })
    }
    else{
        res.status(406).json('Incorect email or password')
    }}
    catch(err){
        res.status(401).json(`login failed dew to ${err}`)
    }
}

//edit profile
// exports.editProfile = async(req,res)=>{
//     const userId = req.payload 

//     const {phoneNumber,numberOfPersons,profile} = req.body

//     const uploadProfileImage = req.file?req.file.filename:profile

//     try {
//         const updateUser = await users.findByIdAndUpdate({_id:userId},{phoneNumber,numberOfPersons,profileImage:uploadProfileImage},{new:true})

//         await updateUser.save()
//         res.status(200).json(updateUser)

//     } catch (err) {
//         res.status(401).json(err)
//     }
// }