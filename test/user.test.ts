import { logger } from '../src/application/loggin';
import { web } from './../src/application/web';
import supertest from "supertest"
import { userTest } from './test-util';

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


describe('POST /api/users', () => {
    afterEach(async () => {
        await userTest.delete();
    })
    it('should register new user if request is valid', async () => {
        const response = await supertest(web)
        .post('/api/users')
        .send({
            username: 'test',
            password: 'password',
            name: 'test',
            email: 'test@example.com'
                    });
                    logger.debug(response.body);
                    expect(response.status).toBe(201);
                    expect(response.body).toBeDefined();
                    expect(response.body.data.name).toBe("test");
                    expect(response.body.data.username).toBe("test");
                    expect(response.body.data.email).toBe("test@example.com")
                });
            });