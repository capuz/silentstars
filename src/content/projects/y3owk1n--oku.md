---
repo: "y3owk1n/oku"
name: "oku"
description: "Your machine, from one file, without nix."
readmeQualityOk: true
url: "https://github.com/y3owk1n/oku"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cross-platform", "package-manager"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-20T03:31:43Z"
lastCommitAt: "2026-10-04T10:00:54Z"
lastReleaseAt: "2026-09-23T16:53:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["y3owk1n"]
openGraphImageUrl: "https://opengraph.githubassets.com/b312aa2f905037a147c1e0888312f8addd7d93d9c8dce91c404a7fc6509a49a2/y3owk1n/oku"
discussionCount: 0
---

# oku

**Your machine, from one file.**

One `oku.toml` names the tools, dotfiles, secrets and OS settings of your account. A lock pins the sha256 of every download. `oku sync` builds that machine on Linux, macOS or Windows, and `oku rollback` puts the previous one back. oku needs no registry, no language to learn and no root.

|   Linux   |   macOS   |           Windows           |             Status              |
| :-------: | :-------: | :-------------------------: | :-----------------------------: |
| Supported | Supported | Supported, no build sandbox | Alpha (Daily driving by myself) |

[Install](#install) · [What it does](#what-it-does) · [Publish a package](#publish-a-package) · [Compare](#how-oku-compares) · [Docs](https://github.com/y3owk1n/oku/blob/HEAD/docs/README.md)

---

```toml
# oku.toml
[packages]
ripgrep = "github:BurntSushi/ripgrep"                        # a repo with no manifest at all
obsidian = { ref = "cask:obsidian", when = { os = "darwin" } }   # a Homebrew cask, without brew
jq = "aqua:jqlang/jq"                                        # the aqua registry, Scoop and winget too
prettier = { ref = "npm:prettier", version = "^3" }          # npm, PyPI, Go…
