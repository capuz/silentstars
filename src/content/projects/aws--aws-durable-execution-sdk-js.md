---
repo: "aws/aws-durable-execution-sdk-js"
name: "aws-durable-execution-sdk-js"
description: "Lambda durable functions SDK, Testing SDK and fully functional examples"
readmeQualityOk: true
url: "https://github.com/aws/aws-durable-execution-sdk-js"
homepage: "https://docs.aws.amazon.com/durable-execution/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 85
forks: 33
openIssues: 21
closedIssues: 191
watchers: 1
contributors: 35
recentReleases: 0
createdAt: "2025-08-15T18:18:14Z"
lastCommitAt: "2026-10-24T00:15:50Z"
lastReleaseAt: "2026-05-14T18:20:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["ParidelPooya", "zhongkechen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c40a685431d8ebe965888db7ab747d2512fdab1e2d20fe2f6f6748770b39e57/aws/aws-durable-execution-sdk-js"
discussionCount: 9
---

# AWS Durable Execution SDKs for JavaScript

---

Build **resilient, long-running AWS Lambda functions** with automatic state persistence, retry logic, and workflow orchestration. Lambda durable functions can run for up to one year while maintaining reliable progress through checkpoints and automatic failure recovery.

## ✨ Key Features

- **Durable Execution** – Automatically persists state and resumes from checkpoints after failures
- **Automatic Retries** – Configurable retry strategies with exponential backoff and jitter
- **Workflow Orchestration** – Compose complex workflows with steps, child contexts, and parallel execution
- **External Integration** – Wait for callbacks from external systems (human-in-the-loop, webhooks)
- **Batch Operations** – Process arrays with concurrency control and completion policies
- **Cost Efficient** – Pay only for active compute time; waits suspend without charges
- **Type Safety** – Full TypeScript support with comprehensive type definitions
- **Local Testing** – Run durable functions in unit tests with time skipping, no AWS deployment needed
- **Observability** – OpenTelemetry traces and Durable Execution Telemetry records for every…
