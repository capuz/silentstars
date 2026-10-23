---
repo: "LedgerHQ/device-sdk-ts"
name: "device-sdk-ts"
description: "✨ A library enabling applications to communicate with Ledger devices."
readmeQualityOk: true
url: "https://github.com/LedgerHQ/device-sdk-ts"
homepage: "https://app.devicesdk.ledger.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 49
forks: 39
openIssues: 13
closedIssues: 9
watchers: 6
contributors: 46
recentReleases: 0
createdAt: "2023-09-08T07:56:52Z"
lastCommitAt: "2026-10-23T09:25:20Z"
lastReleaseAt: "2024-11-22T16:14:44Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 87
undervaluedScore: 57
maintainers: ["fAnselmi-Ledger", "aussedatlo", "daniel-choinski-ledger"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a9885f0321a0aec98035b3a7fff0a0c19dc9592812502d457fb181454d0049c/LedgerHQ/device-sdk-ts"
---

·
    ·
  

# Introduction

The Device Management Kit (DMK) is a TypeScript library that provides easy communication with Ledger devices:

- Device discovery, identification, and connection
- Device management operations (app installation, device info retrieval) with comprehensive status tracking and error handling
- Ledger OS interaction
- App interaction for cryptographic operations
  - Address derivation, message and transaction signing
- App installation and management
- 🔜 OS updates

## How it works

The Device Management Kit features an interface for applications to handle any Ledger device (a.k. hardware wallets). It converts intention into

```mermaid
  flowchart LR;
      application(Application) <--API--> LDMK(LedgerDeviceManagementKit) <--USB/BLE--> device(Device);
```

The Device Management Kit is available in 3 different environments (web, Android & iOS).

This repository contains the **web implementation** of the Device Management Kit, built with TypeScript.

## Structure

### Repository

The Device Management Kit is structured as a monorepository that centralizes all TypeScript code related to the Device Management Kit in one place.

This project uses [turbo…
