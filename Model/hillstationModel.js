const mongoose = require('mongoose')

const hillstationSchena = new mongoose.Schema({
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
    location:{
        type:String,
        require:true
    },
    seating:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const hillstatins = mongoose.model('hillstatins',hillstationSchena)

module.exports = hillstatins