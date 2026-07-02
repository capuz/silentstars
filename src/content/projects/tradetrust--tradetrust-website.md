---
repo: "TradeTrust/tradetrust-website"
name: "tradetrust-website"
description: "TradeTrust Reference Implementation"
url: "https://github.com/TradeTrust/tradetrust-website"
homepage: "https://ref.tradetrust.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 18
forks: 46
openIssues: 3
closedIssues: 48
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2019-07-29T01:57:07Z"
lastCommitAt: "2026-07-02T06:33:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 56
maintainers: ["manishdex25", "rongquan1", "isaackps"]
openGraphImageUrl: "https://opengraph.githubassets.com/50c095e9775ef09fcd44216943a006a61115fbf9e8c75b111314df5e4922cc80/TradeTrust/tradetrust-website"
discussionCount: 4
---

# TradeTrust Web UI

See also:

- [tradetrust-documentation](https://docs.tradetrust.io)
- [document-store](https://github.com/Open-Attestation/document-store)
- [open-attestation-cli](https://github.com/Open-Attestation/open-attestation-cli)

## Browser Support

- MetaMask browser extension is required for wallet functionality
- Supported browsers: Chrome, Brave, Edge, Opera, and Firefox

## Development

We develop primarily on a OS X / Linux environment so please lodge an issue if you are using Windows and find that you cannot successfully set up a local instance of this software.

### OS X / Linux

```bash
npm install
npm run dev
```

### Windows

For Windows you need to set up the toolchain for node-gyp before installing this repository, follow the instructions in https://github.com/nodejs/node-gyp#on-windows.

```bash
npm install
npm run dev
```

### Environmental Variables

`NET` is used for setting the default network, setting it to `mainnet` uses the public Ethereum network. If it is not set it defaults to Sepolia testnet.
It can also take any network names that Ethers.JS supports, such as `sepolia`, `amoy`, etc.
However do note that there are only drag & drop demo files…
