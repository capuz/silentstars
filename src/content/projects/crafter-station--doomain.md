---
repo: "crafter-station/doomain"
name: "doomain"
description: "Link your Vercel project and domain in seconds"
readmeQualityOk: true
url: "https://github.com/crafter-station/doomain"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-04-28T22:06:20Z"
lastCommitAt: "2026-09-19T01:37:33Z"
lastReleaseAt: "2026-04-29T06:41:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 17
maintainers: ["cuevaio", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3a287f71a6cba1da3b0ae31cb3851076a3f3a0268616ca57959f82c2d4ea1be/crafter-station/doomain"
---

# Doomain

Doomain links Vercel projects and first-time Clerk production instances to custom domains from your terminal.

It handles the boring parts of custom-domain setup: selecting the Vercel project, finding the right DNS zone, adding the domain to Vercel, writing the Vercel DNS records, waiting for public DNS propagation, and asking Vercel to verify the domain.

Use the interactive wizard when working by hand. Use explicit commands with `--json` for scripts, CI, or agents.

## Features

- Interactive Vercel domain-linking wizard.
- Script-friendly commands with one JSON object on stdout.
- Vercel project detection from `.vercel/project.json`.
- DNS provider inference by longest matching configured zone.
- Dry-run plans before writing changes.
- Safety checks before replacing DNS records that point elsewhere.
- DNS propagation and Vercel verification wait loop.
- DNS provider support for Spaceship, Namecheap, Cloudflare, and Hostinger.
- First-time Clerk production setup with automatic CNAME configuration.

## Install

```bash
npm install -g doomain
```

Doomain requires Node.js 18 or newer.

## Quick Start

Run the wizard:

```bash
doomain
```

The wizard will:

1. Ask for a…
