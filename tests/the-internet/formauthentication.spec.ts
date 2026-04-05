import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
})

test('login success with valid credentials', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  const successMessage = await page.waitForSelector('#flash');
  
  const messageText = await successMessage.textContent();
  expect(messageText).toContain('You logged into a secure area!');
});

test('login fail with invalid credentials', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Username' }).fill('toms');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  const successMessage = await page.waitForSelector('#flash');
  
  const messageText = await successMessage.textContent();
  expect(messageText).toContain(' Your username is invalid!');
});
