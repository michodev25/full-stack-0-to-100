import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../data/userModel.js';


async function login(username, password) {
    const user = await User.findOne({ username }).select(password);
   
    const isPasswordValid = user === null 
      ? false 
      : await bcrypt.compare(password, user.password);
 
    if (!(isPasswordValid)) {
        throw new Error('Contraseña o Usuario incorrecto');
    }
    const userForToken = {
        id: user._id,
        username: user.username
    };
    const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: '1h' });

    return {user, token};
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