---
repo: "red-gate/flyway-actions"
name: "flyway-actions"
description: "Official Redgate Actions: Set up, check, and deploy changes with Redgate Flyway"
url: "https://github.com/red-gate/flyway-actions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 296
recentReleases: 0
createdAt: "2026-01-28T16:22:18Z"
lastCommitAt: "2026-06-26T06:47:26Z"
lastReleaseAt: "2026-03-18T11:37:51Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 52
maintainers: ["DoodleBobBuffPants", "IvoMiller", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af38e7a194cb32bc3a563e976dcba857167fba86901f62b746b59c10cea158dc/red-gate/flyway-actions"
---

# Redgate Flyway GitHub Actions

</p>

### Set up, check, and deploy changes with Redgate Flyway

---

These actions allow you to safely deploy database schema changes to your databases using [Redgate Flyway](https://www.red-gate.com/products/flyway/).
Supports 50+ databases including PostgreSQL, MySQL, SQL Server, and Oracle.

These actions can be used both for database deployment pipelines, and for validation of your PRs.

## Actions

| Action                                                     | Description                                                 |
|------------------------------------------------------------|-------------------------------------------------------------|
| [`setup-flyway`](https://github.com/red-gate/setup-flyway) | Install Flyway CLI in your GitHub Actions workflow          |
| [`migrations/checks`](migrations/checks)                   | Run pre-deployment checks on migrations and target database |
| [`migrations/deploy`](migrations/deploy)                   | Deploy pending migrations against target database           |
| [`migrations/generate`](migrations/generate)               | Generate migrations from your schema model                  |
|…
