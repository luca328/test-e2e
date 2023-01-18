// @ts-check
import { test, expect } from '@playwright/test';

test('check compteur', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button').click();

  const res = await page.getByRole('button').textContent();

  // Expect a title "to contain" a substring.
  await expect(res).toEqual('count is 1');
});


test('test navigation', async ({ page }) => {
  await page.goto('https://skwal03.github.io/#portfolio');

  const navigationPromise = page.waitForNavigation();
  await page.click('a[href="https://thunderskill.com/en/stat/Skwal03"]');
  await navigationPromise;

  await expect(page).toHaveURL('https://thunderskill.com/en/stat/Skwal03');
});