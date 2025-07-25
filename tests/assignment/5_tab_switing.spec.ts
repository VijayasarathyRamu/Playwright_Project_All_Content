import { test, expect } from '@playwright/test';

test.describe('Tab Switching and Visibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/assignment/5_tab_switing.html');
  });

  test('Profile tab shows Profile panel and hides Settings', async ({ page }) => {
    await page.click('#profile-tab');
    await expect(page.locator('#profile-panel')).toBeVisible();
    await expect(page.locator('#settings-panel')).toBeHidden();
  });

  test('Settings tab shows Settings panel and hides Profile', async ({ page }) => {
    await page.click('#settings-tab');
    await expect(page.locator('#settings-panel')).toBeVisible();
    await expect(page.locator('#profile-panel')).toBeHidden();
  });
});