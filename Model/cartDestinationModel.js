
const mongoose = require('mongoose')

const cartDestinationSchema = new mongoose.Schema({

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
        },
        userId:{
            type:String,
            require:true
        }
   
    
},
{
    versionKey: false
}
)

const cartDestinations = mongoose.model('cartDestinations',cartDestinationSchema)

module.exports = cartDestinations