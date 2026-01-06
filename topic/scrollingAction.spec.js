import {test, expect} from '@playwright/test';

test('Scrolling test', async ({page}) => {
    await page.goto('https://orangehrm.com/');
    await page.waitForTimeout(4000);
    await page.getByRole('heading', { name: 'Consolidate Your HR Processes' }).scrollIntoViewIfNeeded();


    await page.mouse.wheel(0, 500);


    await page.mouse.wheel(0,-500);

    await page.keyboard.press('PageDown');


    await page.keyboard.press('PageUp');


    await page.keyboard.press('End');

    await page.waitForTimeout(4000);

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    const ts2=await page.locator("//h5[text()='Test case 2: Negative username test']");
    await ts2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);



});
