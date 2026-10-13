---
repo: "open-chat-labs/open-chat"
name: "open-chat"
description: "This is the main repository for the OpenChat application which runs on the Internet Computer"
readmeQualityOk: true
url: "https://github.com/open-chat-labs/open-chat"
homepage: "https://oc.app"
language: "Rust"
languages: ["Rust", "Svelte", "TypeScript"]
languagePcts: [44, 28, 24]
topics: ["chat-application", "internet-computer"]
stars: 208
forks: 71
openIssues: 309
closedIssues: 675
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2020-12-18T14:10:36Z"
lastCommitAt: "2026-10-13T10:57:20Z"
lastReleaseAt: "2026-03-24T20:41:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 43
maintainers: ["hpeebles", "julianjelfs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7153b1d7ced6a6f630176ba381d40841ca9fbf567e20bad6945c0d6f9fc1ac13/open-chat-labs/open-chat"
---

# OpenChat

https://oc.app

OpenChat is a fully featured chat application running end-to-end on the Internet Computer blockchain.

## Prerequisites

#### DFX 0.31.0-beta.1

To install, run `DFX_VERSION=0.31.0-beta.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`

#### Rust

To install, run `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

#### NPM

Download from https://nodejs.org/en/download

## Testing locally

Start DFX using `dfx start --clean`

To install all the necessary canisters (OpenChat and NNS) run `./scripts/deploy-local.sh`

To run the website run `npm --prefix frontend run dev`. This process doesn't exit but watches changes to the website and rebuilds it using `vite` for fast development iteration.

Open the website at `http://localhost:5001/`.

To upgrade a canister run `./scripts/upgrade-canister-local.sh <DFX_IDENTITY_NAME> <CANISTER_NAME> <VERSION>` (eg. `./scripts/upgrade-canister-local.sh default group 1.0.0`)

To start again with a fresh install, stop DFX, then run `rm -rf .dfx`, then start from the top of these instructions again.

To run more than one checkout at once, give each its own ports: start DFX with `dfx start --clean…
