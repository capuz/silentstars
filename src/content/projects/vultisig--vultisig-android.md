---
repo: "vultisig/vultisig-android"
name: "vultisig-android"
description: "Vultisig Android App"
readmeQualityOk: true
url: "https://github.com/vultisig/vultisig-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 23
forks: 19
openIssues: 6
closedIssues: 2864
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2024-04-22T02:25:31Z"
lastCommitAt: "2026-09-30T09:38:40Z"
lastReleaseAt: "2024-07-27T11:16:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 72
maintainers: ["aminsato", "johnnyluo", "realpaaao"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e736648b6ce535cc492267bbe37261f1e911b0c138b8477ed0b130411b9859e/vultisig/vultisig-android"
---

# vultisig-android
vultisig android app

## Setup GitHub personal token
This project uses [Trust Wallet WalletCore](https://github.com/trustwallet/wallet-core). Since WalletCore is hosted on GitHub Packages, Gradle needs a GitHub personal access token. Set the following environment variables:
You can also add it to your `~/.bashrc` or `~/.zshrc` file, more detail refer to [this guide](https://developer.trustwallet.com/developer/wallet-core/integration-guide/android-guide)
```bash
export TRUSTWALLET_USER=your_github_user
export TRUSTWALLET_PAT=your_github_token
```

[How to get a personal github token?] (https://github.com/settings/tokens)

### Migrating from GITHUB_TOKEN/GITHUB_USER

If you previously had `GITHUB_TOKEN` and `GITHUB_USER` set, rename them in your `~/.zshrc` or `~/.bashrc`:
```bash
# Before
export GITHUB_USER=your_github_user
export GITHUB_TOKEN=your_github_token

# After
export TRUSTWALLET_USER=your_github_user
export TRUSTWALLET_PAT=your_github_token
```

Then re-auth `gh` CLI (since it was previously using `GITHUB_TOKEN` for auth):
```bash
gh auth login --web --git-protocol https
gh auth refresh -h github.com -s workflow
```

## Git hooks setup
After cloning the…
