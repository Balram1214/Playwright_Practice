import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.waitForTimeout(4000);
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(4000);

    const username =await page.locator("//p[text()='Doaa Taman']").textContent();
    await expect(page.getByText(username)).toBeVisible();

});