---
repo: "enitrat/skill-issue"
name: "skill-issue"
description: "Your Claude sucks? Probably a skill issue"
readmeQualityOk: true
url: "https://github.com/enitrat/skill-issue"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 24]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-16T21:30:49Z"
lastCommitAt: "2026-11-01T10:45:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 45
maintainers: ["enitrat"]
openGraphImageUrl: "https://opengraph.githubassets.com/f690241464d8030474ef53067beb9fee5068155c206e1a09b12add43fb9fa64b/enitrat/skill-issue"
---

# skill-issue

Personal automation repo for machine setup, dotfiles, agent skills, subagents,
rules, and small local tools.

## Quick Start

Machines are configured by the Nix flake in this repo: [`flake.nix`](https://github.com/enitrat/skill-issue/blob/HEAD/flake.nix)
and [`nix/`](https://github.com/enitrat/skill-issue/blob/HEAD/nix/). Two kinds of machine, one shared definition:

| Machine | Output | First setup | Later changes |
| - | - | - | - |
| macOS laptop (client) | `darwinConfigurations.mac` | see [Fresh Mac](#fresh-mac) | `rebuild` (alias for `sudo darwin-rebuild switch --flake …#mac`) |
| Linux dev box (Boat sandbox, Ubuntu) | `homeConfigurations."user@<arch>-linux"` | `curl -fsSL https://raw.githubusercontent.com/enitrat/skill-issue/main/bootstrap/linux.sh \| bash` | `rebuild` (alias for `nh home switch ~/skill-issue -c user@<arch>-linux`) |

Check a machine: `~/skill-issue/bootstrap/check.sh` (on the Mac, use the checkout
path).

## Install Skills

Install all skills declared by this repo:

```bash
make skill-install
```

Useful commands:

```bash
make skill-update
make skill-list
```

Personal skills live under `skills/<name>/`. Third-party skills are downloaded…
