// import {test} from '@playwright/test'

// test.beforeEach("test 1",()=>{
//     console.log("Hi Praveen, Good Morning 1")
// });

// test("test 2",()=>{
//     console.log("Hi Siddique, Good Afternoon 2")
// });

// test("tset 3",()=>{
//     console.log("Hi Gopal, Good Evening 3")
// });

// test.afterEach("test 4",()=>{
//     console.log("Hi bala, Good Night 4")
// });

// the test cases run in singly 
// import {test} from '@playwright/test';

// test.beforeEach("test purpose",async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/");
//     // await page.pause();
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.getByRole('button', { name: 'LOGIN' }).click();
//     // await page.pause();

// });

// test("test purpose",async({page})=>{
//     // await page.goto("https://www.saucedemo.com/v1/");
//     // await page.pause();
//     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
//     await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
//     await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
//     await page.getByRole('button', { name: 'ADD TO CART' }).click();
//     await page.getByRole('button', { name: '<- Back' }).click();
//     // await page.pause();
// });

// test('log-out', async ({ page }) => {
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.getByRole('link', { name: 'Logout' }).click();
//   });



//decribe method

import {test} from '@playwright/test';
import { describe } from 'node:test';

describe("test cases for Souce App",()=>{

    test.beforeEach("test purpose",async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/");
        // await page.pause();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        // await page.pause();

    });

    test("test purpose",async({page})=>{
        // await page.goto("https://www.saucedemo.com/v1/");
        // await page.pause();
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
        // await page.pause();
    });

    test('log-out', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    });


});