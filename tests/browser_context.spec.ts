import {test,chromium,Browser,BrowserContext,Page, Locator, expect} from '@playwright/test'

test('testing browser context',async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});

    //browsercontext-1
    const browsercontext_1:BrowserContext = await browser.newContext();
    const page1:Page = await browsercontext_1.newPage();

    //browsercontext-2
    const browsercontext_2:BrowserContext = await browser.newContext();
    const page2:Page = await browsercontext_2.newPage();

    // page1 credentials
    await page1.goto("http://quiz.hematitecorp.com/");
    const email1:Locator = await page1.locator('#email');
    const password1:Locator = await page1.locator('#password');

    const submitButton1:Locator = await page1.locator("[type='submit']");

    await email1.fill("siddique.c@changepond.com");
    await password1.fill("Siddique@123");
    await submitButton1.click();

    const title1 = await page1.title();
    console.log("Home Page Title",title1);
    await page1.screenshot({path:'vocherCode1.png'});

    expect(title1).toEqual("Quiz App")

    // page2 credentials
    await page2.goto("http://quiz.hematitecorp.com/");
    const email2:Locator = await page2.locator('#email');
    const password2:Locator = await page2.locator('#password');

    const submitButton2:Locator = await page2.locator("[type='submit']");

    await email2.fill("vijayasarathy.r@changepond.com");
    await password2.fill("@Vijay997670");
    await submitButton2.click();

    const title2 = await page1.title();
    console.log("Home Page Title",title2);
    await page1.screenshot({path:'vocherCode2.png'});

    expect(title2).toEqual("Quiz App")


    // await browsercontext_1.close();
    // await browsercontext_2.close();
    // browser.close();

    // await new Promise(()=>{

    // });
});