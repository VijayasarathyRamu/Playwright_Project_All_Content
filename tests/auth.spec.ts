import {Browser, BrowserContext, chromium, Page, test} from '@playwright/test';

test("auth test",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browsercontext1:BrowserContext = await browser.newContext();
    const page:Page = await browsercontext1.newPage();

    //bellow aproach is not goood idea for authorization
    // await page.goto("http://userpass@quiz.hematitecorp.com/");
    await page.goto("http://quiz.hematitecorp.com/");

    const userId:string = "vijayasarathy.r@changepond.com";
    const userPass:string = "@Vijay997670";
    const authHeader:string = "Basic "+btoa(userId+":"+userPass);

    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz.hematitecorp.com/");

    // browsercontext1.close();
    // browser.close();

    // await new Promise(()=>{})
})