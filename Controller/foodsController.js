const carts = require('../Model/cartModel')
const foods = require('../Model/foodModel')



//get all foods from database
exports.getAllFoodsController =async(req,res) =>{
    try{
        const allFoods = await foods.find()
        res.status(200).json(allFoods)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}

//get allselected food from cart
exports.getAllFoodFromCartController =async(req,res) =>{
    const userId = req.payload
    try{
        const allSelectedFood = await carts.find({userId})
        res.status(200).json(allSelectedFood)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}
