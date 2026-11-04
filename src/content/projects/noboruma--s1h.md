---
repo: "noboruma/s1h"
name: "s1h"
description: "ssh + scp + passwords manager"
readmeQualityOk: true
url: "https://github.com/noboruma/s1h"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-31T07:17:40Z"
lastCommitAt: "2026-11-04T08:03:13Z"
lastReleaseAt: "2025-05-09T01:11:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["noboruma"]
openGraphImageUrl: "https://opengraph.githubassets.com/e418301ab95713a186640fc16d464663c0e8054ce64e03503d043b8e33a4d11d/noboruma/s1h"
---

# s1h: ssh + scp + passwords manager unified in one simple CLI

`s1h` is a simple CLI/TUI tool inspired by [K9s](https://github.com/derailed/k9s).

`s1h` allows you to quickly view, connect, transfer files & execute commands into configured `ssh` host(s). Either via passwords stored & encrypted locally, or by private keys.

## Installation

From go:
```sh
# Install from Go directly:
go install github.com/noboruma/s1h/cmd/s1h@latest

```
Or from the repository:
```
# Or build from the repository source
git clone https://github.com/noboruma/s1h
cd s1h
go install ./...
```

Or download a prebuilt binary from the [latest release](https://github.com/noboruma/s1h/releases/latest), available for Linux and macOS on amd64 and arm64:

```sh
# pick one of: linux-amd64, linux-arm64, darwin-amd64, darwin-arm64
target=linux-amd64
curl -LO "https://github.com/noboruma/s1h/releases/latest/download/s1h-${target}"
curl -LO "https://github.com/noboruma/s1h/releases/latest/download/s1h-${target}.sha256"
sha256sum -c "s1h-${target}.sha256"   # on macOS: shasum -a 256 -c
chmod +x "s1h-${target}" && mv "s1h-${target}" ~/.local/bin/s1h
```

The macOS binaries are not signed: if macOS blocks a binary…
