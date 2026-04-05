import { test, expect } from '@playwright/test';

test('TC06: Handle Nested Frames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
  const topFrame = page.frameLocator('frame[name="frame-top"]');
  const leftFrame = topFrame.frameLocator('frame[name="frame-left"]');
  await expect(leftFrame.locator('body')).toContainText('LEFT');
  const middleFrame = topFrame.frameLocator('frame[name="frame-middle"]');
  await expect(middleFrame.locator('body')).toContainText('MIDDLE');
  const rightFrame = topFrame.frameLocator('frame[name="frame-right"]');
  await expect(rightFrame.locator('body')).toContainText('RIGHT');
  const bottomFrame = page.frameLocator('frame[name="frame-bottom"]');
  await expect(bottomFrame.locator('body')).toContainText('BOTTOM');
});