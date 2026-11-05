---
repo: "open-web3-stack/polkadot-ecosystem-tests"
name: "polkadot-ecosystem-tests"
description: "Polkadot Ecosystem Tests powered by Chopsticks"
readmeQualityOk: true
url: "https://github.com/open-web3-stack/polkadot-ecosystem-tests"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["polkadot"]
stars: 18
forks: 20
openIssues: 45
closedIssues: 141
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2024-06-05T00:28:48Z"
lastCommitAt: "2026-11-05T14:05:44Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 73
maintainers: ["github-actions[bot]", "dependabot[bot]", "rockbmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/8391e2e924d3dce772b8d327d5bd75cf489386cbe0f10b342aa05340df54e6d9/open-web3-stack/polkadot-ecosystem-tests"
---

# Polkadot Ecosystem Tests

Automated testing suite for the Polkadot ecosystem powered by [Chopsticks](http://github.com/AcalaNetwork/chopsticks).

## Quick Start

```bash
# Install dependencies
yarn install

# Run all tests
yarn test

# Run tests for specific chain
yarn test <chain>

# Run specific test
yarn test -t <test-name> #<test-name> is what was passed to `vitest.test()`, usually inside a `describe()` suite

# Run with Vitest UI
yarn test:ui

# Update snapshots
yarn test -u
```

## For Network Operators

### Automated Test Runs
- Tests run every 6 hours automatically
- Failed tests are retried after 5 minutes
- Persistent failures trigger notifications
- Subscribe to [notification issues](https://github.com/open-web3-stack/polkadot-ecosystem-tests/issues?q=is%3Aissue+is%3Aopen+label%3Anotifications) for updates

### Manual Test Triggers
Use the [bot trigger issue](https://github.com/open-web3-stack/polkadot-ecosystem-tests/issues/45) to run tests on-demand via GitHub Actions

## For Test Writers

### Test Naming Convention

For XCM tests between two networks, use the naming convention

```
<chain-a>.<chain-b>.test.ts
```

For end-to-end tests on a single network, use

```…
