import { logger } from '../src/application/loggin';
import { web } from './../src/application/web';
import supertest from "supertest"

describe('POST /api/users', () => {
    it('should reject register new user if request is invali', async () => {
        const response = await supertest(web)
        .post('/api/users')
        .send({
            username: '',
            password: '',
            email: '',
            name: ''
        })
        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body).toBeDefined();
    })
   
})