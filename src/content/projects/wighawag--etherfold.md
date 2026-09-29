---
repo: "wighawag/etherfold"
name: "etherfold"
description: "A modular indexer system for ethereum and other blockchain following the same RPC standard."
readmeQualityOk: true
url: "https://github.com/wighawag/etherfold"
homepage: "https://wighawag.github.io/etherfold/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["browser", "dweb", "ethereum", "indexer", "web3"]
stars: 84
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2022-09-08T20:17:00Z"
lastCommitAt: "2026-09-29T10:04:08Z"
lastReleaseAt: "2026-08-26T11:56:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["wighawag", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/534379153/b89f6414-8345-443b-812c-b23a4b2e73d4"
fundingLinks: ["GITHUB:https://github.com/wighawag"]
---

A modular indexer system for [ethereum](https://ethereum.org) and other blockchain following the same [RPC standard](https://ethereum.org/en/developers/docs/apis/json-rpc/).

Git Repo: https://github.com/wighawag/etherfold

You can find some demoes in the <a href="https://wighawag.github.io/etherfold/examples/#home" target="_blank">examples folder</a>

And here is the [Documentation Website](https://wighawag.github.io/etherfold/)

## See it index, in one command

```sh
pnpm --filter event-processor-nfts browser
```

Opens a tab that indexes an ERC-721 collection off a real chain, with no server and no database to provision: one processor, its state in IndexedDB, and a reload that CONTINUES from its cursor instead of starting again. [`examples/event-processor-nfts`](https://github.com/wighawag/etherfold/blob/main/examples/event-processor-nfts/README.md) says what to expect and how to swap the storage backend in one line.

The same processor file, on a server, into SQLite — not a port of it, the file itself:

```sh
pnpm --filter event-processor-nfts build
NFT_CONTRACT=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d NFT_START_BLOCK=21000000 \
  pnpm --filter event-processor-nfts build:db…
