import { test, expect } from '@playwright/test';

test('home page visual regression', async ({ page }) => {
    await page.goto('http://localhost:4201');
    await page.waitForSelector('app-root, body');
    expect(await page.screenshot()).toMatchSnapshot('home-page.png', { threshold: 0.2 });
});
