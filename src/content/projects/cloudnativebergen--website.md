---
repo: "CloudNativeBergen/website"
name: "website"
description: "Cloud Native Day Bergen"
readmeQualityOk: true
url: "https://github.com/CloudNativeBergen/website"
homepage: "https://cloudnativebergen.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 95
closedIssues: 599
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-04-01T21:32:59Z"
lastCommitAt: "2026-11-02T11:27:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 82
maintainers: ["Starefossen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48c01c7583fcadb3722115651ee610cd1a0fdc0ccaeb24d059f9368f392d5961/CloudNativeBergen/website"
---

# Cloud Native Days Norway

Official website for Cloud Native Days in Norway.

## Getting started

### Prerequisites

This project uses [mise](https://mise.jdx.dev/) for tool management and task running, and [fnox](https://fnox.jdx.dev/) for secure secret storage in your local keychain.

Install `mise` (if not already installed):

```bash
curl https://mise.run | sh
```

Install `fnox`:

```bash
brew install fnox
```

### Install dependencies

```bash
mise run install
# equivalent to: pnpm install
```

### Set up secrets

Secrets are stored securely in your OS keychain via `fnox` — no plaintext `.env.local` needed after setup.

All secrets are declared in `fnox.toml`. To populate the keychain for the first time, create a temporary `.env.local` with your secrets and run:

```bash
./scripts/migrate-fnox.sh
rm .env.local  # safe to delete once imported
```

To add or update an individual secret later:

```bash
fnox set MY_SECRET_KEY -- "the value here"
```

To verify what is stored in the keychain:

```bash
fnox list
```

> **Note:** We also maintain committed default `.env`, `.env.test`, and `.env.production` files containing safe non-sensitive defaults (public URLs, feature flags).…
