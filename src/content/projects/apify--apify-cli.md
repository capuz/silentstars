---
repo: "apify/apify-cli"
name: "apify-cli"
description: "Apify command-line interface helps you create, develop, build and run Apify Actors, and manage the Apify cloud platform."
readmeQualityOk: true
url: "https://github.com/apify/apify-cli"
homepage: "https://docs.apify.com/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["command-line", "serveless", "headless-chrome", "puppeteer", "apify", "hacktoberfest"]
stars: 253
forks: 64
openIssues: 111
closedIssues: 325
watchers: 6
contributors: 60
recentReleases: 0
createdAt: "2018-01-17T15:05:58Z"
lastCommitAt: "2026-09-23T08:46:44Z"
lastReleaseAt: "2022-06-14T10:26:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 41
maintainers: ["apify-service-account", "renovate[bot]", "l2ysho"]
openGraphImageUrl: "https://opengraph.githubassets.com/037e4bb59dd279cb3f4f1e51b1254886fb283cdbbf4f0a9de375efee39b3fd9c/apify/apify-cli"
discussionCount: 1
---

# Apify CLI

Apify CLI is the command-line tool for creating, developing, and deploying [Apify Actors](https://www.apify.com/actors), and for managing the Apify cloud platform from your terminal.

## Features

- Create, develop, and deploy Apify Actors from your terminal
- Run Actors locally for development and testing, or in the Apify cloud
- Manage Actors, datasets, key-value stores, and request queues
- Manage secret environment variables used by your Actors
- Works with any programming language — Actors run as Docker containers on the platform

## Agent skill

This repo ships an [agent skill](https://github.com/apify/apify-cli/blob/HEAD/skills/apify/SKILL.md) that teaches AI coding agents (Claude Code, Cursor, etc.) how to work with the Apify CLI reliably. You can print the skill straight from the CLI — it always matches your installed version:

```bash
apify help --skill
```

If you'd rather have the skill installed persistently, `apify help --skill` prints a valid `SKILL.md` that you can redirect into your agent's skills directory. The location depends on the agent:

### Claude Code

```bash
mkdir -p ~/.claude/skills/apify-cli
apify help --skill >…
