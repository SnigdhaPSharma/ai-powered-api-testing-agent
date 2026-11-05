export async function executeTest(request, testCase) {
  const response = await request.fetch(testCase.endpoint, {
    method: testCase.method,
    data: testCase.body
  });

  return {
    name: testCase.name,
    expectedStatus: testCase.expectedStatus,
    actualStatus: response.status(),
    passed: response.status() === testCase.expectedStatus
  };
}