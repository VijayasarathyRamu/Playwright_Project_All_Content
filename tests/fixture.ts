import {test as base} from '@playwright/test';

type MyFixture = {
    helloWord:any,
    greatDay:any
}

export const test = base.extend<MyFixture>({
    helloWord: async ({},use:any)=>{
        console.log("where is my tea");
        await use();
        // console.log("where is my tea"); if we write the code after use method ,it's not coming first
    },
    greatDay: async ({},use:any)=>{
        const myday = "Have a Great Day";
        // console.log("Have a Great Day");
        // await use();
        await use(myday);
    }
});