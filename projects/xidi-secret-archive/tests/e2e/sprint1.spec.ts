import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:4173';

test.describe('Sprint 1 — 入场页 + 地图框架 + 序章', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('1. 入场页显示正确，含标题和进入按钮', async ({ page }) => {
    await expect(page.locator('text=西递秘档')).toBeVisible();
    await expect(page.locator('text=明经遗梦')).toBeVisible();
    await expect(page.locator('button:has-text("进入西递秘档")')).toBeVisible();
  });

  test('2. 点击进入按钮后跳转到地图页', async ({ page }) => {
    await page.click('button:has-text("进入西递秘档")');
    await expect(page).toHaveURL(/\/map/);
    await expect(page.locator('text=西递村导览图')).toBeVisible();
  });

  test('3. 地图页有罗盘、背包、百科按钮', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);
    await expect(page.locator('img[alt="罗盘"]')).toBeVisible();
    await expect(page.locator('button[aria-label="背包"]')).toBeVisible();
    await expect(page.locator('button[aria-label="百科"]')).toBeVisible();
  });

  test('4. 地图页有玩家标记和地标', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);
    await expect(page.locator('text=胡文光牌楼')).toBeVisible();
    await expect(page.locator('text=瑞玉庭')).toBeVisible();
  });

  test('5. 首次进入地图自动弹出序章', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);
    await expect(page.locator('text=有缘人亲启')).toBeVisible({ timeout: 3000 });
  });

  test('6. 序章流程：信件 → 道具 → 对话 → 关闭', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);

    // 信件展开
    await expect(page.locator('text=有缘人亲启')).toBeVisible();
    await page.click('button:has-text("展开信件")');

    // 道具获取
    await expect(page.locator('text=获得初始道具')).toBeVisible();
    await expect(page.locator('text=族谱残页')).toBeVisible();
    await expect(page.locator('text=放大镜')).toBeVisible();
    await expect(page.locator('text=简易罗盘')).toBeVisible();
    await page.click('button:has-text("收下道具")');

    // NPC 对话
    await expect(page.locator('text=胡老夫子')).toBeVisible();
    await page.click('text=继续');

    // 继续对话直到结束
    let retries = 0;
    while (retries < 10) {
      const ready = await page.locator('text=准备好了').isVisible().catch(() => false);
      if (ready) {
        await page.click('text=准备好了');
        break;
      }
      const cont = await page.locator('text=继续').isVisible().catch(() => false);
      if (cont) {
        await page.click('text=继续');
        await page.waitForTimeout(300);
      }
      retries++;
    }

    // 序章结束后回到地图
    await expect(page.locator('text=西递村导览图')).toBeVisible();
  });

  test('7. 背包面板可打开并显示道具', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);
    // 先完成序章
    await page.click('button:has-text("展开信件")');
    await page.click('button:has-text("收下道具")');
    for (let i = 0; i < 5; i++) {
      const ready = await page.locator('text=准备好了').isVisible().catch(() => false);
      if (ready) {
        await page.click('text=准备好了');
        break;
      }
      const cont = await page.locator('text=继续').isVisible().catch(() => false);
      if (cont) await page.click('text=继续');
      await page.waitForTimeout(200);
    }

    await page.click('button[aria-label="背包"]');
    await expect(page.locator('text=我的背包')).toBeVisible();
    await expect(page.locator('text=基础道具')).toBeVisible();
    await expect(page.locator('text=明经印')).toBeVisible();
  });

  test('8. 百科面板可打开并显示列表', async ({ page }) => {
    await page.goto(`${BASE_URL}/map`);
    await page.click('button[aria-label="百科"]');
    await expect(page.locator('text=西递小百科')).toBeVisible();
    // 默认未解锁
    await expect(page.locator('text=胡文光牌楼：四柱三间五楼式')).toBeVisible();
  });

  test('9. 移动端容器限制为 430px', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto(BASE_URL);
    const frame = page.locator('.mobile-frame');
    const box = await frame.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(430);
  });
});
