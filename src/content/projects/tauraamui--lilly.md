---
repo: "tauraamui/lilly"
name: "lilly"
description: "TUI editor and VIM/Neovim alternative"
readmeQualityOk: true
url: "https://github.com/tauraamui/lilly"
language: "V"
languages: ["V"]
languagePcts: [99]
stars: 469
forks: 14
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2023-10-06T18:55:38Z"
lastCommitAt: "2026-10-13T10:58:18Z"
lastReleaseAt: "2026-04-01T22:45:47Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 76
undervaluedScore: 32
maintainers: ["tauraamui"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c87021e36f2def7ac6e5bceeb74cb3ddbb35aecf0a111c87536607b25d75c35/tauraamui/lilly"
fundingLinks: ["GITHUB:https://github.com/tauraamui", "KO_FI:https://ko-fi.com/tauraamui"]
---

## A VIM-Like editor for your terminal (<a href="https://discord.gg/N4UG2TfDfd">chat on Discord</a>)

> **Note:** The canonical home of this project is now [git.catkin.dev/tauraamui/lilly](https://git.catkin.dev/tauraamui/lilly).
> The [GitHub repository](https://github.com/tauraamui/lilly) is a **read-only mirror** — please open issues and pull requests on Catkin.

An editor designed as a batteries included experience, eliminating the need for plugins. So, basically Helix but for VIM
motions. The end vision is a one to one replacement/equivalent functionality for all VIM features, macros, motions, and more.

## How to build (requires the V compiler https://vlang.io)

#### Install Bobatea (TUI library)
	v install

#### Build lilly by executing
	./make.vsh build

#### or run with no binary build with
	./make.vsh run-d (for dark mode)
	./make.vsh run-l (for light mode)

You can see what other tasks are available to run with `./make.vsh --tasks`

(you can compile make.vsh into a binary to make executing tasks as fast as possible, use `./make.vsh compile-make` or `v -prod -skip-running make.vsh`)

### Not convinced?

Not a problem, Neovim/VIM are fantastic existing projects and are…
