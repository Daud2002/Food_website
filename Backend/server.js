import express from 'express'
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodroute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"


// App Config

const app = express();
const port = 4000;

// middleware

app.use(express.json())
app.use(cors())

// DB connection

connectDB();

// API End Points

app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)

// Get Method

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

// Listening

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})


// mongodb+srv://daudmir3:daudmir3@cluster0.ha9ulcg.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0