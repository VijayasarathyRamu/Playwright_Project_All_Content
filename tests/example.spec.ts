import { test, expect } from '@playwright/test';
test("check add", async({page})=>{
  await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btn');

  const result = await page.textContent('#res');
// await expect(page).toHaveTitle("Document")
  await expect(result?.trim()).toBe('8');
});

test("check sub", async({page})=>{
  await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btn1');

  const result = await page.textContent('#res');
// await expect(page).toHaveTitle("Document")
  await expect(result?.trim()).toBe('2');
});

test("check mul", async({page})=>{
  await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btn2');

  const result = await page.textContent('#res');
// await expect(page).toHaveTitle("Document")
  await expect(result?.trim()).toBe('15');
});

test("check div", async({page})=>{
  await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','5');
  await page.click('#btn3');

  const result = await page.textContent('#res');
// await expect(page).toHaveTitle("Document")
  await expect(result?.trim()).toBe('1');
});
//   await page.fill('#txt1','5');
//   await page.fill('#txt2','3');
//   await page.click('#btn1');

//   const result1 = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result1?.trim()).toBe('2');

//   await page.fill('#txt1','5');
//   await page.fill('#txt2','3');
//   await page.click('#btn2');

//   const result2 = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result2?.trim()).toBe('15');

//   await page.fill('#txt1','5');
//   await page.fill('#txt2','5');
//   await page.click('#btn3');

//   const result3 = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result3?.trim()).toBe('1');
// });

// import { test, expect } from '@playwright/test';
// test("check sub", async({page})=>{
//   await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
//   await page.fill('#txt1','5');
//   await page.fill('#txt2','3');
//   await page.click('#btn1');

//   const result = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result?.trim()).toBe('2');
// });

// import { test, expect } from '@playwright/test';
// test("check mul", async({page})=>{
//   await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
//   await page.fill('#txt1','5');
//   await page.fill('#txt2','3');
//   await page.click('#btn2');

//   const result = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result?.trim()).toBe('15');
// });

// import { test, expect } from '@playwright/test';
// test("check title", async({page})=>{
//   await page.goto('file:///C:/Users/vijayasarathy.r/Desktop/imp_topicc/calc.html');
//   await page.fill('#txt1','5');
//   await page.fill('#txt2','5');
//   await page.click('#btn3');

//   const result = await page.textContent('#res');
// // await expect(page).toHaveTitle("Document")
//   await expect(result?.trim()).toBe('1');
// });







// import { test, expect } from '@playwright/test';
// test("check title", async({page})=>{
//   await page.goto('https://www.w3schools.com/');
// await expect(page).toHaveTitle("W3Schools Online Web Tutorials")
// });



// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
