import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`mongodb connection : succeed`)
    } catch (error) {
        console.log(`mongodb connection : failed \n ${error}`)
    }
}

export {connectDb}