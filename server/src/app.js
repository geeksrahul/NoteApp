import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json({
    limit: "16kb"
}))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

import notesRouter from "./routes/notes.route.js"
app.use("/api/v1/notes", notesRouter)

export default app