---
repo: "govuk-one-login/di-account-management-backend"
name: "di-account-management-backend"
description: "Backend code for the Account Management Application"
readmeQualityOk: true
url: "https://github.com/govuk-one-login/di-account-management-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["digital-identity"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 38
contributors: 26
recentReleases: 0
createdAt: "2022-09-30T13:18:13Z"
lastCommitAt: "2026-11-10T14:30:19Z"
status: "watched"
tags: ["community_watch"]
healthScore: 89
undervaluedScore: 54
maintainers: ["liegeandlief", "martin-gwar", "mattvot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4685d96aab08d46295727d2f8ceed32aa6e45b26586f057088f074fd0299a7dc/govuk-one-login/di-account-management-backend"
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
