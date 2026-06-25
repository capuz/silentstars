---
repo: "brave/wallet-lists"
name: "wallet-lists"
description: "Manages custom token lists for Brave Wallet"
url: "https://github.com/brave/wallet-lists"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 32
forks: 17
openIssues: 6
closedIssues: 12
watchers: 8
contributors: 37
recentReleases: 0
createdAt: "2022-01-10T19:09:56Z"
lastCommitAt: "2026-06-25T01:36:47Z"
lastReleaseAt: "2022-11-11T17:35:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 58
maintainers: ["github-actions[bot]", "renovate[bot]", "onyb"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9ba9ce3b5899a9f29c6e138b5e1717c80d1297628fd074b787be320e3cebaed/brave/wallet-lists"
---

# wallet-lists

Manages custom wallet lists for Brave Wallet

## Automated Publishing

We have setup a **weekly** cron job on [Jenkins](https://github.com/brave/devops/blob/master/jenkins/jobs/extensions/brave-core-ext-wallet-data-files-update-publish.yml) that publishes the latest NPM package to wallet data files.

## Development

### Code Quality

This project uses [neostandard](https://github.com/neostandard/neostandard) for code linting to maintain consistent code style and catch potential issues.

```bash
pnpm lint
```

### Ubuntu

- Install system dependencies.

  ```bash
  sudo apt install librsvg2-bin libimagequant-dev pkg-config
  ```

- Ensure you have the required node version and `pnpm` installed.

- Install dependencies and run the build script.

  ```bash
  pnpm install
  pnpm start
  ```

### MacOS

- Install system dependencies.

  ```bash
  brew install librsvg libimagequant pkg-config
  ```

- Ensure you have the required node version and `pnpm` installed.

- Install dependencies and run the build script.

  ```bash
  pnpm install
  pnpm start
  ```

## Publishing wallet list to npm…
