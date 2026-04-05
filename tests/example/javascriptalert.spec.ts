import { test, expect } from '@playwright/test';

test('TC07: JavaScript Alert', async ({ page }) => {

  // Open browser and navigate to the page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });
  // Click the button to trigger the alert
  await page.getByText('Click for JS Alert').click();
  const result = page.locator('#result');
  await expect(result).toHaveText('You successfully clicked an alert');
});