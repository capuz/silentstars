---
repo: "govuk-one-login/performance-testing"
name: "performance-testing"
description: "Performance Testing for Digital Identity"
readmeQualityOk: true
url: "https://github.com/govuk-one-login/performance-testing"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["digital-identity", "performance-testing", "testing"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 21
contributors: 37
recentReleases: 0
createdAt: "2022-10-19T09:28:12Z"
lastCommitAt: "2026-10-19T09:07:02Z"
status: "watched"
tags: ["community_watch"]
healthScore: 89
undervaluedScore: 62
maintainers: ["abhinaysrivastavaperf", "dependabot[bot]", "vineeth-kunju"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb350d0a2c5fb521845f1588027f39608da1ceed1d086c76568e3c3c63e03845/govuk-one-login/performance-testing"
---

---

# Performance Testing Framework

This repository contains the performance test framework for testing Digital Identity happy path user journeys.

## Getting Started

### Required Installations

- [pre-commit](https://pre-commit.com/) for running pre-commit hooks locally
  ```console
  brew install pre-commit && pre-commit install && pre-commit install -tprepare-commit-msg -tcommit-msg
  ```
- [k6](https://k6.io/docs/get-started/installation/) for testing and executing scripts locally
  ```console
  brew install k6
  ```

### Optional Installations

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) for command line access to AWS resources
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) only needed for platform engineers managing the serverless resources and pipelines
  ```console
  brew install aws/tap/aws-sam-cli
  ```
- [GDS CLI](https://github.com/alphagov/gds-cli) for command line access to internal AWS accounts and resources
  ```console
  brew install alphagov/gds/gds-cli
  ```
- [Docker](https://docker.com) for building or testing the…
