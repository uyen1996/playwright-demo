import { test, expect } from '@playwright/test';

test('test dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const dropdown_list = page.locator('#dropdown');
  await expect(dropdown_list).toHaveValue('');
  await dropdown_list.selectOption('1');
  await expect(dropdown_list).toHaveValue('1');
});