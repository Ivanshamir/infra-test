import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('API Endpoints', () => {
  it('GET /test should return current timestamp', async () => {
    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('api', 'testApi');
    expect(res.body).toHaveProperty('result');
    expect(typeof res.body.result).toBe('number');
  });

  it('GET /dateonly should return current date', async () => {
    const res = await request(app).get('/dateonly');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('api', 'testApi');
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('POST /dateonly should return formatted date and time', async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const res = await request(app)
      .post('/dateonly')
      .send({ timestamp })
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('api', 'testApi');
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});