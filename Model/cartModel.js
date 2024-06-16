
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
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
        },
        userId:{
            type:String,
            require:true
        },

    // stage:{
    //     id:{
    //         type:Number,
    //         require:true,
    //         unique:true
    //     },
    //     packageName:{
    //         type:String,
    //         require:true
    //     },
    //     image:{
    //         type:String,
    //         require:true
    //     },
    //     price:{
    //         type:String,
    //         require:true
    //     },
    //     description:{
    //         type:String,
    //         require:true
    //     },
    //     userId:{
    //         type:String,
    //         require:true
    //     }
    // },
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

const carts = mongoose.model('carts',cartSchema)

module.exports = carts