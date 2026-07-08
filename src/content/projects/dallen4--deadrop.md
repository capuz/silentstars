---
repo: "dallen4/deadrop"
name: "deadrop"
description: "e2e encrypted secret sharing via p2p exchanges & embedded vaults"
readmeQualityOk: true
url: "https://github.com/dallen4/deadrop"
homepage: "https://deadrop.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["encryption", "peer-to-peer", "peerjs", "secrets", "secrets-management", "secrets-sharing", "web-crypto", "web-cryptography-api", "webrtc", "libsql"]
stars: 12
forks: 2
openIssues: 12
closedIssues: 19
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2022-08-24T07:05:14Z"
lastCommitAt: "2026-07-08T05:41:48Z"
lastReleaseAt: "2026-07-08T05:45:34Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 91
undervaluedScore: 76
maintainers: ["dallen4", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/97bbe48a2fd75277617dd95e23a541c2b40361440c158fb1d2968929a8249313/dallen4/deadrop"
discussionCount: 2
---

# deadrop

*deadrop* is an e2e encrypted secret sharing platform that leverages the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

## How it Works

Utilizing public key infrastructure patterns, deadrop uses AES (with GCM) and Eliptical Curve (ECDH) cryptographic methods to generate keys and obfuscate payloads then SHA-256 is used after handoff for verifying data integrity. All keys are exchanged through peer-to-peer connections over WebRTC allowing all key and payload communications to remain solely between the two peers ("dropper" and "grabber") and are not logged or tracked by any server-side functionality. An opaque drop ID, the dropper's peer ID, and a nonce for the drop session are stored in a redis instance. The dropper's peer ID and nonce are then retrieved for the grabber by sending GET request to the `/api/drop` endpoint.

## Features

- [x] raw text secret sharing
- [x] JSON string secret sharing
- [x] secret file sharing
- [x] basic captcha protection via [hcaptcha](https://www.hcaptcha.com/)
- [x] CLI MVP
  - [x] text
  - [x] files
- [ ] multi-user sharing
- [ ] drop passcode protection

## Using the Web Application

To use the web…
