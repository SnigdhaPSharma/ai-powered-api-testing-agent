
import { defineConfig } from '@playwright/test';
import { readFileSync } from 'node:fs';

const apiConfig = JSON.parse(
  readFileSync('./config/order-api.json', 'utf8')
);

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: apiConfig.baseUrl
  }
});