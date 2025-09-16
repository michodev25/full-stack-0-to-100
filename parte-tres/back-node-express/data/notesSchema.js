import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    important: Boolean
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();  
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

export default noteSchema;