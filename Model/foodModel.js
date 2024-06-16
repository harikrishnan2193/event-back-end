
const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const foods = mongoose.model('foods',foodSchema)

module.exports = foods