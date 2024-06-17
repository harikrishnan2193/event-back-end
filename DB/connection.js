
const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then(()=>{
    console.log('Mongodb Connect Succesfulliy');
}).catch((err)=>{
    console.log(`Mongodb Connection Failed ${err}`);
})