const hillstatins = require('../Model/hillstationModel')



//get all hillstation from database
exports.getAllHillstationController =async(req,res) =>{
    try{
        const allHillstation = await hillstatins.find()
        res.status(200).json(allHillstation)
    }catch(error){
        res.status(401).json(`Request failed due to ${error}`)
    }
}
