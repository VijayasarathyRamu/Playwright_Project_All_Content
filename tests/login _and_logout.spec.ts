import {test} from '@playwright/test';
import { describe } from 'node:test';
// test("login",async({page})=>{
//     await page.goto("http://quiz.hematitecorp.com/")
//     // await page.pause();

// });
describe("test cases for Souce App",()=>{
    test.beforeEach('test', async ({ page }) => {
        await page.goto("http://quiz.hematitecorp.com/")
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('vijayasarathy.r@changepond.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('@Vijay997670');
        await page.getByRole('button', { name: 'Sign In' }).click();
        // await page.getByRole('button', { name: 'Logout' }).click();
        // await page.getByRole('button', { name: 'Logout' }).click();
        // await page.pause();
    });
    test('logout', async ({ page }) => {
        await page.getByRole('button', { name: 'Logout' }).click();
        // await page.pause();
    });

// test('login', async ({ page }) => {
//     await page.goto("http://quiz.hematitecorp.com/")
//     await page.getByRole('textbox', { name: 'Email Address' }).click();
//     await page.getByRole('textbox', { name: 'Email Address' }).fill('vijayasarathy.r@changepond.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('@Vijay997670');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//   });

// test('logout',async({page})=>{
//     await page.getByRole('button', { name: 'Logout' }).click();
//     await page.getByRole('button', { name: 'Logout' }).click();
//     await page.pause();
// })
});
