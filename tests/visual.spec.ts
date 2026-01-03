import { test, expect } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test.describe("Visual Regression Tests", () => {
  test("Dashboard Page - Visual Check", async ({ page }) => {
    // Navigate to the dashboard
    await page.goto("/dashboard");
    // Take a screenshot of the initial state (Light Mode likely default)
    await argosScreenshot(page, "dashboard-light");
    await expect(page.getByText("Recent Transactions")).toBeVisible();
    await expect(page.getByText("Upcoming Events")).toBeVisible();
  });
});
