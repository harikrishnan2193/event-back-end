const mongoose = require('mongoose')

const destinationSchena = new mongoose.Schema({
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

const destinatons = mongoose.model('destinatons',destinationSchena)

module.exports = destinatons