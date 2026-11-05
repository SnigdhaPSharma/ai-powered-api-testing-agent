import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { executeTest } from '../src/testExecutor.js';

const testCases = JSON.parse(
  readFileSync('./test-cases/order-api-tests.json', 'utf8')
);

for (const testCase of testCases) {

  test(testCase.name, async ({ request }) => {

    const result = await executeTest(request, testCase);

    expect(result.passed).toBe(true);

  });

}