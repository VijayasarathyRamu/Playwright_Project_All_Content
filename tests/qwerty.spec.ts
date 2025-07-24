import {Locator, test} from '@playwright/test';
import {LoginPage} from './pages/LoginPage';
import { users } from './pages/credntials';
for (let user of users){
    test.beforeEach(`${user.tetscase}`,async({page})=>{

        const loginpaheObj = new LoginPage(page);
        await loginpaheObj.goto();
        await loginpaheObj.login(user.username,user.password);
    });
    test("Add to Cart",async({page})=>{
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
    });
    test("Logout",async({page})=>{
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        // await page.pause()
    });
}