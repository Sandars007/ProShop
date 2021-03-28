import express from 'express'
import dotenv  from  "dotenv"
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
import {errorHandler,notFound} from './middleware/errormiddleware.js'

const app = express()
dotenv.config()

connectDB()
app.get("/",(req,res)=>{
    res.send("API running....")
})

app.use("/api/products",productRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(5000,console.log("Backend Server Started at port 5000 and running..."))
