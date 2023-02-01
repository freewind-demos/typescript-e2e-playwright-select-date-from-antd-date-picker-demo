import {expect, test} from '@playwright/test';
import {getMonthName} from "./utils";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:33333')
})

const targetDate = new Date("2022-07-08");


test('test', async ({page}) => {
    await page.getByPlaceholder('Select date').click();
    await page.getByRole('button', {name: getMonthName(new Date())}).click();
    await page.getByText(getMonthName(targetDate)).click();
    await page.getByText(targetDate.getDate().toString(), {exact: true}).click();

    await page.waitForTimeout(1000)
    await page.screenshot({path: 'screenshots/a.png'})
    await expect(page.getByTestId('selectedDate')).toHaveText("Selected Date: Sat Jul 08 2023")
});

