import mongoose from "mongoose"

const connectDB = async () =>{
    try{
    const conn = await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })

    console.log(`MONGO DB IS CONNECTED: ${conn.connection.host}`)
}
catch(err){
    console.log(`Error: ${err}`)
}
}

export default connectDB