const { test, expect } = require('@playwright/test')

test("Keyboard Actions", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");
    await page.waitForTimeout(3000);

    const textarea = await page.locator("//button[@class='s-text-compare__body-btn-y']");
    await textarea.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    await page.locator("//textarea[@name='text1']").fill("Hello I am Balraam");
    await page.waitForTimeout(3000);

    await page.keyboard.press('Control+a');
    await page.waitForTimeout(3000);

    await page.keyboard.press('Control+c');
    await page.waitForTimeout(3000);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(3000);

    await page.keyboard.press('Control+v');
    await page.waitForTimeout(4000);

})