import { defineConfig, devices } from "@playwright/test";
import { createArgosReporterOptions } from "@argos-ci/playwright/reporter";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    // ["list"],
    ["html"],
    process.env.CI ? ["dot"] : ["list"],
    // Add Argos reporter if needed in future, but for now we use the SDK
    // Add Argos reporter.
    [
      "@argos-ci/playwright/reporter",
      // Upload only on CI.
      createArgosReporterOptions({
        uploadToArgos: !!process.env.CI,
        // Set your Argos instance URL for self-hosted (can also be set via ARGOS_API_BASE_URL env var)
        apiBaseUrl: "https://app.yogawicak.my.id",
      }),
    ],
  ],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
