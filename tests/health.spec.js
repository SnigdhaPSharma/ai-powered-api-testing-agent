import {test, expect} from '@playwright/test';

test('GET /health should return 200 and UP status', async({ request }) => {

    const response = await request.get('/health');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.status).toBe('UP');
    expect(responseBody.service).toBe('Order Management API');
});