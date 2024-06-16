const mongoose = require('mongoose')

const orderSchena = new mongoose.Schema({
    phoneNumber:{
        type:Number,
        require:true
    },
    numberOfPersons:{
        type:String,
        require:true
    },
    profileImage:{
        type:String,
        
    },
    userId:{
        type:String,
        require:true
    }
})

const orders = mongoose.model('orders',orderSchena)

module.exports = orders