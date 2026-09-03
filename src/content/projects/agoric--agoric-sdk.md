---
repo: "Agoric/agoric-sdk"
name: "agoric-sdk"
description: "monorepo for the Agoric Javascript smart contract platform"
readmeQualityOk: true
url: "https://github.com/Agoric/agoric-sdk"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 42]
stars: 357
forks: 255
openIssues: 1393
closedIssues: 3689
watchers: 23
contributors: 70
recentReleases: 0
createdAt: "2019-11-01T15:30:18Z"
lastCommitAt: "2026-09-03T08:12:58Z"
lastReleaseAt: "2023-09-06T01:07:14Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 40
maintainers: ["gibson042", "mhofman", "mergify[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ddcf312baa7e0070037abdf40a97526e08e2ffba1aaf7b8e36d8dc4ca363a6/Agoric/agoric-sdk"
discussionCount: 248
---

# Agoric Platform SDK

This repository contains most of the packages that make up the upper layers of
the Agoric platform, with [the endo repository](https://github.com/endojs/endo)
providing the lower layers. If you want to build on top of this platform, you
don't need these repositories: instead you should
[follow our instructions for getting started](https://docs.agoric.com/guides/getting-started/)
with the Agoric SDK.

But if you are improving the platform itself, these are the repositories to use.

## Prerequisites

Prerequisites are enforced in various places that should be kept synchronized
with this section (e.g., [repoconfig.sh](https://github.com/Agoric/agoric-sdk/blob/HEAD/repoconfig.sh) defines
`golang_version_check` and `nodejs_version_check` shell functions).

* Git
* Go ^1.24.1
* Node.js ^22.11 or ^24.14
  * we generally support the latest LTS release: use
    [nvm](https://github.com/nvm-sh/nvm) to keep your local system up-to-date
* Yarn (`npm install -g yarn`)
* gcc >=10, clang >=10, or another compiler with `__has_builtin()`

Any version of Yarn will do: the `.yarnrc` file should ensure that all commands
use the specific checked-in version of Yarn (stored in…
