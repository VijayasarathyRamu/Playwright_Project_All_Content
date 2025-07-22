// import { expect } from 'playwright/test';
import {expect} from '@playwright/test';
import { test } from './fixtureTask';

// test('verify products page after login', async ({ page, login }) => {
//   await login(); // performs login using fixture
//   // Now you can add assertions, e.g.:
// //   await page.waitForSelector('.inventory_list'); // Example assertion
// });

test("display product after login",async({loggedInPage})=>{
    await expect(loggedInPage.locator('.product_label')).toHaveText("Products");
});
