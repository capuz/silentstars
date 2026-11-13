---
repo: "macalbert/envilder"
name: "envilder"
description: "One envilder.json maps env vars to secrets in AWS SSM or Azure Key Vault. The same contract works in local dev (CLI), CI/CD (GitHub Action) and at runtime (Node.js, Python, .NET SDKs). Validate the mapping, run apps with secrets in memory. No SaaS: secrets stay in your cloud."
readmeQualityOk: true
url: "https://github.com/macalbert/envilder"
homepage: "https://envilder.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [64]
topics: ["automation", "dotenv", "secrets", "ci-cd", "aws-ssm", "azure-keyvault", "configuration", "developer-tools", "github-actions", "secret-management"]
stars: 138
forks: 5
openIssues: 25
closedIssues: 41
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-09-19T10:58:20Z"
lastCommitAt: "2026-11-09T09:24:05Z"
lastReleaseAt: "2025-07-06T00:41:20Z"
status: "thriving"
tags: ["funded", "under_pressure"]
healthScore: 90
undervaluedScore: 43
maintainers: ["macalbert", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/859829892/effa0a16-43d4-499c-a962-6ba9bd31f793"
fundingLinks: ["GITHUB:https://github.com/macalbert"]
discussionCount: 3
promoted: true
postedAt: "2026-10-25T09:07:05.933Z"
---

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
npx envilder --push --key=API_KEY --value=s3cret --secret-path=/my-app/api-key

# Zero-config: uses envilder.json and .env by default
npx envilder

# Or with explicit paths
npx envilder --map=envilder.json --envfile=.env

# Or skip the file: run your app with the secrets in memory
npx envilder exec -- npm run dev
```

No SaaS middleman. One versioned mapping contract. Secrets stay in your cloud.

## The problem

- **Onboarding takes hours, not seconds.** Every new developer needs someone to explain which
  secrets go…
