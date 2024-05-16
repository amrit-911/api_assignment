import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import {createUser, deleteUser, getUser, updateUser} from "./controllers/User.js";


const app = express()
app.use(express.json())
dotenv.config()

app.post("/api/create", createUser)
app.get("/api/get", getUser)
app.patch("/api/update/:id", updateUser )
app.delete("/api/delete/:id", deleteUser )

// Mongoose Setup
const PORT = process.env.PORT || 6060
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT,()=> console.log(`Server Port: ${PORT}`))
}).catch((error)=>console.log("error: ",error))

