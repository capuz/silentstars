---
repo: "xtermium/xtermium"
name: "xtermium"
description: "XTermium is a modern, cross-platform terminal and session manager that unifies remote connections, web and file browsing. AI-powered. Built with Rust and Svelte."
readmeQualityOk: true
url: "https://github.com/xtermium/xtermium"
homepage: "https://xtermium.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai-agents", "bmc", "browser", "ikvm", "mcp", "rdp", "session-management", "sftp", "ssh", "terminal"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-31T22:05:47Z"
lastCommitAt: "2026-11-03T12:47:35Z"
lastReleaseAt: "2026-11-02T23:28:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 36
maintainers: ["xtonousou"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1441291215/155b5a47-af6c-4182-be96-0cc1c350e4b7"
---

- **One window, not ten programs.** SSH here, RDP there, a VNC viewer, telnet for the switch, a browser for the console page: xtermium opens them all as tabs and split panes, and types into many at once.
- **Your logins stay locked.** Everything on disk is encrypted with a key in your OS keychain. A recovery passphrase brings it back on a new computer.
- **An agent can use it too.** AI assistants and scripts open sessions, run commands and read the output through the same tools you use, without ever seeing a password.

## Get it

**Windows** (x64). One command fetches the latest release and installs it:

```powershell
irm https://xtermium.com/install.ps1 | iex
```

Or with [Scoop](https://scoop.sh), which keeps your data in Scoop's `persist` folder across updates:

```powershell
scoop bucket add xtermium https://github.com/xtermium/scoop
scoop install xtermium/xtermium
```

Or download from the [latest release](https://github.com/xtermium/xtermium/releases/latest): the installer (`.exe`), the `.msi` for managed deployment, or the portable `.zip` that needs no install.

**Linux** (x64). The script installs the `.deb` where apt is, the `.rpm` where dnf, yum or zypper is, and the…
