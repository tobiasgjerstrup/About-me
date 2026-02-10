import { test, expect } from '@playwright/test';

test('home page visual regression', async ({ page }) => {
    await page.goto('http://localhost:4201');
    await page.waitForSelector('app-root, body');
    expect(await page.screenshot()).toMatchSnapshot('home-page.png', { threshold: 0.2 });
});



test.describe('home cards', () => {
    const cardLabels = [
        'Backend Development',
        'System Development',
        'Frontend Development',
        'Hardware Passion',
        'Linux Server',
        'Windows Server',
    ];

    for (let i = 0; i < cardLabels.length; i++) {
        const label = cardLabels[i];
        test(`clicks card: ${label}`, async ({ page }) => {
            await page.goto('http://localhost:4201');
            await page.waitForSelector('#cards .card');
            const card = await page.locator(`#cards .card[aria-label="${label}"]`).first();
            await card.click();
            await page.waitForTimeout(1000); // allow animation to finish
            expect(await page.screenshot()).toMatchSnapshot(`card-${i + 1}.png`, { threshold: 0.2 });
            await page.goBack();
            await page.waitForSelector('#cards .card');
        });
    }
});
