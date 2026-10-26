---
repo: "berkmancenter/keyring-bifold"
name: "keyring-bifold"
description: "Keyring Bifold - Core logic and components for Keyring Wallet: Open-source digital wallet  for user-controlled identity. Exchange verifiable relationship credentials with privacy by design."
readmeQualityOk: true
url: "https://github.com/berkmancenter/keyring-bifold"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 1
openIssues: 9
closedIssues: 4
watchers: 1
contributors: 56
recentReleases: 0
createdAt: "2026-04-10T22:17:53Z"
lastCommitAt: "2026-10-26T09:18:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 46
maintainers: ["albertoleon7794"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c341ae9197573548311f761ee49d98c8dfd2cacfde9f66875967f2d135cc19/berkmancenter/keyring-bifold"
---

# keyring-bifold

Core framework, shared packages, and witness server for [Keyring](https://github.com/berkmancenter/keyring-wallet).

⚠️ NOTE! This is a functional alpha release, but is not meant for production uses at this time. See [issues](https://github.com/berkmancenter/keyring-bifold/issues) for more information.

This is a fork of the [Bifold Wallet](https://github.com/openwallet-foundation/bifold-wallet) from the [OpenWallet Foundation](https://openwallet.foundation/), extended with support for Verifiable Relationship Credentials (VRCs), witnessed credential exchange, and biometric hardware attestation.

## What's Added

Beyond the upstream Bifold capabilities (AnonCreds, W3C VCs, DIDComm, mediation), this fork introduces:

- **VRC Module** — Peer-to-peer Verifiable Relationship Credential exchange using the Relationship Credential Exchange (RCE) protocol, including parallel issuance, relationship DIDs, and R-Card/jCard profile data
- **Witness Server** — A standalone Node.js service implementing the DTG Witnessed Exchange protocol, issuing Verifiable Witness Credentials (VWCs) over DIDComm
- **Biometric Hardware Attestation** — Device-backed cryptographic evidence using…
