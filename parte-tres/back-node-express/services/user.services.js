import User from "../data/userModel.js";
import bcrypt from 'bcryptjs';


// Crear
async function createUser({  username, password}) {
  const hash = await bcrypt.hash(password, 10)
  const userExists = await User.findOne({ username });
    if (userExists) {
      throw new Error('El usuario ya existe');
    }
  const user = new User({  username, password: hash });
   return await user.save();
}

// Obtener todas
async function getAllUsers() {
  return await User.find({}).populate('notes', {
    content: 1,
    date: 1,
    _id: 0
  });
}

// Obtener por id
async function getUserById(id) {
 return await User.findById(id);
}

// Actualizar
async function updateUser(id, {  username, password, notes }) {
 return await User.findByIdAndUpdate(
      id,
      { $set: { username, password, notes} },
      { new: true } // devuelve la nota actualizada
 )
}

// Eliminar
async function deleteUser(id) {
  
    const result = await User.findByIdAndDelete(id);
    return result ? true : false;
   
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
