import { expect, test } from '@playwright/test';

test('home page links to Elo Pros', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Amazastrophic', level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Visit elopros.com' })).toHaveAttribute(
		'href',
		'https://elopros.com'
	);
});
