import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});

test('test css', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('[name="username"]').click();
  await page.locator('[name="username"]').fill('tomsmith');
  await page.locator('[name="password"]').click();
  await page.locator('[name="password"]').fill('SuperSecretPassword!');
  await page.locator(`//button[@type='submit']`).click();
});

test('test xpath', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator(`//input[@id='username']`).click();
  await page.locator(`//input[@id='username']`).fill('tomsmith');
  await page.locator(`//input[@id='password']`).click();
  await page.locator(`//input[@id='password']`).fill('SuperSecretPassword!');
  await page.locator(`//button[@type='submit']`).click();
});
