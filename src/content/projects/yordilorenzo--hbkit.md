---
repo: "YordiLorenzo/hbkit"
name: "hbkit"
description: "Recover files from Synology Hyper Backup (.hbk) archives without Synology software — CLI + TUI, checksum-verified, plus a full format spec"
readmeQualityOk: true
url: "https://github.com/YordiLorenzo/hbkit"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["backup", "data-recovery", "dsm", "file-format", "hyper-backup", "nas", "python", "reverse-engineering", "synology", "tui"]
stars: 63
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-04T13:05:53Z"
lastCommitAt: "2026-09-08T08:16:22Z"
lastReleaseAt: "2026-09-02T06:52:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 41
maintainers: ["YordiDK", "arjungopisetty", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/71b500149321c9b8efcc87e93d8762fb36586074a5434934debd0bbbeeb33a9b/YordiLorenzo/hbkit"
---

# hbkit

Recover files from **Synology Hyper Backup (`.hbk`)** archives without any Synology software.

Point it at a backup on a local disk, an external drive, or a network mount, browse it as
a tree, and pull out what you want. Works headless on Linux and macOS, including Apple Silicon, where Synology's
own Hyper Backup Explorer is awkward or unavailable.

```sh
brew install YordiLorenzo/tap/hbkit     # macOS / Linux, pulls in liblz4 for you

hbk /Volumes/Backup doctor              # can this archive be recovered?
hbk /Volumes/Backup doctor -p secret    # encrypted? add a password
hbk-tui /Volumes/Backup                 # browse and select interactively
hbk /Volumes/Backup get "/Photos/*" ~/restore
```

### Other ways to install

```sh
pip install hbkit          # any platform; also needs liblz4 (see below)
pipx install hbkit         # same, kept in its own environment
```

Arch users can build from [`packaging/aur/PKGBUILD`](https://github.com/YordiLorenzo/hbkit/blob/HEAD/packaging/aur/PKGBUILD); a nixpkgs
derivation lives in [`packaging/nix/package.nix`](https://github.com/YordiLorenzo/hbkit/blob/HEAD/packaging/nix/package.nix).

`liblz4` is a runtime requirement — chunks are…
