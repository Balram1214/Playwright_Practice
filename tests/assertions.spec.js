import { test, expect } from '@playwright/test'

test('Assetions Test', async ({ page }) => {

    await page.goto('https://www.nopcommerce.com/en/register');
    await page.waitForTimeout(4000);

    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register');

    await expect(page).toHaveTitle('Register - nopCommerce');

    const logoE = await page.locator("//a[@class='desktop-logo']");
    await expect(logoE).toBeVisible();

    const inputB = await page.locator("//input[@name='FirstName']");
    await expect(inputB).toBeEnabled();

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.waitForTimeout(2000);

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkbox = page.locator('input[type="checkbox"]').first();
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await page.waitForTimeout(4000);
    const disable = await page.locator('#input-example input');
    await expect(disable).toBeDisabled();

    await page.goto('https://www.nopcommerce.com/en/register');
    // const attribute = await page.locator('#register-button');
    // await expect(attribute).toHaveAttribute('type', 'submit');

    



});