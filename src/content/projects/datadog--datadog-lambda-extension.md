---
repo: "DataDog/datadog-lambda-extension"
name: "datadog-lambda-extension"
description: "The Datadog Lambda Extension supports submitting: custom metrics; traces; logs; and more observability; asynchronously while your AWS Lambda function executes."
readmeQualityOk: true
url: "https://github.com/DataDog/datadog-lambda-extension"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["aws-lambda", "datadog", "serverless", "rust"]
stars: 137
forks: 22
openIssues: 10
closedIssues: 171
watchers: 11
contributors: 328
recentReleases: 0
createdAt: "2021-05-06T21:37:31Z"
lastCommitAt: "2026-10-21T17:31:53Z"
lastReleaseAt: "2021-10-21T18:37:47Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 44
maintainers: ["lucaspimentel", "lym953", "duncanista"]
openGraphImageUrl: "https://opengraph.githubassets.com/76d9096b9feca72a8661bbac8ff5c93f1279598ac12e08ca358234b0aa204f53/DataDog/datadog-lambda-extension"
---

# datadog-lambda-extension

The Datadog Lambda Extension is an AWS Lambda Extension that supports submitting custom metrics, traces, and logs asynchronously while your AWS Lambda function executes.

## Installation

Follow the [installation instructions](https://docs.datadoghq.com/serverless/installation), and view your function's enhanced metrics, traces and logs in Datadog.

## Next-generation Lambda Extension

We're excited to share that our next-generation, low-overhead Lambda Extension is now generally available. This new extension is packaged alongside our existing extension, yet offers substantially faster cold starts as well as lower resource consumption.

For `v67` through `v87`, you can opt out of the next-generation Lambda Extension by setting the environment variable `DD_EXTENSION_VERSION: compatibility`.

`v88+` only supports the next-generation Lambda Extension.

### Supported Configurations

Today, all workloads using Logs and Metrics are supported.

APM Tracing is supported for Python, NodeJS, Go, Java, .NET, and Ruby runtimes.

### Feedback

We'd love to hear your feedback on the next-generation Lambda Extension. You can open a GitHub issue here using the…
