import { test, expect } from '@playwright/test';

test.describe('Smoke test', () => {
  test('page loads and renders title heading', async ({ page }) => {
    await page.goto('/');

    const heading = page.getByRole('heading', { name: '西递秘档' });
    await expect(heading).toBeVisible();
  });

  test('page has correct document title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/西递秘档/);
  });
});
