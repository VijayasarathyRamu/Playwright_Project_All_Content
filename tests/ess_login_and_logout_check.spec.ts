import {test} from '@playwright/test';
import { login } from "./ess_folder/ess_login";
import { users } from "./ess_folder/ess_credentials";
import { logout } from './ess_folder/ess_logout';

test('ESS Login and Logout Check', async ({ page }) => {
    for (const user of users) {
      const loginpageObj = new login(page);
      await loginpageObj.goto();
      await loginpageObj.login(user.username, user.password);

      const logutObj = new logout(page);
      await logutObj.logout();
  
    }
    // await page.pause();
  });