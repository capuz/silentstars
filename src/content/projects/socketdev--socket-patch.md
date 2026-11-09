---
repo: "SocketDev/socket-patch"
name: "socket-patch"
description: "Socket patch CLI tool"
readmeQualityOk: true
url: "https://github.com/SocketDev/socket-patch"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 9
forks: 2
openIssues: 118
closedIssues: 772
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2025-11-10T17:06:39Z"
lastCommitAt: "2026-11-09T00:49:07Z"
lastReleaseAt: "2026-03-06T17:23:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 97
undervaluedScore: 72
maintainers: ["mikolalysenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2da9b6dee5a178e219975d122721bec7f71329fcaf54bcdd201ad02ba070da6/SocketDev/socket-patch"
discussionCount: 25
---

# Socket Patch

Apply security fixes to the dependency versions your project already uses,
without waiting for an upstream release or upgrading the dependency.
Socket Patch updates dependency files to use patched packages, which you install
with your normal package manager.

> This branch documents the v5 prerelease. Installation commands below select the
> latest published release, which may have different behavior. To try this branch,
> [build from source](https://github.com/SocketDev/socket-patch/blob/HEAD/docs/development.md#build). Existing users should read the
> [v5 migration guide](https://github.com/SocketDev/socket-patch/blob/HEAD/docs/migrating-to-v5.md).

## Installation

Install a standalone binary on macOS or Linux:

```sh
curl -fsSL https://install.socket.dev/patch | sh
```

The installer verifies release checksums and installs in `/usr/local/bin` or
`~/.local/bin`. See the [installer options](https://github.com/SocketDev/socket-patch/blob/HEAD/scripts/install.sh) for a custom
directory or version, and [mirror setup](https://github.com/SocketDev/socket-patch/blob/HEAD/docs/installer-hosting.md).

On Windows, extract a `socket-patch-*-pc-windows-msvc.zip` archive…
