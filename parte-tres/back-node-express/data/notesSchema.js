import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    important: Boolean
})
export default noteSchema;