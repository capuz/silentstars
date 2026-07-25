---
repo: "harryzcy/mailbox"
name: "mailbox"
description: "Versatile email infrastructure on AWS serverless"
readmeQualityOk: true
url: "https://github.com/harryzcy/mailbox"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["mailbox", "aws", "aws-s3", "aws-dynamodb", "aws-lambda", "serverless", "aws-ses", "go", "aws-sqs", "api"]
stars: 255
forks: 16
openIssues: 1
closedIssues: 21
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-01-01T15:41:41Z"
lastCommitAt: "2026-07-25T06:00:41Z"
lastReleaseAt: "2023-03-18T02:05:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 39
maintainers: ["renovate[bot]", "harryzcy", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a38b7e98a5f7a53a1081fcd1961f4e38ae3c92ec5da1ec3c5d2ac36bea55ec5d/harryzcy/mailbox"
---

# Mailbox

Docs: [English](https://github.com/harryzcy/mailbox/blob/HEAD/README.md) • [简体中文](https://github.com/harryzcy/mailbox/blob/HEAD/README_zh.md)

Versatile email infrastructure that operates on AWS.

## Clients

### Web

See [mailbox-browser](https://github.com/harryzcy/mailbox-browser)

| Dark mode |  Light mode |
|:---------:|:-----------:|
|  |  |

### CLI

```bash
go install github.com/harryzcy/mailbox-cli
```

For details, refer to [mailbox-cli](https://github.com/harryzcy/mailbox-cli)

## Deploy

1. Clone the repository.

    ```shell
    git clone https://github.com/harryzcy/mailbox
    ```

1. Install [serverless](https://github.com/serverless/serverless).

    ```shell
    npm install -g serverless@v3
    ```

1. Create an IAM user.

    Create an IAM user with AdministratorAccess and export the access key as environment variables.

    ```shell
    export AWS_ACCESS_KEY_ID=<your-key-here>
    export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
    ```

    In production, setup the IAM user following [this guide from serverless](https://www.serverless.com/framework/docs/providers/aws/guide/credentials).

1. Setup AWS services.

    Manually create S3 buckets, and…
