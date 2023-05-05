// @ts-check
const { test, expect } = require('@playwright/test');
import data from '../testData/data.json';
import processRefunBodyPayload from '../requestBody/createUserRequestBody.json';

const authServiceEndPoint = '/edgemicro-auth/token'
const prRequestBaseUrl = 'https://ref-process-dev.cloud.com';
const prServiceEndPoint = 'reef/v1/service/ref/proces/proceesfund';
const username = 'username';
const password = 'password';
const grant_type = 'grant_type';
const applicationJson = 'application/json';

test.skip('create user', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}${authServiceEndPoint}`, {
        form: {
            username: username,
            password: password,
            grant_type: grant_type,
        }
    });
    console.log(await response.statusText());
    const content = await response.json();
    console.log(content);

    const {access_token} = content;
    const prResonse = await request.post(`${prRequestBaseUrl}${prServiceEndPoint}`, {
        headers:{
            'content-type': applicationJson,
            authrization: `Bearer ${access_token}`,
        },
        data: processRefunBodyPayload
    })
    expect (prResonse.ok()).toBeTruthy();
    console.log('==========================')
    console.log(await response.statusText());
    expect(prResonse.status()).toBe(data.badRequestStatusCode);
    console.log(await prResonse.text());

});
