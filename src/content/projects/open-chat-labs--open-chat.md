---
repo: "open-chat-labs/open-chat"
name: "open-chat"
description: "This is the main repository for the OpenChat application which runs on the Internet Computer"
readmeQualityOk: true
url: "https://github.com/open-chat-labs/open-chat"
homepage: "https://oc.app"
language: "Rust"
languages: ["Rust", "Svelte", "TypeScript"]
languagePcts: [37, 32, 27]
topics: ["chat-application", "internet-computer"]
stars: 209
forks: 70
openIssues: 339
closedIssues: 687
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2020-12-18T14:10:36Z"
lastCommitAt: "2026-10-23T09:32:59Z"
lastReleaseAt: "2026-03-24T20:41:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 43
maintainers: ["julianjelfs", "hpeebles", "ivan-jukic"]
openGraphImageUrl: "https://opengraph.githubassets.com/09e065cd5b7e76ea6461fd922a333f63892991ee20796e9837fca91440eed068/open-chat-labs/open-chat"
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
