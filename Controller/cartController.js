const carts = require('../Model/cartModel')
const cartStages = require('../Model/cartStageModel')
const cartDestinatins = require('../Model/cartDestinationModel')

//add food to cart
exports.addFoodToCart = async(req,res)=>{
    const {id,name,image,price,description} = req.body
    const userId = req.payload
    console.log(userId);

    try {
        const existingFood = await carts.findOne({id,userId})
        if(existingFood){
            res.status(406).json('Product allrady in youer order')
        }
        else{
            const newFood = new carts({
                // id,name,image,price,description,userId
                    id:id,
                    name:name,
                    image:image,
                    price:price,
                    description:description,
                    userId:userId
                
            })
            await newFood.save()
            res.status(200).json(newFood)
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
    
}

//add stage to cart
exports.addStageToCart = async(req,res)=>{

    const {id,packageName,image,pricing,discription} = req.body
    const userId = req.payload
    console.log(userId);
    
    try {
        const existingStage = await cartStages.findOne({userId})
        if(existingStage){
            res.status(406).json('You allrady book youer stage...if you whants to change it please deleate on cart')
        }
        else{
            const newStage = new cartStages({
                // id,name,image,price,description,userId
                    id:id,
                    packageName:packageName,
                    image:image,
                    price:pricing,
                    discription:discription,
                    userId:userId
            })
            await newStage.save()
            res.status(200).json(newStage)
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}

//add destinations to cart
exports.addDestinationToCart = async(req,res)=>{

    const {id,name,image,price,location,seating} = req.body
    const userId = req.payload
    console.log(userId);
    
    try {
        const existingDestination = await cartDestinatins.findOne({userId})
        if(existingDestination){
            res.status(406).json('You allrady book youer destination...if you whants to change it please deleate on cart')
        }
        else{
            const newDestination = new cartDestinatins({
                // id,name,image,price,description,userId
                    id:id,
                    name:name,
                    image:image,
                    price:price,
                    seating:seating,
                    location:location,
                    userId:userId
            })
            await newDestination.save()
            res.status(200).json(newDestination)
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}

//delete destinaton from cart
exports.deleteDestination = async(req,res)=>{
    const {id} = req.params

    try {
        const removeDestination = await cartDestinatins.findByIdAndDelete({_id:id})
        res.status(200).json(removeDestination)
    } catch (error) {
        res.status(401).json(error)
    }
}

//delete stage from cart
exports.deleteStage = async(req,res)=>{
    const {id} = req.params

    try {
        const removeStage = await cartStages.findByIdAndDelete({_id:id})
        res.status(200).json(removeStage)
    } catch (error) {
        res.status(401).json(error)
    }
}

//delete food from cart
exports.deleteFood = async(req,res)=>{
    const {id} = req.params

    try {
        const removeFood = await carts.findByIdAndDelete({_id:id})
        res.status(200).json(removeFood)
    } catch (error) {
        res.status(401).json(error)
    }
}
