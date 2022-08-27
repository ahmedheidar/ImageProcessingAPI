import supertest from "supertest"
import app from "../../main/index"

const request = supertest(app);

describe('Test endpoint responses', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    }
)});