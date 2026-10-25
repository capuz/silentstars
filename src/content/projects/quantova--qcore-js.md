---
repo: "Quantova/QCore.js"
name: "QCore.js"
description: "Quantova's client core for JavaScript and WebAssembly. Post quantum signing and Q1 addresses, generated over the Rust core."
readmeQualityOk: true
url: "https://github.com/Quantova/QCore.js"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["blockchain", "client-library", "cryptography", "fips-204", "ml-dsa", "post-quantum", "quantova", "quantum-resistant", "quantum-safe", "sdk"]
stars: 135
forks: 129
openIssues: 0
closedIssues: 0
watchers: 89
contributors: 1
recentReleases: 0
createdAt: "2026-07-17T18:13:14Z"
lastCommitAt: "2026-10-25T09:01:12Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 31
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d85709d354b22e463b2127d9ab0531d518b847b524b14efdd23146dc6b0a5fc/Quantova/QCore.js"
---

# QCore.js

The post quantum client core for Quantova. It signs with ML-DSA-65, builds Q1 addresses, and runs the same compiled core in the browser and in Node.

**This npm account and this package belong to Quantova Inc. It is the official Quantova client SDK. Any similarly named package published under a different account is not this one and is not from Quantova.**

## Install

```
npm install @quantovainc/qcore
```

## Quickstart

```js
const { Client, Network, core, generateSeed } = require('@quantovainc/qcore');

const GATEWAY = 'https://q-test-net-01.quantova.org';

async function main() {
  // Create an account. The seed is the only backup and it never leaves the device.
  const seed = generateSeed();
  const phrase = core.mnemonicFromSeed(seed);

  // Derive the Q1 address for account index zero, and a recipient at index one.
  const from = core.address(seed, 0n);
  const to = core.address(seed, 1n);
  console.log('from', from);

  // Open a client against a node you trust. The address above is the public testnet
  // gateway. A remote gateway must be https, plaintext http is allowed only to a loopback node.
  const client = new Client(GATEWAY, { network: Network.testnet()…
