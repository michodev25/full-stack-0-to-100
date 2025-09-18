import authService from '../services/auth.services.js';
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await authService.login(username, password);
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        res.json({ message: 'Login exitoso', user });
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }   
};
export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await authService.register(username, password);
        res.status(201).json({ message: 'Usuario registrado', newUser });
    } catch (error) {       
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

