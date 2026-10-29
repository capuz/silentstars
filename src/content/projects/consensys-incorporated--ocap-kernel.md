---
repo: "Consensys-Incorporated/ocap-kernel"
name: "ocap-kernel"
description: "The Ocap Kernel monorepo"
readmeQualityOk: true
url: "https://github.com/Consensys-Incorporated/ocap-kernel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 9
forks: 7
openIssues: 84
closedIssues: 259
watchers: 46
contributors: 15
recentReleases: 0
createdAt: "2024-06-28T23:11:40Z"
lastCommitAt: "2026-10-29T05:48:42Z"
lastReleaseAt: "2026-04-08T01:51:55Z"
status: "watched"
tags: ["community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 58
maintainers: ["rekmarks-consensys-1", "sirtimid", "ci-protocols-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0def01acf6b0829bbf2422bae4a0c7fe3da4b4fd384b7798da8ba7df1a55e417/Consensys-Incorporated/ocap-kernel"
discussionCount: 2
---

# Ocap Kernel Monorepo

Welcome to the Ocap Kernel team's monorepo! It is a work in progress.

## Usage

For detailed information on how to use the OCAP Kernel, please refer to:

- [Usage Guide](https://github.com/Consensys-Incorporated/ocap-kernel/blob/HEAD/docs/usage.md) — Setting up, configuring, and running the kernel in browser and Node.js environments.
- [Kernel Guide](https://github.com/Consensys-Incorporated/ocap-kernel/blob/HEAD/docs/kernel-guide.md) — Building on the kernel: writing vat code, kernel services, system subclusters, and persistence.

### Kernel Control Panel

You can launch a browser-based Kernel Control Panel to interact with and manage vats:

```bash
yarn workspace @ocap/extension run start
```

This will:

- Launch a development server serving the extension
- Set up a default cluster configuration
- Serve sample vat bundles
- Provide a UI for managing and interacting with the kernel and vats

The control panel allows you to:

- Launch vats
- View vat status
- Test kernel functionality
- Send messages to objects in vats
- **Inspect the database**: The control panel includes a built-in SQLite database inspector powered by SQLite WASM, allowing you to…
