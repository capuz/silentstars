---
repo: "benelabs/crucible"
name: "crucible"
description: "A Soroban Smart Contract Testing Utilities Library. A Rust testing helper library for Soroban contracts. Think of it as a jest or hardhat equivalent, but purpose-built for Soroban's test environment."
readmeQualityOk: true
url: "https://github.com/benelabs/crucible"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
stars: 17
forks: 142
openIssues: 15
closedIssues: 863
watchers: 0
contributors: 138
recentReleases: 10
createdAt: "2026-03-15T23:40:02Z"
lastCommitAt: "2026-10-23T12:04:46Z"
lastReleaseAt: "2026-08-29T19:57:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 70
maintainers: ["Dimank92", "semantic-release-bot", "Loisyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d28ad74583cdf933e794cc988b57eeed59c6446de3cf5ce82bc0be41bb525c8/benelabs/crucible"
---

# crucible

> A batteries-included testing toolkit for Soroban smart contracts.

---

Writing tests for Soroban contracts today means wiring up environments by hand, copying boilerplate across every repo, and hunting through Stellar docs just to assert that an event fired. **crucible** changes that.

It is a purpose-built Rust testing library for Soroban — analogous to what jest is for JavaScript or hardhat is for Solidity — giving you a rich set of builders, helpers, assertion macros, and fixtures so you can focus on _what_ your contract should do, not on how to set up the harness to prove it.

---

## Table of Contents

- [Motivation](#motivation)
- [Features at a Glance](#features-at-a-glance)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
  - [MockEnv — The Test Environment Builder](#mockenv--the-test-environment-builder)
  - [Pre-funded Accounts](#pre-funded-accounts)
  - [Token Contracts](#token-contracts)
  - [Transaction Simulation](#transaction-simulation)
  - [Event Assertions](#event-assertions)
  - [Testing Cross-Contract Calls](#testing-cross-contract-calls)
  - [Gas & Fee Estimation](#gas--fee-estimation)
  - [Custom…
