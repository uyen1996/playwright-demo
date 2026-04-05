import { test, expect } from '@playwright/test';

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: 10.7769, longitude: 106.7009 },
});

test('search flight SGN -> HAN', async ({ page }) => {
  await page.goto('https://www.vietnamairlines.com/vn/vi/');

  // Accept cookie
  const cookieBtn = page.locator('#onetrust-accept-btn-handler');
  if (await cookieBtn.isVisible()) {
    await cookieBtn.click();
  }
  const fromBtn = page.locator('button:has(.from-section-row-2-title)').first();

  await fromBtn.waitFor({ state: 'visible' });
  await fromBtn.scrollIntoViewIfNeeded();
  await fromBtn.click(); 
});