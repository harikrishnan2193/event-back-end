const cartStages = require('../Model/cartStageModel')
const stages = require('../Model/stageModel')

//get all stage from database
exports.getAllStagesController =async(req,res) =>{
    try{
        const allStages = await stages.find()
        res.status(200).json(allStages)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}

//get a stage from cart
exports.getAStageFromCartController =async(req,res) =>{
    const userId =req.payload
    try{
        const selectedstage = await cartStages.find({userId})
        res.status(200).json(selectedstage)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}