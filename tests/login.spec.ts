import {test,expect,chromium,Page,Locator, Browser} from '@playwright/test';

test("Login Test",async()=>{
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();

    await page.goto("http://quiz.hematitecorp.com/");

    const email:Locator = await page.locator("#email");
    const password:Locator = await page.locator("#password");
    // const button:Locator = await page.locator("#.MuiButtonBase-root");
    const submitButton:Locator = await page.locator("[type='submit']");

    await email.fill("vijayasarathy.r@changepond.com");
    await password.fill("@Vijay997670");
    await submitButton.click();

    const title = await page.title();
    console.log("Home page title",title);
    await page.screenshot({path: 'VocherCode.png'});

    expect(title).toEqual("Quiz App");

    // browser.close();
})
