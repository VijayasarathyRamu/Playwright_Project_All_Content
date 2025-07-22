import {test,expect} from '@playwright/test';
import { execPath } from 'process';

test("Assertion Test",async({page})=>{
    await page.goto("http://hematitecorp.com/");
    await page.pause();

    // Assertion in playwright
    await expect(page.locator("text=OUR COURSES")).toHaveCount(1); // it find the element unique

    if (await page.$("text=OUR COURSES")){
        await page.locator("text=OUR COURSES").click();
    }

    //element vissible or hidden
    await expect(page.locator("text=OUR COURSES")).toBeVisible();
    // await expect(page.locator("text=OUR COURSES")).toBeHidden();
    await expect.soft(page.locator("text=OUR COURSES")).toBeHidden();

    //element enabled or disabled
    await expect(page.locator("text=OUR COURSES")).toBeEnabled();
    // await expect(page.locator("text=OUR COURSES")).toBeDisabled();
    await expect.soft(page.locator("text=OUR COURSES")).toBeDisabled();

    //check text is availabe or not
    await expect(page.locator("text=OUR COURSES")).toHaveText("OUR COURSES");
    await expect.soft(page.locator("text=OUR COURSES")).not.toHaveText("OUR COURSES");


});