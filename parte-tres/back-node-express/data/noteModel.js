import mongoose, {model} from "mongoose";
import noteSchema from "./notesSchema.js";

const Note = model('Note', noteSchema);

export default Note;