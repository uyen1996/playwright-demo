import { test, expect } from '@playwright/test';

test('checkbox test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
});