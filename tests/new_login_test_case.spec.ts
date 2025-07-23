
//End TO END INTEGRATION

// import {Locator, test} from '@playwright/test';


// test("login_test_case",async({page})=>{
//     // await page.goto("https://www.saucedemo.com/v1/");
//     // await page.locator('[data-test="username"]').click();
//     // await page.locator('[data-test="username"]').fill('standard_user');
//     // await page.locator('[data-test="password"]').click();
//     // await page.locator('[data-test="password"]').fill('secret_sauce');
//     // await page.getByRole('button', { name: 'LOGIN' }).click();
//     // await page.pause()
// })
 //                   (or)
// test("login_test_case",async({page})=>{
//     await page.goto("https://www.saucedemo.com/v1/");
//     const user:Locator = await page.locator('[data-test="username"]');
//     const password:Locator = await page.locator('[data-test="password"]');
//     const login:Locator = await page.locator(".btn_action");
//     await user.fill('standard_user');
//     await password.fill('secret_sauce');
//     await login.click();
//     await page.pause();
// });
 //             (or) using for multi purpose like export file
// import {Locator, test} from '@playwright/test';
// import {LoginPage} from './pages/LoginPage';

// test("login with valid credentials",async({page})=>{

//     const loginpaheObj = new LoginPage(page);
//     await loginpaheObj.goto();
//     await loginpaheObj.login('standard_user','secret_sauce');
// });


//         (or)
import {Locator, test} from '@playwright/test';
import {LoginPage} from './pages/LoginPage';
import { users } from './pages/credntials';
// const users:any[] = [
//     {username:"standard_user",password:"secret_sauce",tetscase:"login with credentials"},
//     {username:"standard_user",password:"secret_sauce",tetscase:"login with locked user"}
// ]   // i am not using this way .i need used separate file for credentials so i command this kind of lines
for (let user of users){
    test(`${user.tetscase}`,async({page})=>{

        const loginpaheObj = new LoginPage(page);
        await loginpaheObj.goto();
        await loginpaheObj.login(user.username,user.password);
    });
}