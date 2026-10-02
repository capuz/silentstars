---
repo: "pantheon-org/tekhne"
name: "tekhne"
description: "Agents Skills"
readmeQualityOk: true
url: "https://github.com/pantheon-org/tekhne"
homepage: "https://pantheon-org.github.io/tekhne/"
language: "HCL"
languages: ["HCL", "Rust"]
languagePcts: [46, 22]
topics: ["agent-skills", "skills", "tessl"]
stars: 10
forks: 1
openIssues: 12
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-02-21T13:38:58Z"
lastCommitAt: "2026-10-02T10:00:03Z"
lastReleaseAt: "2026-09-11T08:25:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 86
undervaluedScore: 58
maintainers: ["thoroc", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5666ea752c4ecbff5e9aa15a689aa81fc74253d4980137957488ae63e7c1de02/pantheon-org/tekhne"
discussionCount: 0
---

# Tekhne - Agent Skills Repository

A curated collection of reusable agent skills for AI assistants, designed for easy redistribution and integration.

## What are Agent Skills?

Agent skills are modular instruction packages that extend AI assistant capabilities. Each skill provides specialized
domain knowledge, workflows, and best practices that can be loaded on-demand.

## Skill Catalog

Browse all **122 skills across 70 tiles** in the [Skill Catalog](https://pantheon-org.github.io/tekhne/tiles/).

## Installing skills

Skills are plain Markdown, so any ecosystem installer can add the whole
collection to an agent configuration:

```bash
git clone https://github.com/pantheon-org/tekhne.git
cd tekhne

# Install all skills into your project
npx skills add ./skills --all
```

Three of the skills also ship as standalone Rust binaries for macOS and Linux,
each of which installs its own companion skill. These need no clone:

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/pantheon-org/tekhne/releases/download/tool/pantheon-skill-auditor-v0.2.3/pantheon-skill-auditor-installer.sh | sh

pantheon-skill-auditor skill install     # or: skill uninstall
```

See the…
