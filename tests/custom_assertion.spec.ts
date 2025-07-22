import {test,expect} from '@playwright/test';

test("custom assertion",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assetioneaxample.html");
    await page.pause();

    //ex-1 it will check is greater than 10
    // const textValue:any = await page.locator("#d1").textContent();
    // const value = parseInt(textValue || '0');

    // await expect(value>10).toBeTruthy();

    //ex-2
    // const textValue1:any = await page.locator("#d2").textContent();
    

    // await expect(textValue1.length>5).toBeTruthy(); 
    //                  (or)
    // await expect(textValue1.length).toBeGreaterThan(10);

    // another example for reusably
    const message = await page.locator("#d2");
    await asertMinCharLength(message,5);
});

const asertMinCharLength = async(locator:any,minLength:number)=>{
    const text = await locator.textContent();
    await expect((text||'').length).toBeGreaterThan(minLength);
}