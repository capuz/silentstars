---
repo: "brave/wallet-lists"
name: "wallet-lists"
description: "Manages custom token lists for Brave Wallet"
readmeQualityOk: true
url: "https://github.com/brave/wallet-lists"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 32
forks: 20
openIssues: 6
closedIssues: 13
watchers: 9
contributors: 37
recentReleases: 0
createdAt: "2022-01-10T19:09:56Z"
lastCommitAt: "2026-11-10T14:48:15Z"
lastReleaseAt: "2022-11-11T17:35:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 59
maintainers: ["github-actions[bot]", "onyb", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c852701dd27f50c109db903785f9db190da50f281af538aed82d7977fbb4208d/brave/wallet-lists"
---

# wallet-lists

Manages custom wallet lists for Brave Wallet

## Automated Publishing

The [Auto Release](https://github.com/brave/wallet-lists/blob/HEAD/.github/workflows/auto-release.yml) workflow builds the wallet data files daily and publishes them as a GitHub release, with the component contents attached as `wallet-lists.zip` (`VERSION` inside the zip names the release it came from). Releases are immutable, and each zip has a signed build provenance attestation that consumers should check before using it:

```bash
gh attestation verify wallet-lists.zip --repo brave/wallet-lists \
  --signer-workflow brave/wallet-lists/.github/workflows/auto-release.yml
```

Nothing is published to npm. The `@brave/wallet-lists` npm package is no longer updated ([#369](https://github.com/brave/wallet-lists/issues/369)).

A **weekly** cron job on [Jenkins](https://github.com/brave/devops/blob/master/jenkins/jobs/extensions/brave-core-ext-wallet-data-files-update-publish.yml) runs [brave/brave-core-crx-packager](https://github.com/brave/brave-core-crx-packager), which downloads and verifies the latest release and packages it into the wallet data files component.

## Development

### Code Quality…
