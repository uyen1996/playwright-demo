import { test, expect } from '@playwright/test';

test('checkbox test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.getByRole('checkbox').first().check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();
    await page.getByRole('checkbox').nth(1).check();
    await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
});

test('checkbox test by css', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.locator('input[type="checkbox"]').first().check();
    await expect(page.locator('input[type="checkbox"]').first()).toBeChecked();

    await page.locator('input[type="checkbox"]').nth(1).check();
    await expect(page.locator('input[type="checkbox"]').nth(1)).toBeChecked();
  
});

test('checkbox test by xpath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
  
});