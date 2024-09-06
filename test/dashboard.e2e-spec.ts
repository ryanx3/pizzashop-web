import { expect, test } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("250")).toBeVisible();
  await expect(page.getByText("+ 7% em relação ao mês passado")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("250")).toBeVisible();
  await expect(page.getByText("+ 7% em relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("50", { exact: true })).toBeVisible();
  await expect(page.getByText("-30% em relação ao mês passado")).toBeVisible();
});

test("display month revenue amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 20.000,00")).toBeVisible();
  await expect(page.getByText("+ 10% em relação ao mês")).toBeVisible();
});
