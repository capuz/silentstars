---
repo: "StuMason/laravel-coolify"
name: "laravel-coolify"
description: "Laravel package for deploying to Coolify. Dashboard, CLI commands, and Dockerfile generation."
readmeQualityOk: true
url: "https://github.com/StuMason/laravel-coolify"
homepage: "https://stumason.github.io/laravel-coolify/"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [57, 35]
topics: ["coolify", "deployment", "devops", "docker", "laravel", "paas", "php", "self-hosted"]
stars: 14
forks: 3
openIssues: 2
closedIssues: 37
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2025-12-17T15:45:34Z"
lastCommitAt: "2026-10-21T23:36:19Z"
lastReleaseAt: "2026-10-02T10:29:04Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 46
maintainers: ["StuMason", "dependabot[bot]", "michael-grunewalder"]
openGraphImageUrl: "https://opengraph.githubassets.com/fea2a128fa2c07af6afda1b0449e5bee2668b2148d329030a138acb3fcfb01cb/StuMason/laravel-coolify"
---

# Laravel Coolify

**Deploy Laravel to [Coolify](https://coolify.io) with one command. Dashboard, CLI, and Dockerfile generation included.**

Like Laravel Horizon for queues, but for your entire infrastructure.

> 💡 **Using an AI assistant?** Check out [**coolify-mcp**](https://github.com/StuMason/coolify-mcp) — a 42-tool MCP server that lets Claude, Cursor, and friends manage your whole Coolify estate through natural language.

## Why This Exists

Self-hosting with Coolify is great, but managing deployments from the Coolify UI gets tedious. This package gives you:

- **A beautiful dashboard** inside your Laravel app - deploy, restart, view logs, manage env vars
- **Artisan commands** for everything - CI/CD pipelines, local development, scripting
- **Production-ready Dockerfiles** generated automatically - no Docker knowledge required
- **Full API access** to Coolify - build custom tooling, automations, whatever you need

## Quick Start

```bash
composer require stumason/laravel-coolify
php artisan coolify:install
```

Add to `.env`:

```env
COOLIFY_URL=https://your-coolify.com
COOLIFY_TOKEN=your-api-token
```

Then provision your infrastructure:

```bash
php artisan…
