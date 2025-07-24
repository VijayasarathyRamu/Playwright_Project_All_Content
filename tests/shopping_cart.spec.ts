import {test} from '@playwright/test';

// test("login",async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/");
    
//     await page.pause();
// });

test('test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: '2' }).click();
    await page.getByRole('link', { name: 'CHECKOUT' }).click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('vijay');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('sarathy');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('614810');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('link', { name: 'FINISH' }).click();
    await page.locator('#header_container div').first().click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.pause();
  });

// test.beforeEach("Login",async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/")
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.getByRole('button', { name: 'LOGIN' }).click();
// });
// test("Add to Cart",async({page})=>{
//     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
//     await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
//     await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
//     await page.getByRole('button', { name: 'ADD TO CART' }).click();
//     await page.getByRole('button', { name: '<- Back' }).click();
// });
// test("Logout",async({page})=>{
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.getByRole('link', { name: 'Logout' }).click();
//     await page.pause()
// });