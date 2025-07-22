import {expect, test} from '@playwright/test';

// test for get request
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

// based parameter perform grt request parameter can id or any

test("get request on the rol basis",async({page})=>{
    await page.route("api/users?role=admin",(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([
                {id:1,name:"Vijay"}
            ]),
        });

    });
    await page.goto("http://127.0.0.1:5500/mokeapi.html");
    const userList = await page.locator(".user").allTextContents();
    await expect(userList).toContain("Vijay")

});

//server error - to handle internal server error
test("test to handle 500 error",async({page})=>{
    await page.route("api/users",(route)=>{
        route.fulfill({
            status:500,
            contentType:'application/json',
            body:"Internal Server Error"
        });

    });
    await page.goto("http://127.0.0.1:5500/mokeapi.html");
    const userList = await page.locator(".useerror").allTextContents();
    await expect(userList).toContain("Internal Server Error")

});
