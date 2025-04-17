import { test, expect } from "@playwright/test";

test("Dropdown page loads and dropdown is working", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Dropdown" }).click();
    await expect(page.locator("h3")).toHaveText("Dropdown List");
    const dropdown = page.locator("#dropdown");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("2");
    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe("2");
  });