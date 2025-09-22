import mongoose, {model} from "mongoose";


const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    important: Boolean,
    user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
    }
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();  
        delete returnedObject.__v;
    }
})

const Note = model('Note', noteSchema);

export default Note;