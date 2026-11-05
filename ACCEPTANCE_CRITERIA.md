## Overview

Build a reusable API testing framework that uses AI to generate test cases and Playwright to execute them. The framework should support different REST APIs without changes to the core implementation.

## Acceptance Criteria

The framework must:

1. Read an OpenAPI specification and identify the available endpoints, HTTP methods, and request parameters.
2. Generate positive, negative and boundary test cases based on the API specification.
3. Validate generated test cases before execution.
4. Execute test cases using Playwright.
5. Verify actual responses against expected status codes and response data.
6. Record the execution status of each test case as Pass or Fail.
7. Support multiple REST APIs through API-specific configuration without changes to the core framework.

## Definition of Done

Version 1 will be considered complete when:

- Test cases are generated for the sample Order Management API.
- Generated test cases execute successfully through Playwright.
- A second REST API is configured for testing.
- Test cases are generated and executed for the second API.
- Both APIs are tested using the same framework implementation.
- Test results clearly identify passed and failed cases.
- No changes to the core framework are required to support the second API.

## Out of Scope

The following features are not included in Version 1:

- Automated root cause analysis
- Self-healing tests
- Automated defect fixes
- Advanced reporting and analytics