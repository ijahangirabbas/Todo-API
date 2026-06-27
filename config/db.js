const mongoose = require('mongoose')

async function connectDB() {
try{
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true)
    }
    // if (!process.env.MONGODB_URI) {
    //   throw new Error("MONGODB_URI is missing from .env");
    // }
    await mongoose.connect(
        process.env.MONGODB_URI,
    )
    console.log('Connected to MongoDB')
}
catch(error){
    console.error(
        "DB Connection Failed"
    )
    error.message
    process.exit(1)
}
}

module.exports = connectDB

