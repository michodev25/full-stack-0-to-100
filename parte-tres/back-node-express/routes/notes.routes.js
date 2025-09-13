import express from 'express';

const notasRouter = express.Router();

// Obtener todas las notas
notasRouter.get('/', (req, res) => {
    // Lógica para obtener todas las notas
    res.send('Obtener todas las notas');
});

// Obtener una nota por ID
notasRouter.get('/:id', (req, res) => {
    // Lógica para obtener una nota por ID
    res.send(`Obtener nota con ID: ${req.params.id}`);
});

// Crear una nueva nota
notasRouter.post('/', (req, res) => {
    // Lógica para crear una nueva nota
    res.send('Crear una nueva nota');
});

// Actualizar una nota por ID
notasRouter.put('/:id', (req, res) => {
    // Lógica para actualizar una nota por ID
    res.send(`Actualizar nota con ID: ${req.params.id}`);
});

// Eliminar una nota por ID
notasRouter.delete('/:id', (req, res) => {
    // Lógica para eliminar una nota por ID
    res.send(`Eliminar nota con ID: ${req.params.id}`);
});

export default  notasRouter;