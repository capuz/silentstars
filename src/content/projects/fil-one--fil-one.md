---
repo: "fil-one/fil-one"
name: "fil-one"
description: "S3 object storage built for the AI era"
readmeQualityOk: true
url: "https://github.com/fil-one/fil-one"
homepage: "https://fil.one"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["decentralized", "filecoin", "ipfs", "s3-compatible", "storage"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2026-02-11T21:40:45Z"
lastCommitAt: "2026-10-23T09:32:48Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 65
maintainers: ["pyropy", "dependabot[bot]", "filipagr"]
openGraphImageUrl: "https://opengraph.githubassets.com/64172cc1ae1a5d81dc7f07f26e22ec63216cde5735a4c6cbbc0c7abdb351b322/fil-one/fil-one"
---

# Fil One

Full-stack prototype — pnpm workspaces monorepo deploying to AWS via [SST v3](https://sst.dev/).

## Structure

```
hyperspace/
├── sst.config.ts  # SST v3 infrastructure (app stack — API, website, queues, etc.)
├── infra/         # SST v3 infrastructure (base infra — OIDC provider, IAM roles)
├── packages/
│   ├── shared/     # TypeScript interfaces shared between website and backend
│   ├── aurora-backoffice-client/ # Generated TS client for Aurora Back Office API
│   ├── aurora-portal-client/    # Generated TS client for Aurora Portal API
│   ├── backend/    # Lambda handlers (upload → DynamoDB)
│   └── website/    # Vite + React 19 + TanStack Router SPA + Tailwind v4
```

## AWS account

|                     |                                        |
| ------------------- | -------------------------------------- |
| Staging/dev Account | `654654381893`                         |
| Region              | `us-east-2`                            |
| SSO portal          | https://d-9067ff87d6.awsapps.com/start |

## Prerequisites

- **Node.js** >= 24
- **AWS CLI** — required for S3 sync and CloudFront invalidation during deploy. [Install…
