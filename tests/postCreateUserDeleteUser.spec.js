// @ts-check
const { test, expect } = require('@playwright/test');
import createUserJsonRequestBody from '../requestBody/createUserRequestBody.json';

const resourceEndPoint = '/api/users'

test.describe('create user and delete user endpoints', () => {
    test('create user and delete User', async ({ request, baseURL }) => {
        const response = await request.post(`${baseURL}${resourceEndPoint}`, {
            data: createUserJsonRequestBody
        })
        expect (await response.status()).toBe(201);
        const body = await response.json();
        const ID = body.id;
        console.log("Create User ID: " + ID);

        const deleteResponse = await request.delete(`${baseURL}${resourceEndPoint}/${ID}`)
        expect (await deleteResponse.status()).toBe(204);
        console.log(await deleteResponse.statusText());
        console.log(await deleteResponse.status());
    });
});


