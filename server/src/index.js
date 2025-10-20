import app from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./database/index.js";

dotenv.config({
    path: ".env"
})

const port = process.env.PORT || 3000

connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log(`server started at port : ${port}`)
    })
}).catch(()=>{
    console.log(`Error in starting server`)
})

