import { expect, test } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu email").fill("test@test.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para o seu email.",
  );

  expect(toast).toBeVisible();
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu email").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas.");

  expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
