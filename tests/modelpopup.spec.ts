import {test,expect} from '@playwright/test';

test("custom assertion",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assetioneaxample.html");
    await page.pause();

    //alert
    page.once("dialog",async(dialog)=>{
        console.log(dialog.message);
        await dialog.accept();
    });
    await page.click('button[onclick="jsalert()"]');

    //confirm
    page.once("dialog",async(dialog)=>{
        expect(dialog.message).toContain("confirm");
        await dialog.accept();
    });
    await page.click('button[onclick="jsconfirm()"]');

    //Prompt
    page.once("dialog",async(dialog)=>{
        // expect(dialog.message).toContain("confirm");
        await dialog.accept("hello frds");
    });
    await page.click('button[onclick="jsPrompt()"]');
});