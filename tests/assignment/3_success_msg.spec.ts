import { test, expect } from '@playwright/test';

/**
Assignment 3: Success Message Validation
Scenario:
After form submission, a success message is displayed with text “Thank you for your feedback.”
Task:
Write a test that:
Submits a form.
Verifies that a success message appears and contains the correct text.
 */

test('Feedback Form: Displays success message after submission', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/assignment/feedback.html'); // Update with your actual feedback form URL

  // Fill all required fields
  await page.fill('#name', 'Vijay');
  await page.fill('#email', 'vijay@gmail.com');
  await page.fill('#message', 'This is some feedback.');

  // Listen for the alert dialog and assert its message
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Feedback submitted!');
    await dialog.accept();
  });

  // Submit the form
  await page.click('#submitBtn');
  await page.pause();
});