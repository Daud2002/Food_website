import mongoose from "mongoose";

export const connectDB  = async () =>{
    await mongoose.connect('mongodb+srv://daudmir3:daudmir3@cluster0.ha9ulcg.mongodb.net/food_website')
    .then(()=>console.log("DB CONNECTED"));
}