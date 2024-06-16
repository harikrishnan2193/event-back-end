const mongoose = require('mongoose')

const stageSchena = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    packageName:{
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

const stages = mongoose.model('stages',stageSchena)

module.exports = stages