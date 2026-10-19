---
repo: "solana-program/address-lookup-table"
name: "address-lookup-table"
description: "The Solana Address Lookup Table program and its clients"
readmeQualityOk: true
url: "https://github.com/solana-program/address-lookup-table"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 30]
stars: 33
forks: 18
openIssues: 1
closedIssues: 14
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2024-03-01T16:37:02Z"
lastCommitAt: "2026-10-19T09:15:01Z"
lastReleaseAt: "2025-09-02T16:15:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 63
maintainers: ["dependabot[bot]", "lorisleiva", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/solana-program/address-lookup-table"
---

# Address Lookup Table

This template should help get you started developing Solana programs. Let's walk through this generated program repository and see what's included.

## Project setup

The first thing you'll want to do is install NPM dependencies which will allow you to access all the scripts and tools provided by this template.

```sh
pnpm install
```

## Managing programs

You'll notice a `program` folder in the root of this repository. This is where your generated Solana program is located.

Whilst only one program gets generated, note that you can have as many programs as you like in this repository.
Whenever you add a new program folder to this repository, remember to add it to the `members` array of your root `Cargo.toml` file.
That way, your programs will be recognized by the following scripts that allow you to build, test, format and lint your programs respectively.

```sh
pnpm programs:build
pnpm programs:test
pnpm programs:format
pnpm programs:lint
```

## Generating IDLs

You may use the following command to generate the IDLs for your programs.

```sh
pnpm generate:idls
```

Depending on your program's framework, this will either use Shank or Anchor to generate…
