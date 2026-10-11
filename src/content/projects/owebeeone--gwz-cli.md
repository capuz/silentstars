---
repo: "owebeeone/gwz-cli"
name: "gwz-cli"
description: "Coordinate multiple Git repositories as one reproducible workspace"
readmeQualityOk: true
url: "https://github.com/owebeeone/gwz-cli"
homepage: "https://owebeeone.github.io/gwz-cli/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-15T23:57:36Z"
lastCommitAt: "2026-10-11T07:28:40Z"
lastReleaseAt: "2026-07-10T22:19:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["gripd"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1a68ea6ccbafcf57bae3a16cb65fefc84ff6ecfce5d86d52602da4046e1531b/owebeeone/gwz-cli"
---

# gwz

`gwz` is the primary command-line interface for GWZ (Git Workspace Zone). It
coordinates multiple ordinary Git repositories as one reproducible workspace:
the root records composition and exact state while every member remains a
normal Git repository.

Install this repository's CLI for normal terminal use. It is the primary and
most thoroughly tested GWZ command implementation; applications and services
can instead embed the message-driven [`gwz-core`](https://github.com/owebeeone/gwz-core).

## Install And Start

Install the latest release on macOS or Linux:

```sh
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/owebeeone/gwz-cli/releases/latest/download/gwz-installer.sh | sh
```

Install the latest release on Windows PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm https://github.com/owebeeone/gwz-cli/releases/latest/download/gwz-installer.ps1)"
```

From 1.0.12 you can also build and install it from crates.io:

```sh
cargo install gwz
```

That compiles from source, so it needs Rust 1.95 or newer, a C compiler and, on macOS and
Linux, the OpenSSL development files (Homebrew `openssl@3`, or `libssl-dev` and…
