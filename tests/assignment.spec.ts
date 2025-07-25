import { test } from "@playwright/test";
import { users } from "./ass/values";
import { cart } from "./ass/cart";
import { login } from "./ass/Login_Page";

test('Run all users sequentially in one browser', async ({ page }) => {
  for (const user of users) {
    const loginpageObj = new login(page);
    await loginpageObj.goto();
    await loginpageObj.login(user.username, user.password);

    const cartpageObj = new cart(page);
    await cartpageObj.checkout(user.firstName, user.lastName, user.postalCode);

  }
  // await page.pause();
  //now check the git hub

  // npx playwright test assignment.spec.ts --project=firefox --headed --debug 
  //this the command to check manually
});