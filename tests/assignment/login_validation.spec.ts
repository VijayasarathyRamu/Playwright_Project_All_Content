import { test, expect } from '@playwright/test';

/**
 * Assignment 1: Login Page Validation
 * - Navigate to the login page.
 * - Check that the username, password fields, and login button are visible.
 * - Ensure the login button is disabled until both fields are filled.
 */

test('Login Page Validation', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1');

  // 2. Check if username, password fields and login button are visible
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('#login-button')).toBeVisible();

  // 3. Check login button is disabled initially
  await expect.soft(page.locator('#login-button')).toBeDisabled();

  // 4. Fill only username, button should remain disabled
  await page.fill('[data-test="username"]', 'standard_user');
  await expect.soft(page.locator('#login-button')).toBeDisabled();

  // 5. Clear username, fill only password, button should remain disabled
  await page.fill('[data-test="username"]', '');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await expect.soft(page.locator('#login-button')).toBeDisabled();

  // 6. Fill both fields, button should now be enabled
  await page.fill('[data-test="username"]', 'standard_user');
  await expect.soft(page.locator('#login-button')).toBeEnabled();
});