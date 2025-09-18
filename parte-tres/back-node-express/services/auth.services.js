import bcrypt from 'bcryptjs';
import User from '../data/userModel.js';


async function login(username, password) {
    const user = await User.findOne({ username }).select(password);
     console.log(user.password)
    const isPasswordValid = user === null 
      ? false 
      : await bcrypt.compare(password, user.password);
      console.log(isPasswordValid)
    if (!isPasswordValid) {
        throw new Error('Contraseña o Usuario incorrecto');
    }
    return user;
}

async function register(username, password) {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('El usuario ya existe');
    }   
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    return await newUser.save();
}   

export default {
    login,
    register
};