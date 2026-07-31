---
repo: "adobe/spacecat-audit-worker"
name: "spacecat-audit-worker"
description: "SpaceCat Audit Worker for auditing edge delivery sites."
readmeQualityOk: true
url: "https://github.com/adobe/spacecat-audit-worker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 14
forks: 15
openIssues: 13
closedIssues: 21
watchers: 30
contributors: 354
recentReleases: 0
createdAt: "2023-10-06T03:47:31Z"
lastCommitAt: "2026-07-31T06:30:41Z"
lastReleaseAt: "2023-12-05T17:33:29Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 62
maintainers: ["semantic-release-bot", "AndreiAlexandruParaschiv", "akshaymagapu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0873c8647dae0446b78b5539b2a280635b3fad2efad241952061c8f85921515/adobe/spacecat-audit-worker"
---

# SpaceCat Audit Worker

> SpaceCat Audit Worker for auditing edge delivery sites.

## Status

## Installation

```bash
$ npm install @adobe/spacecat-audit-worker
```

## Usage

See the [API documentation](https://github.com/adobe/spacecat-audit-worker/blob/HEAD/docs/API.md).

## Development

### Build

```bash
$ npm install
```

### Test

```bash
$ npm test
```

### Lint

```bash
$ npm run lint
```

## Message Body Formats

Audit worker consumes the `AUDIT_JOBS_QUEUE` queue, performs the requested audit, then queues the result to `AUDIT_RESULTS_QUEUE` for the interested parties to consume later on.

Expected message body format in `AUDIT_JOBS_QUEUE` is:

```json
{
  "type": "string",
  "siteId": "string"
}
```

Output message body format sent to `AUDIT_RESULTS_QUEUE` is:

```json
{
  "type": "string",
  "url": "string",
  "auditContext": "object",
  "auditResult": "object"
}
```

## How to Run Locally

**Prerequisite:** Connection to Adobe Corp VPN is required for accessing KLAM and Vault.

### 1. Using `nodemon` and AWS Credentials

Everyone working on Spacecat should have access to the development environments via [KLAM](https://klam.corp.adobe.com/). 
If you don’t have access,…
