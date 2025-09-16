import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();    
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);  
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); 
    }       
};

const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema);
export default {noteSchema, conectarDB, Note};