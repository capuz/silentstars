---
repo: "saleor/configurator"
name: "configurator"
description: "A tool that helps you automate the creation of data models in Saleor."
readmeQualityOk: true
url: "https://github.com/saleor/configurator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["commerce", "data", "ecommerce", "modelling"]
stars: 30
forks: 7
openIssues: 5
closedIssues: 5
watchers: 4
contributors: 13
recentReleases: 2
createdAt: "2025-01-21T14:40:41Z"
lastCommitAt: "2026-11-20T12:21:08Z"
lastReleaseAt: "2026-11-20T08:56:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["peelar", "github-actions[bot]", "wcislo-saleor"]
openGraphImageUrl: "https://opengraph.githubassets.com/b130c00a6b660bd32315809787396bf91fdbb6633796a4bf0890612282efa0f2/saleor/configurator"
---

# Saleor Configurator

Define a [Saleor](https://saleor.io) store's configuration in YAML, keep it in Git, and sync it with the store. `introspect` writes the store to `config.yml`, `diff` shows what would change, and `deploy` applies the file.

## Compatibility

Configurator versions follow Saleor versions: configurator `3.23.x` targets Saleor `3.23.x`. The target is declared in `package.json#saleor.schemaVersion`. Other Saleor minors may work; `introspect`, `diff` and `deploy` print a warning when the connected store reports a different minor.

Requires Node.js 20 or later.

## Getting started

### 1. Create a token

In the Saleor Dashboard, go to **Extensions**, add an extension with **Provide details manually**, grant it all permissions, and create a token on its page. The token is shown once.

### 2. Point the CLI at your store

Pass `--url` and `--token` to each command, or set them once:

```bash
export SALEOR_URL="https://your-store.saleor.cloud/graphql/"
export SALEOR_TOKEN="your-token"
```

The CLI also reads these from `.env` and `.env.local` in the current directory. Keep tokens out of version control.
