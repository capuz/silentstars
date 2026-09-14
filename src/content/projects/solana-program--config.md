---
repo: "solana-program/config"
name: "config"
description: "Solana Config Program"
readmeQualityOk: true
url: "https://github.com/solana-program/config"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 37
forks: 18
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 12
recentReleases: 1
createdAt: "2024-03-18T16:49:42Z"
lastCommitAt: "2026-09-14T09:12:04Z"
lastReleaseAt: "2026-09-10T12:38:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 61
maintainers: ["dependabot[bot]", "lorisleiva", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b9ff056c022517babe64c767147d01c0cbc6c8a1a518b1e57eb13f616a6b041/solana-program/config"
---

# Config

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

Depending on your program's framework, this will either use Shank or Anchor to generate the IDLs.
Note…
