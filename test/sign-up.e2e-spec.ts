import { expect, test } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Seu nome").fill("Test Name");
  await page.getByLabel("Seu email").fill("test@test.com");
  await page.getByLabel("Seu celular").fill("99999999");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso.");

  await expect(toast).toBeVisible();
});

test("sign in with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Error Shop");
  await page.getByLabel("Seu nome").fill("Test Name");
  await page.getByLabel("Seu email").fill("test@test.com");
  await page.getByLabel("Seu celular").fill("99999999");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar restaurante.");

  expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
});
