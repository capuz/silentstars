---
repo: "skyf0xx/gleam-arweave-ao-hyperbeam-wallet"
name: "gleam-arweave-ao-hyperbeam-wallet"
description: "Gleam is a lightweight Web3 crypto browser extension and mobile wallet for Arweave, AO, HyperBEAM, and decentralized applications. Manage wallets, tokens, transactions, and digital assets with a simple, clean interface. Works on Chrome, iOS and Android"
readmeQualityOk: true
url: "https://github.com/skyf0xx/gleam-arweave-ao-hyperbeam-wallet"
homepage: "https://gleamwallet.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ao", "arweave", "arweave-blockchain", "arweave-dapp", "arweave-permaweb", "arweave-storage", "hyperbeam", "permaweb"]
stars: 6
forks: 38
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 16
recentReleases: 10
createdAt: "2026-09-14T01:49:29Z"
lastCommitAt: "2026-11-23T10:12:57Z"
lastReleaseAt: "2026-10-31T04:56:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 83
maintainers: ["skyf0xx", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1369130732/ae09ab26-ce70-4652-9f60-9dc3baf9f660"
---

# Gleam

A Chrome browser-extension wallet for Arweave and AO.

## For dApp developers

### Works with `window.arweaveWallet`

Gleam implements the [ArConnect API](https://docs.arconnect.io/api/intro).
Code written for `window.arweaveWallet` **works with Gleam unchanged**,
except for `privateHash` and the deprecated `signature` (see below).

### Keep a user's data private across devices

Use `encrypt` and `decrypt` to lock your app's data key to the user's
wallet, so they can open their data on any device.

```js
await window.arweaveWallet.connect(["ENCRYPT", "DECRYPT"]);

const key = crypto.getRandomValues(new Uint8Array(32)); // your app's data key
const locked = await window.arweaveWallet.encrypt(key, { name: "RSA-OAEP" });
// Later, on any device:
const sameKey = await window.arweaveWallet.decrypt(locked, {
  name: "RSA-OAEP",
});
```

Gleam does not support `privateHash`, because it needs the private key to
stay readable while the wallet is unlocked.

Gleam does not support the deprecated `signature`, because it signs
whatever bytes a site passes, such as a hash the site computed. Use `signMessage` or
`signDataItem` instead.
