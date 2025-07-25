
import { test, expect } from '@playwright/test';

/**
Assignment 2: Button Enable/Disable Test
Scenario:
On a feedback form, the "Submit" button becomes enabled only after all mandatory fields are filled.
Task:
Write a test that:
Checks that the "Submit" button is initially disabled.
Fills out required fields and verifies the button becomes enabled.
 */

test('Feedback Form: Submit button enable/disable', async ({ page }) => {
  // Change the URL if your feedback form is hosted elsewhere
  await page.goto('http://127.0.0.1:5500/tests/assignment/feedback.html');

  // Check that the "Submit" button is initially disabled
  await expect.soft(page.locator('#submitBtn')).toBeDisabled();

  // Fill in the Name field
  await page.fill('#name', 'Vijay');
  await expect.soft(page.locator('#submitBtn')).toBeDisabled();

  // Fill in the Email field
  await page.fill('#email', 'vijay@gmail.com');
  await expect.soft(page.locator('#submitBtn')).toBeDisabled();

  // Fill in the Message field
  await page.fill('#message', 'This is my feedback.');
  
  // Now, the "Submit" button should be enabled
  await expect.soft(page.locator('#submitBtn')).toBeEnabled();
  await page.pause();
});