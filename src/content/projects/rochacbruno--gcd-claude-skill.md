---
repo: "rochacbruno/gcd-claude-skill"
name: "gcd-claude-skill"
description: "Agent Skill for Google Cloud Dedicated"
readmeQualityOk: true
url: "https://github.com/rochacbruno/gcd-claude-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T06:43:34Z"
lastCommitAt: "2026-10-25T09:01:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["github-actions[bot]", "rochacbruno"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4c9ccdd62219aa769336b44d59284c8b45af49f8ea0c3d2704e7981671c0963/rochacbruno/gcd-claude-skill"
---

# Google Cloud Dedicated (GCD) Agent Skill

An [Agent Skill](https://agentskills.io) that gives AI coding agents expertise in Google Cloud's sovereign cloud platforms - Google Cloud Dedicated (Berlin) and Cloud de Confiance by S3NS (France). Works with Claude Code, Cursor, Gemini CLI, VS Code Copilot, and any other agent that supports the agentskills standard.

These sovereign clouds are separate products from public Google Cloud, running in isolated regions with strict data residency guarantees. Developers moving from GCP regularly hit differences in service availability, API endpoints, authentication, and tooling. This skill catches those issues before they become wasted hours.

## Supported regions

| Region | Product name | Identifier | Docs |
|---|---|---|---|
| Berlin, Germany | Google Cloud Dedicated in Germany | `u-germany-northeast1` | `berlin.devsitetest.how` |
| France | Cloud de Confiance by S3NS | `u-france-east1` | `documentation.s3ns.fr` |

## What it does

When activated, the skill provides:

- Sovereign-cloud-specific guidance for architecture, authentication, Terraform, and developer tooling
- Automatic detection of public GCP patterns that won't work in…
