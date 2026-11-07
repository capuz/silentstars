---
repo: "bottlesdevs/next-cli"
name: "next-cli"
description: "The source code of the Next CLI app."
readmeQualityOk: true
url: "https://github.com/bottlesdevs/next-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-01-05T22:51:32Z"
lastCommitAt: "2026-11-07T09:29:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 54
maintainers: ["cyberphantom52", "edfloreshz", "mirkobrombin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8f141d77fd00b5bed649f59fa517efa8c06075ff92a0127a631036d0d74c30b/bottlesdevs/next-cli"
fundingLinks: ["GITHUB:https://github.com/bottlesdevs", "LIBERAPAY:https://liberapay.com/Bottles", "CUSTOM:https://usebottles.com/funding"]
---

# next-cli

`bottles-cli`, the command-line interface for Bottles Next. It links
[`next-core`](https://github.com/bottlesdevs/next-cli/blob/HEAD/../next-core) directly (no server/IPC involved) and drives all
bottle management from the terminal.

```
bottles-cli [--fvs2d <path>] [--component-catalog <url>] [--dependency-catalog <url>] <command>
```

## Commands

- `addons` — manage the addon/runner catalogs:
  - `addons refresh` — refresh the component/dependency catalogs.
  - `addons runners <list|download|delete>` — list, download, or delete runners (Wine/Proton builds).
  - `addons addons <list|download|delete>` — list, download, or delete dependency addons.
- `bottle create` — create a new bottle (name, storage backend, runner).
- `bottle list` — list existing bottles.
- `bottle manage <bottle> <subcommand>` — operate on a bottle:
  - `show` / `delete` / `stop` / `processes`
  - `install runner|addon` / `uninstall addon`
  - `program add|launch|kill`
  - `env list|set|unset`
  - `dll-overrides list|set|unset`
  - `snapshot create|list|restore`
  - `wrappers gamescope <show|enable|disable|configure>` / `wrappers mangohud <show|enable|disable>`
