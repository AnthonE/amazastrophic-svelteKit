import { expect, test } from '@playwright/test';

test('home page links to Elo Pros', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Amazastrophic', level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Visit elopros.com' })).toHaveAttribute(
		'href',
		'https://elopros.com'
	);
});

test('structured data parses and names both brands', async ({ page }) => {
	await page.goto('/');
	const raw = await page.locator('script[type="application/ld+json"]').textContent();
	const names = JSON.parse(raw ?? '{}')['@graph'].map((/** @type {any} */ n) => n.name);
	expect(names).toEqual(expect.arrayContaining(['Amazastrophic', 'Elo Pros', 'Gates']));
});

test('agent files are served', async ({ request }) => {
	for (const path of ['/llms.txt', '/robots.txt', '/sitemap.xml', '/og.png']) {
		expect((await request.get(path)).ok(), path).toBe(true);
	}
});
