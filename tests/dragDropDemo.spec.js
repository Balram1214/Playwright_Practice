const {test, expect} = require('@playwright/test');

test("Drag and Drop Test", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.waitForTimeout(4000);

    const dragdrop = await page.locator("//h2[text()='Drag and Drop']");
    await dragdrop.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);

    const drag = await page.locator("//div[@class='ui-widget-content ui-draggable ui-draggable-handle']");
    const drop = await page.locator("//div[@class='ui-widget-header ui-droppable']");

    await drag.dragTo(drop);
    await page.waitForTimeout(4000);


})