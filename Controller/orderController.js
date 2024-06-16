const orders = require('../Model/orderModel')

//post number of participents
exports.addNumberOfParticipents = async(req,res)=>{
    console.log('inside order controller');
    const userId = req.payload
    console.log(userId)

    const profileImage = req.file.filename
    console.log(profileImage);

    const {phoneNumber,numberOfPersons} = req.body
    console.log(`${phoneNumber},${numberOfPersons},${profileImage},${userId}`);

    try {
        const existingUser = await orders.findOne({phoneNumber,numberOfPersons})
        if(existingUser){
            res.status(406).json('You already ordered using this phn number.Please delete your orders and mack a new oredr..')
        }
        else{
            const newOrder = new orders({
                phoneNumber,numberOfPersons,profileImage,userId
            })
            await newOrder.save()

            res.status(200).json(newOrder)
        }

    } 
    catch(err){
        res.status(401).json(`request failed deu to ${err}`)
    }
    
}

//get number of participents

exports.getNumberOfParticipents = async(req,res)=>{
    console.log('inside order controller');
    const userId = req.payload
    console.log(userId)

    try {
        const cardProfile = await orders.find({userId})
        // .limit(1)
        res.status(200).json(cardProfile)
    } catch (err) {
        res.status(401).json(`request failed deu to ${err}`)
    }
}

//edit profile
exports.editProfile = async(req,res)=>{
    
    const userId = req.payload 

    const {numberOfPersons,phoneNumber,profileImage} = req.body
    
    // const uploadProfileImage = req.file?req.file.filename:profile

    try {
        const updateUser = await orders.findOneAndUpdate({userId:userId},{phoneNumber,numberOfPersons,profileImage,userId},{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)

    } catch (err) {
        res.status(401).json(err)
    }
}

