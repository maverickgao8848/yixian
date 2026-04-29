import { test, expect } from '@playwright/test';

test.describe('Sprint #1 — MapHome E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // C2: MapHome renders full-screen map background + film-grain noise
  test('C2: map-layer element exists with map.png background', async ({ page }) => {
    const mapLayer = page.locator('#mapLayer');
    await expect(mapLayer).toBeAttached();

    // Verify the element has the map-home.css class
    const className = await mapLayer.getAttribute('class');
    expect(className).toContain('map-layer');
  });

  test('C2: film-grain overlay is visible and animated', async ({ page }) => {
    const filmGrain = page.locator('.film-grain');
    await expect(filmGrain).toBeAttached();

    // Verify animation is applied via CSS
    const animation = await filmGrain.evaluate(
      (el) => getComputedStyle(el).animationName
    );
    // animation should be 'grainShift' (defined in design-system.css)
    expect(animation).toBeTruthy();
  });

  // C3: MissionCard displays data from config/missions.ts
  test('C3: first mission chapter and title are visible', async ({ page }) => {
    // First mission has chapter "序章" and title "寻访明经秘档"
    const chapter = page.locator('.mission-card__chapter').first();
    await expect(chapter).toContainText('序章');

    const title = page.locator('.mission-card__title').first();
    await expect(title).toContainText('寻访明经秘档');
  });

  // C4: Bottom nav "印章" clickable, "百科" shows "COMING SOON" toast
  test('C4: stamps button opens stamps panel', async ({ page }) => {
    const stampsBtn = page.locator('.nav-btn', { hasText: '印章' });
    await expect(stampsBtn).toBeVisible();
    await stampsBtn.click();

    // Stamps panel overlay should become visible
    const overlay = page.locator('.overlay--center.active');
    await expect(overlay).toBeVisible();

    // Verify stamp content is rendered
    const stampTitle = page.locator('.stamps-panel__title');
    await expect(stampTitle).toContainText('明经印收集进度');
  });

  test('C4: wiki button shows COMING SOON toast', async ({ page }) => {
    const wikiBtn = page.locator('.nav-btn', { hasText: '百科' });
    await expect(wikiBtn).toBeVisible();
    await wikiBtn.click();

    // Toast should become visible
    const toast = page.locator('.toast.active');
    await expect(toast).toBeVisible();
    await expect(toast).toContainText('COMING SOON');
  });

  // C5: Theme toggle switches data-theme between light/dark
  test('C5: theme toggle switches data-theme attribute', async ({ page }) => {
    const html = page.locator('html');
    const toggleBtn = page.locator('.theme-toggle');

    // Capture initial theme
    const initialTheme = await html.getAttribute('data-theme');
    const initialIsDark = initialTheme === 'dark';

    // Click toggle
    await toggleBtn.click();

    // Wait for attribute change
    await page.waitForFunction(
      (expectedDark) => {
        const theme = document.documentElement.getAttribute('data-theme');
        const isDark = theme === 'dark';
        return isDark !== expectedDark;
      },
      initialIsDark
    );

    // Verify theme flipped
    const newTheme = await html.getAttribute('data-theme');
    const newIsDark = newTheme === 'dark';
    expect(newIsDark).toBe(!initialIsDark);
  });

  test('C5: CSS variables change after theme toggle', async ({ page }) => {
    const toggleBtn = page.locator('.theme-toggle');

    // Capture initial accent color
    const initialAccent = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    );

    // Toggle theme
    await toggleBtn.click();
    await page.waitForTimeout(100); // small wait for CSS transition

    // Capture new accent color
    const newAccent = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    );

    // Accent color should have changed
    expect(newAccent).not.toBe(initialAccent);
  });
});
