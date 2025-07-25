import { test, expect } from '@playwright/test';

test('Navigation and Heading Test', async ({ page }) => {
  // Visit the homepage
  await page.goto('http://127.0.0.1:5500/tests/assignment/4_index.html');

  // Click on the “Contact Us” link.
  await page.click('a#contact-link');

  // Wait for navigation to contact.html
  await expect(page).toHaveURL(/4_contact\.html$/);

  // Validate that the heading is correct and visible.
  const heading = page.locator('h1#contact-heading');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Get in Touch');

  await page.pause();
});