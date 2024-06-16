const destinatons = require('../Model/destinationModel')
const cartDestinations = require('../Model/cartDestinationModel')


//get all destination from database
exports.getAllDestinationController =async(req,res) =>{
    try{
        const allDestinations = await destinatons.find()
        res.status(200).json(allDestinations)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}

//get a destination from cart
exports.getADestinationFromCartController =async(req,res) =>{
    const userId = req.payload
    try{
        const selectedDestinations = await cartDestinations.find({userId})
        res.status(200).json(selectedDestinations)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}

