import User from "../data/userModel.js";
import bcrypt from 'bcryptjs';


// Crear
async function createUser({  username, password}) {
  const hash = await bcrypt.hash(password, 10)
   const user = new User({  username, password: hash });
    return await user.save();
}

// Obtener todas
async function getAllUsers() {
  return await User.find();
}

// Obtener por id
async function getUserById(id) {
 return await User.findById(id);
}

// Actualizar
async function updateUser(id, {  username, passwordHash, notes }) {
 return await User.findByIdAndUpdate(
      id,
      { $set: { username, passwordHash, notes} },
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
