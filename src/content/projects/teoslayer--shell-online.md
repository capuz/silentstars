---
repo: "TeoSlayer/shell.online"
name: "shell.online"
description: "A live browser link for any terminal process. Developed by Pilot Protocol."
readmeQualityOk: true
url: "https://github.com/TeoSlayer/shell.online"
homepage: "https://shell.online"
language: "TypeScript"
languages: ["TypeScript", "CSS", "Go"]
languagePcts: [48, 25, 20]
topics: ["cli", "cloudflare-workers", "collaboration", "remote-access", "terminal", "tui", "xterm", "pilot-protocol"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-22T12:54:20Z"
lastCommitAt: "2026-08-31T09:55:55Z"
lastReleaseAt: "2026-08-31T09:55:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 30
maintainers: ["teovl", "TeoSlayer"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a2927ba9334cb906e17658ab4a70a1a295fdd68289317ef66f701172d051bfe/TeoSlayer/shell.online"
---

# shell.online

shell.online is developed by [Pilot Protocol](https://pilotprotocol.network/), open-source infrastructure for connected software agents. Start with the [knowledge base](https://shell.online/docs/) for the guided product, terminal, reliability, and trust documentation.

Turn a terminal command into an interactive or read-only browser link. The command and PTY stay on your machine; Cloudflare only relays terminal input and output while the session is active.

## Install

Homebrew is not required. The verified installer supports macOS and Linux on arm64 and amd64:

```sh
curl -fsSL https://shell.online/install | sh
shell claude
```

The installer uses `/usr/local/bin` when writable, `$XDG_BIN_HOME` when set, and otherwise `~/.local/bin`. It detects Rosetta, verifies the binary checksum before writing it, never invokes `sudo`, and never silently edits shell configuration. If the destination is not on `PATH` or another `shell` command shadows it, the installer prints specific repair instructions. Set `SHELL_ONLINE_INSTALL_DIR` to choose an absolute writable destination.

Homebrew users can tap this repository directly once, then use the short formula name:

```sh
brew…
