// @ts-check
const { test, expect } = require('@playwright/test');
import userListJsonResponseBody from '../resonseBody/getUserList.json';
import singleUserJsonResponseBody from '../resonseBody/getSingleUser.json';

const resourceEndPoint = '/api/users?page=2'

test.describe('user endpoints', () => {
  test('fetch user list', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}${resourceEndPoint}`)
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    // expect (await response.json()).toEqual(expect.objectContaining({
    //   "page": 2,
    //   "per_page": 6,
    //   "total": 12,
    //   "total_pages": 2
    // }))
    await expect(response).toMatchJSON(userListJsonResponseBody);
    console.log(await response.statusText());
    console.log(await response.status());
    console.log(await response.text());
  });

  test('fetch a single user', async ({ request }) => {
    const response = await request.get('/api/users/2')
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    await expect(response).toMatchJSON(singleUserJsonResponseBody);
    console.log(await response.statusText());
    console.log(await response.status());
    console.log(await response.text());
  });
});


