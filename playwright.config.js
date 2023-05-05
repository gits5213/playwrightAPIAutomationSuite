const { defineConfig, devices } = require('@playwright/test');
const { expect } = require('@playwright/test');
const { default: playwrightApiMatchers } = require('odottaa');
expect.extend(playwrightApiMatchers);

const postman_curl_auth = 'dfgstre34523465346gfdsgsfgs45245gfsdgsfg==';

module.exports = defineConfig({
  testDir: './tests',
  
  reporter: [
    ['list', {printSteps: true}],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ]

  ],
  use: {
    baseURL: 'https://reqres.in',
    // baseURL: 'https://api.deve.com',
    // extraHTTPHeaders: {
    //   'content-type':'application/x-www-form-urlencoded',
    //   'Authorization': `Basic ${postman_curl_auth},`
    // },
    trace: 'on-first-retry',
  },
});

