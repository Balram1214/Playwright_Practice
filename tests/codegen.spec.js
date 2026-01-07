import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForTimeout(4000);

    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.goto('https://practicetestautomation.com/logged-in-successfully/');
    await page.waitForTimeout(4000);
});