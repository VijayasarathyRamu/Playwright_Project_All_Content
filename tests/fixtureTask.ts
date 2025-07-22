import { test as base, Browser, BrowserContext, chromium, Page } from '@playwright/test';

// type SauceDemoFixture = {
//   login: () => Promise<void>;
// };

// export const test = base.extend<SauceDemoFixture>({
//   login: async ({ page }, use:any) => {
//     await page.goto("https://www.saucedemo.com/v1/");
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.getByRole('button', { name: 'LOGIN' }).click();
//     await use(); // <--- Important: call use() to signal fixture is ready
//   },
// });

type MyFixture={
    loggedInPage:any;
}
export const test = base.extend<MyFixture>({
    loggedInPage: async ({}, use: any) => {
        const browser:Browser = await chromium.launch();
    const context:BrowserContext =await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    // console.log("login sucessfull");
    // await use("login sucess")
    // await context.close()
    await use(page);
    await context.close()
       
      },
});