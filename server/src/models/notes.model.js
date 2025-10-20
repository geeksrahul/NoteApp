import mongoose from "mongoose"

const notesSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        favourite: Boolean,
    },
    {
        timestamps: true,
    }
)

export const Notes = mongoose.model("Notes", notesSchema)