import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_IRL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detiene el servidor si no hay conexión
  }
};
export default conectarDB;
export const noteSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    important: Boolean
})

export const Note = mongoose.model('Note', noteSchema);

