---
repo: "adonm/zuko"
name: "zuko"
description: "Remote PTYs over Iroh. No open ports. Linux/macOS host daemon, Rust CLI client, and iOS/iPadOS client."
readmeQualityOk: true
url: "https://github.com/adonm/zuko"
homepage: "http://zuko.adonm.dev/"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [42, 34]
topics: ["cli", "iroh", "remote-access", "ssh", "terminal"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T23:46:51Z"
lastCommitAt: "2026-09-03T08:13:14Z"
lastReleaseAt: "2026-07-11T12:21:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["adonm"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea9da761120f82017dc8763d15f3c670a9d5c6424a986cafbba40c196bb79205/adonm/zuko"
---

</p>

<h1 align="center">zuko</h1>

**Private remote shells for machines you own—without opening inbound ports or
operating a VPN.** Pair once with a short code, then reconnect by name from a
terminal.

zuko runs a real PTY over [Iroh](https://www.iroh.computer/), which provides
dial-by-key reachability, NAT traversal, relay fallback, and end-to-end
encryption. The supported core is deliberately small: a Linux/macOS host, the
Rust CLI, explicit device authorization, and short reconnects.

## Quick start

Install the CLI on a Linux or macOS host:

```sh
curl -fsSL https://zuko.adonm.dev/install.sh | sh
# Relaunch your shell here if the installer asks.
zuko install
```

Pair from another machine with the CLI installed:

```sh
# host: prints a one-time two-word code
zuko share

# client: claims, saves, and connects
zuko iridescent-hilton

# later
zuko home
```

The installer bootstraps and activates mise when needed, then installs Zuko as a
mise-managed global tool. Relaunch your shell first if it asks. See
[Getting started](https://github.com/adonm/zuko/blob/HEAD/docs/getting-started.md) for mise, version selection, service
logs, and first connection. Windows hosts can use the…
