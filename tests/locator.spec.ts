import {test,chromium,Page,Locator, Browser} from '@playwright/test';

test("Locator",async()=>{
    const browser:Browser = await chromium.launch({headless: false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("http://127.0.0.1:5500/form.html");

    const fname:Locator = await page.locator("#txt1");
    await fname.fill("vijayasarathy");

    const password:Locator = await page.locator("#txt2");
    await password.fill("vijayasarathy@123");
    // await fname.fill("vijayasarathy");

    //3.use of class selector

     const logo:Locator = await page.locator(".logo");
     const logoExist = await logo.isEnabled();
     console.log(logoExist);
     const contact:Locator = await page.locator(".txtContact");
     await contact.fill("8768678768");

    //4.use of text selector

    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);

    //5.use of css property tag name
    const email:Locator = await page.locator("#hh");
    await email.fill("vijayasarathy.ramu@gmail.com")

    //6. use of css property tag name
    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("Chennai")

    // use of css property tag name
    // const pincode:Locator = await page.locator("css=input#txtpincode");
    // await pincode.fill("600097")

    //7. use of xpath selector
    // const pincode: Locator = await page.locator('xpath=//input[@id="txtpincode"]');

    //                       (or)
    const pincode: Locator = await page.locator('xpath=//input[@name="pincode"]');
    await pincode.fill("600097");

    // xpath=//input[@id="txtpincode"]

    const checkbox:Locator = await page.locator("xpath=//input[@name=term]");
     const checkExist = await checkbox.isEnabled();
     console.log(checkExist);

});