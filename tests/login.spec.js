const{test, expect} = require('@playwright/test');

test('Login', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);
    await page.locator("//input[@placeholder='username']").fill("Admin");
    await page.waitForTimeout(4000);
    await page.locator("//input[@placeholder='password']").fill("admin123");
    await page.waitForTimeout(4000);
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(4000);
});