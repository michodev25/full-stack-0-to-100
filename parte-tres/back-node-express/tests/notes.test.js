const supertest = require('supertest');
import app from '../index.js';

const api = supertest(app);

describe('Notes API', () => {
    test('GET /api/notes should return all notes', async () => {
        const response = await api.get('/api/notes');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.headers['content-type']).toMatch(/application\/json/);

    });
});