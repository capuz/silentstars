---
repo: "macalbert/envilder"
name: "envilder"
description: "One secret mapping for local dev, CI/CD, and runtime. Envilder resolves cloud secrets from your own vaults without SaaS middlemen, duplicated config, or .env drift."
readmeQualityOk: true
url: "https://github.com/macalbert/envilder"
homepage: "https://envilder.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
topics: ["automation", "dotenv", "secrets", "ci-cd", "aws-ssm", "azure-keyvault", "configuration", "developer-tools", "github-actions", "secret-management"]
stars: 138
forks: 5
openIssues: 28
closedIssues: 35
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-09-19T10:58:20Z"
lastCommitAt: "2026-10-30T09:46:02Z"
lastReleaseAt: "2025-07-06T00:41:20Z"
status: "thriving"
tags: ["funded", "under_pressure"]
healthScore: 90
undervaluedScore: 42
maintainers: ["macalbert", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/859829892/cf3a417f-d3c4-4689-8921-72b74112ff28"
fundingLinks: ["GITHUB:https://github.com/macalbert"]
discussionCount: 3
promoted: true
postedAt: "2026-10-25T09:07:05.933Z"
---

# 🗝️ Envilder ☁️

## Why Envilder?

Your new developer joins the team. They need environment variables to run the app locally.
What happens next? Someone sends API keys over Slack. Someone else digs up a wiki page
with outdated credentials. Forty-five minutes later, their `.env` file is "probably correct".

**Envilder fixes this with one versioned mapping contract.**

You create a JSON mapping between variable names and cloud secret paths. Envilder resolves
them from AWS SSM or Azure Key Vault. The same mapping file works in local dev (CLI),
CI/CD (GitHub Action), and application startup (runtime SDKs).

```bash
# Push a secret: it is stored in your cloud and mapped in envilder.json
npx envilder --key=API_KEY --value=s3cret --secret-path=/my-app/api-key

# Zero-config: uses envilder.json and .env by default
npx envilder

# Or with explicit paths
npx envilder --map=envilder.json --envfile=.env

# Or skip the file: run your app with the secrets in memory
npx envilder exec -- npm run dev
```

No SaaS middleman. One versioned mapping contract. Secrets stay in your cloud.

## The problem

- **Onboarding takes hours, not seconds.** Every new developer needs someone to explain which…
