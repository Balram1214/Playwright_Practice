const { test, expect } = require('@playwright/test');

test('Simple DropDown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const country = await page.locator("//label[text()='Country:']");
    await country.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);

    await page.locator("//select[@id='country']").selectOption({ label: "Japan" });


    await page.locator("//select[@id='country']").selectOption("India");

    await page.locator("//select[@id='country']").selectOption({ index: 3 });

    await page.waitForTimeout(2000);

    await page.locator("//select[@id='country']").selectOption({ value: "france" });

    await page.waitForTimeout(2000);


    await page.selectOption("//select[@id='country']", "United Kingdom");

    const options = await page.$$("//select[@id='country']//option");

    console.log("Total options are", options.length);

    let status = false;

    for (const op of options) {
        let value = await op.textContent();

        console.log(value);
        if (value.includes("United States")) {
            status = true;
            break;
        }

    }

})