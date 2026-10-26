---
repo: "zer0ken/xmux"
name: "xmux"
description: "A cross-machine, cross-mux session switcher"
readmeQualityOk: true
url: "https://github.com/zer0ken/xmux"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 16
forks: 1
openIssues: 11
closedIssues: 387
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-12T09:44:36Z"
lastCommitAt: "2026-10-26T09:17:28Z"
lastReleaseAt: "2026-08-24T00:58:15Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 53
maintainers: ["zer0ken", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9600d6cd58bd1780515195a10e7a765bbf41ef6751059d80d33ad8912b358956/zer0ken/xmux"
---

# xmux

English · [한국어](https://github.com/zer0ken/xmux/blob/HEAD/README.ko.md)

*A cross-machine, cross-mux session switcher.*

**Open a session from the start screen**

**Switch sessions**

**Walk up to the host and the machine**

**Log in to a password machine**

**Resize the nav**

**Place the nav**

**Auto-hide the nav**

## What xmux is

xmux owns the terminal it is launched in and splits it in two. The **nav** holds a
card for every session on this machine, on its WSL distributions, and on every ssh
host it reaches, and the **terminal view** shows the selected session through a
live mux client. Hosts come from `~/.ssh/config` and from the machines this one
already reaches, and each host's mux is detected from what it runs.

xmux works over ssh and the mux each host already runs, so it is installed only on
the machine it is used from. It is not an alternative to tmux: it makes reaching
tmux sessions simpler.

## Install

macOS, Linux, WSL, Android Termux:

```sh
curl -fsSL https://github.com/zer0ken/xmux/releases/latest/download/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://github.com/zer0ken/xmux/releases/latest/download/install.ps1 | iex
```

Windows…
