---
repo: "govuk-one-login/di-account-management-backend"
name: "di-account-management-backend"
description: "Backend code for the Account Management Application"
readmeQualityOk: true
url: "https://github.com/govuk-one-login/di-account-management-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["digital-identity"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 38
contributors: 27
recentReleases: 0
createdAt: "2022-09-30T13:18:13Z"
lastCommitAt: "2026-09-24T08:25:21Z"
status: "watched"
tags: ["community_watch"]
healthScore: 89
undervaluedScore: 52
maintainers: ["liegeandlief", "mattvot", "saralk"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeff77670fba9fbfb83b0f589de4ef69864576880ecd6a5be4db07c73aac00f0/govuk-one-login/di-account-management-backend"
---

# di-account-management-backend

The backend and data store that serves the account management application.

This is a serverless application for AWS. It's built and deployed using the [SAM CLI](https://aws.amazon.com/serverless/sam/).

## Prerequisites

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to install and manage Node.js versions. Run:

- Install [Homebrew](https://brew.sh/)
- Install Brewfile dependencies with `npm run install-brewfile`
- Install Git Hooks with `npm run install-git-hooks`

```
nvm install
```

from the root of the repository or in any `lambda/` folder to install the correct version on Node.

We transpile and package the Lambda functions using `sam build`. This needs `esbuild` installed globally:

```
npm install -g esbuild
```

### Gitlint

This repository uses [Gitlint](https://jorisroovers.com/gitlint/latest/) to lint git commit messages.

Install Gitlint by running:

```bash
pip install gitlint # or `brew install gitlint` if using the Homebrew package manager
```

## Testing

Each Lambda function is a separate NPM application and has its own unit tests.

To run the tests for the `query-user-services` Lambda:

```bash
cd…
