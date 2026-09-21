---
repo: "radicle-dev/radicle-desktop"
name: "radicle-desktop"
description: "Radicle desktop app (mirror)"
readmeQualityOk: true
url: "https://github.com/radicle-dev/radicle-desktop"
homepage: "https://radicle.network/nodes/iris.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury"
language: "Svelte"
languages: ["Svelte"]
languagePcts: [60]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2026-03-16T22:41:59Z"
lastCommitAt: "2026-09-21T09:01:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["rudolfs", "brandonhaslegs", "Skyb0rg007"]
openGraphImageUrl: "https://opengraph.githubassets.com/49cf7385a91c881976932d6a2b0629c3fa7f5b07d97688a5550cd891840d2b96/radicle-dev/radicle-desktop"
---

# Radicle Desktop

This desktop application lets you interact with [Radicle][rad], a peer-to-peer code collaboration and publishing stack.

## Installation

See [radicle.dev/desktop#install](https://radicle.dev/desktop#install).

### From source

**Prerequisites:**

- [Node.js][nod] (24 or higher) and [npm][npm]
- [Rust][rus] toolchain (1.77 or higher)
- [Tauri system dependencies][tau]

On Windows, NPM's script shell must be set to a POSIX compatible shell such as
[Git Bash][gfw]:

```
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```

Run the following commands to build the desktop app locally:

```
git clone https://seed.radicle.dev/z4D5UCArafTzTQpDZNQRuqswh3ury.git radicle-desktop
cd radicle-desktop
npm install
npm run tauri build
```

Then run one of the builds that the script outputs at the end.

## Development

To start the app in development mode with hot reload:

```
npm run dev
```

## Releasing

Releases are driven by an interactive, phased script. Start one with:

```
scripts/release --phase prep --version X.Y.Z
```

Each phase does its mechanical work, then prints the manual tasks for its gate
and the exact flag to resume with. List the phases…
