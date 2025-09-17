import userService from '../services/user.services.js';

// Crear usuario
export async function createUser(req, res) {
  try {
    const { username, password} = req.body;
    
    const newUser = await userService.createUser({ username, password});
    console.log(username + password)
    res.status(201).json(newUser);
  } catch (error) {
    console.error('❌ Error al crear usuario:', error.message);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

// Obtener todos los usuarios
export async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('❌ Error al obtener usuarios:', error.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

// Obtener usuario por ID
export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    console.error('❌ Error al obtener usuario:', error.message);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
}

// Actualizar usuario
export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { username, passwordHash, notes } = req.body;
    const updatedUser = await userService.updateUser(id, { username, passwordHash, notes });
    if (!updatedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('❌ Error al actualizar usuario:', error.message);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
}

// Eliminar usuario
export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deleted = await userService.deleteUser(id);
    if (!deleted) return res.status(404).json({ error: 'Usuario no encontrado' });
       res.status(204).send(); // No Content
  } catch (error) {
    console.error('❌ Error al eliminar usuario:', error.message);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
}
