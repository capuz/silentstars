---
repo: "babylonlabs-io/babylon-toolkit"
name: "babylon-toolkit"
description: "Babylon’s frontend monorepo contains everything you need to build a world-class staking dApp."
readmeQualityOk: true
url: "https://github.com/babylonlabs-io/babylon-toolkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 14
forks: 11
openIssues: 142
closedIssues: 742
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2025-01-23T04:23:22Z"
lastCommitAt: "2026-09-22T08:44:58Z"
lastReleaseAt: "2025-06-01T12:40:47Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["jonybur", "jeremy-babylonlabs", "gbarkhatov"]
openGraphImageUrl: "https://opengraph.githubassets.com/121475f95538573d48cdd18ed97cfa9c76dfa71d907b9896e0449761d945a45b/babylonlabs-io/babylon-toolkit"
---

</p>
</p>
<br/>

# Babylon Monorepo

This repository is a monorepo for Babylon Labs TypeScript applications and libraries. It uses [Nx](https://nx.dev/) to manage multiple packages, allowing for efficient development and deployment of TypeScript-based projects.

# Development
Please follow the guidelines outlined in the [DEVELOPMENT.md](https://github.com/babylonlabs-io/babylon-toolkit/blob/HEAD/DEVELOPMENT.md) file.

# Working with services

The services are located in the `services` directory. To get started with development, follow these steps:
Note: Replace `{service-name}` with the actual name of the service you want to work on. For example, `@services/simple-staking` and `@services/vault`.

```bash
pnpm run build # Build the entire monorepo. After the first run, the build result will be cached for most packages.
```

Option 1:
```bash
pnpm exec nx dev @services/{service-name} # Start the development server for the {service-name} service.
pnpm exec nx watchDeps @services/{service-name} # Watch for changes in dependencies and rebuild as necessary.
```

Option 2:
```bash
pnpm exec nx dev:watchDeps @services/{service-name} # Start the development server and watch for changes in…
