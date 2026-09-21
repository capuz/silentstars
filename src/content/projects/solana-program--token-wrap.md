---
repo: "solana-program/token-wrap"
name: "token-wrap"
description: "The SPL Token Wrap program and its clients"
readmeQualityOk: true
url: "https://github.com/solana-program/token-wrap"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 26]
stars: 18
forks: 16
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2025-01-24T23:46:36Z"
lastCommitAt: "2026-09-21T09:13:05Z"
lastReleaseAt: "2026-06-17T16:22:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 76
maintainers: ["dependabot[bot]", "joncinque", "clankmaxxing-clod"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8a94742975b2e3744c7734259727c857bcedbcab49863332a762b2fa1a2fa0c/solana-program/token-wrap"
---

# SPL Token Wrap Program

This program enables the creation of "wrapped" versions of existing SPL tokens, facilitating interoperability between
different token standards. If you are building an app with a mint/token and find yourself wishing you could take
advantage of some of the latest features of a specific token program, this might be for you!

- **Program ID:** `TwRapQCDhWkZRrDaHfZGuHxkZ91gHDRkyuzNqeU5MgR`
- **IDL:** [`./idl.json`](https://github.com/solana-program/token-wrap/blob/HEAD/idl.json)
- **Docs & SDK Guide:** https://www.solana-program.com/docs/token-wrap

## Features

* **Bidirectional Wrapping:** Convert tokens between SPL Token and SPL Token-2022 standards in either direction,
  including conversions between different SPL Token-2022 mints.
* **Extensible Mint Creation:** The `CreateMint` instruction is designed to be extensible through the `MintCustomizer`
  trait. By forking the program and implementing this trait, developers can add custom logic to:
    * Include any SPL Token-2022 extensions on the new wrapped mint.
    * Modify default properties like the `freeze_authority` and `decimals`.
* **Confidential Transfers by Default:** All wrapped tokens created…
