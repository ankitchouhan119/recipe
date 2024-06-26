import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true


}))

// userRouter
app.use('/api', userRouter)

// recipe router
app.use('/api', recipeRouter)



mongoose.connect(
    "mongodb+srv://shankit119:KVUmTqQyN7GNjblM@recipeapp.lyhm8e9.mongodb.net/",{
        dbName: "RecipeApp"
    }
).then(()=> console.log("MongoDB is Connected...!")).catch((err)=> console.log(err.message));

const port = 5000;

app.listen(port, ()=> console.log(`server is running on port ${port}`))








// shankit119
// bCx1kNBs6VJP0YoI
// mongodb+srv://shankit119:<password>@cluster0.cizuwel.mongodb.net/