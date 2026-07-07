const request = require('supertest');
const app = require('../server'); 

describe('POST /api/auth/login - Estructura Incompleta', () => {
    it('Debería retornar 400 Bad Request si faltan las credenciales', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({}); 

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Credenciales incompletas.');
    });
});