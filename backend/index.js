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
    "mongodb+srv://shankit119:shankit119@recipeapp.lyhm8e9.mongodb.net/?retryWrites=true&w=majority&appName=RecipeApp",{
        
        dbName: "RecipeApp"
    }
).then(()=> console.log("MongoDB is Connected...!")).catch((err)=> console.log(err.message));

app.get("/", (req,res) =>{
    console.log(process.env.PORT)
    res.json("hello");
})

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server is running on port ${port}`))








// shankit119
// bCx1kNBs6VJP0YoI
// mongodb+srv://shankit119:<password>@cluster0.cizuwel.mongodb.net/