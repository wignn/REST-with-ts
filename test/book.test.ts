import supertest from 'supertest';
import {userTest, bookTest} from './test-util';
import { web } from '../src/application/web';
describe('POST /api/books', () => {
    beforeEach(async () => {
        await userTest.create();
    })
    afterEach(async () => {
        await userTest.delete();
        await bookTest.deleteAll();
    })

    it('should create new book', async () => {
        const response = await supertest(web)
        .post('/api/books')
        .set("X-API-TOKEN", "test")
        .send({
            title: "new book",
            author: "new author",
            description: "new description",
            cover: "new cover" 
        })
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.data.title).toBe("new book");
    })

    
});