import { test, expect } from "@playwright/test";

test("Nested Frames page loads and middle frame contains correct text", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Nested Frames" }).click();
    const middleFrame = page
      .frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-middle"]');
    await expect(middleFrame.locator("body")).toHaveText("MIDDLE");
  });