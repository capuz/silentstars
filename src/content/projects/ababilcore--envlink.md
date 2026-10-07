---
repo: "AbabilCore/envlink"
name: "envlink"
description: "Secure and anonymous environment file sharing CLI"
readmeQualityOk: true
url: "https://github.com/AbabilCore/envlink"
homepage: "https://envlink.ababilspark.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [72, 27]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-24T10:52:24Z"
lastCommitAt: "2026-10-07T10:14:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["AbabilCore"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6f957b03b9e68e14ff0b1b98e395a1844ddd474c79b35efc7351e207eea4d72/AbabilCore/envlink"
---

# EnvLink

Secure and anonymous environment file sharing CLI - Share `.env` files with expiration and optional password protection.

## Key Features

- **Two Security Models**: Password-protected (zero-knowledge) and optional-password (convenient)
- **Quick Sharing**: Password-free sharing with extended IDs
- **Strong Encryption**: AES-256-GCM with PBKDF2 key derivation
- **Auto-Expiration**: From minutes to never (password-protected) or fixed 1-hour (optional-password)
- **No Signup**: Completely anonymous
- **Update Support**: Modify password-protected EnvLinks after creation
- **Multi-File**: Share up to 10 .env files per EnvLink

## Installation

### Permanent Installation

```bash
npm install -g envlink
```

### One-Time Use (No Installation)

You can use EnvLink without installing it permanently:

```bash
# Using npx (Node.js) - creates optional-password by default
npx envlink create
npx envlink install el_abc123xyz456accesskey789

# Using bunx (Bun)
bunx envlink create
bunx envlink install el_abc123xyz456accesskey789

# Using pnpm
pnpm dlx envlink create
pnpm dlx envlink install el_abc123xyz456accesskey789
```

## Quick Start

### Password-Protected (Secure)

Create a…
