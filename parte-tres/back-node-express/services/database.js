import mongoose from 'mongoose';

import Note from '../data/noteModel.js';


const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_IRL);
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detiene el servidor si no hay conexión
  }
};
export default conectarDB;
