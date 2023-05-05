// @ts-check
const { test, expect } = require('@playwright/test');
import createUserJsonResponseBody from '../resonseBody/createUser.json';
import createUserJsonRequestBody from '../requestBody/createUserRequestBody.json';

const resourceEndPoint = '/api/users'

test.describe('create user endpoints', () => {
  test('create user', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}${resourceEndPoint}`, {
      data: createUserJsonRequestBody
      })
    expect (await response.status()).toBe(201);
    console.log(await response.statusText());
    console.log(await response.status());
    console.log(await response.text());
    expect (await response.json()).toEqual(expect.objectContaining(createUserJsonResponseBody))
  });

});
