
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

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
        discription:{
            type:String,
            require:true
        },
        userId:{
            type:String,
            require:true
        }
    // order:{
    //     phoneNumber:{
    //         type:Number,
    //         require:true
    //     },
    //     numberOfPersons:{
    //         type:String,
    //         require:true
    //     },
    //     profileImage:{
    //         type:String,
    //         require:true
    //     },
    //     userId:{
    //         type:String,
    //         require:true
    //     }
    // },
    
},
{
    versionKey: false
}
)

const cartStages = mongoose.model('cartStages',cartSchema)

module.exports = cartStages