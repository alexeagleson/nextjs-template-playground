// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //   forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testMatch: /.*(spec)\.ts/,
};
export default config;
