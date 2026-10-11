---
repo: "pkcprotocol/pkc-js"
name: "pkc-js"
description: "A Javascript API to build p2p social applications using PKC protocol"
readmeQualityOk: true
url: "https://github.com/pkcprotocol/pkc-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["content-sharing", "ipfs", "javascript", "nodejs", "typescript", "decentralized-p2p", "distributed", "p2p", "peer-to-peer", "pkc"]
stars: 73
forks: 10
openIssues: 62
closedIssues: 180
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2022-01-18T23:40:42Z"
lastCommitAt: "2026-10-11T10:16:03Z"
lastReleaseAt: "2026-04-19T01:57:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Rinse12", "tomcasaburi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/449483022/d736b18e-0a9e-4bc7-8716-9ca9c66c45dc"
---

*Telegram group for this repo https://t.me/pkc_js*

`pkc-js` is the TypeScript SDK for PKC (Public Key Communities), a serverless, decentralized social protocol built on IPFS, IPNS, and libp2p pubsub. It powers all PKC clients: CLI, Electron desktop, and web.

### Glossary:

- CID: https://docs.ipfs.io/concepts/content-addressing/
- IPNS: https://docs.ipfs.io/concepts/ipns/#example-ipns-setup-with-cli
- IPNS name: hash of a public key, the private key is used by community owners for signing IPNS records, and by authors for signing posts and comments
- Pubsub topic: the string to publish/subscribe to in the pubsub https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/PUBSUB.md#ipfspubsubsubscribetopic-handler-options and https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.0.md#topic-membership
- IPNS record: https://github.com/ipfs/specs/blob/master/IPNS.md#ipns-record
- IPNS signature: https://github.com/ipfs/notes/issues/249
- PKC signature types: https://github.com/pkcprotocol/pkc-js/blob/master/docs/signatures.md
- PKC encryption types: https://github.com/pkcprotocol/pkc-js/blob/master/docs/encryption.md

Note: IPFS files are immutable, fetched by…
