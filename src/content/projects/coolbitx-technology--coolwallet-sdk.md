---
repo: "CoolBitX-Technology/coolwallet-sdk"
name: "coolwallet-sdk"
description: "JavaScript SDK to communicate with CoolWallet Pro."
readmeQualityOk: true
url: "https://github.com/CoolBitX-Technology/coolwallet-sdk"
homepage: "https://coolwallet.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 37
forks: 25
openIssues: 10
closedIssues: 4
watchers: 7
contributors: 37
recentReleases: 0
createdAt: "2019-11-01T10:53:17Z"
lastCommitAt: "2026-10-13T10:57:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 57
maintainers: ["bu0304", "jin860315", "coolbitxColma"]
openGraphImageUrl: "https://opengraph.githubassets.com/996e3e8cf9d4bb734ea90248804da81344e31452da85b9d6914ce331112ebc93/CoolBitX-Technology/coolwallet-sdk"
discussionCount: 16
---

# CoolWallet Javascript SDK

This is the monorepo of all the packages you need to build your own app with CoolWallet hardware wallet.

## Quick Start

### 1. Define your [transport](#Transport) layer

Depending on your platform, you may choose different [transport](#Transport) object to use in your application.

### 2. Register and setup hardware wallet.

To register your application with the wallet, take a look at the [wallet module](https://github.com/CoolBitX-Technology/coolwallet-sdk/blob/HEAD/packages/core/src/apdu/wallet.ts)  in `core` package. This guide you through the process of registration and seed generation.

### 3. Build your Application

Take a look at all the supported modules at [Coin Apps](#Coin-Apps). Used the keys generated in the previous step to initiate coin instances, then you can sign transactions, message with different coin instances.

## Packages

### Transport

Connect to a CoolWallet device by specifying the transport: bluetooth or nfc.

| Package                                                                           | Version                                                                          | Description                      |
|…
