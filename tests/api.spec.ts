import {expect, test} from '@playwright/test';

test("should mock get request",async({page})=>{
    await page.route("api/users",(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([
                {id:1,name:"Vijay"},
                {id:2,name:"Siddique"}
            ]),
        });

    });
    await page.goto("http://127.0.0.1:5500/mokeapi.html");
    const userList = await page.locator(".user").allTextContents();
    await expect(userList).toContain("Vijay")

});
