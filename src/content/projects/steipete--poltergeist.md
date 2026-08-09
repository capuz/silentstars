---
repo: "steipete/poltergeist"
name: "poltergeist"
description: "The ghost that keeps your builds fresh - Universal hot reload, file watcher and build automation for any language."
readmeQualityOk: true
url: "https://github.com/steipete/poltergeist"
homepage: "http://polter.build"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["automation", "build", "filewatcher"]
stars: 434
forks: 40
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-29T20:36:49Z"
lastCommitAt: "2026-08-09T04:46:22Z"
lastReleaseAt: "2025-08-09T04:53:37Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 37
maintainers: ["dependabot[bot]", "steipete", "devYRPauli"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d7c0d53c11a484072e10604530e234afda313edc15b91d3b0d7337247dec275/steipete/poltergeist"
---

# Poltergeist 👻 — The ghost that keeps your builds fresh

</p>

Poltergeist watches a project, rebuilds affected targets after source changes, and records whether each artifact is fresh. It is for developers and coding agents that need one build loop across native apps, command-line tools, tests, containers, and mixed-language workspaces.

```sh
poltergeist haunt
polter my-app
```

The daemon handles builds in the background; `polter` waits for a successful build before it runs an executable target.

## Install

### Homebrew

On macOS, the standalone build needs neither Node.js nor a separate Watchman install:

```sh
brew install steipete/tap/poltergeist
```

### npm

On macOS, Linux, or Windows, install the package with Node.js 24 or newer:

```sh
npm install --global @steipete/poltergeist
```

The npm package also requires [Watchman](https://facebook.github.io/watchman/):

- macOS: `brew install watchman`
- Linux: follow the [Watchman install guide](https://facebook.github.io/watchman/docs/install#linux)
- Windows: use the [Watchman Windows instructions](https://facebook.github.io/watchman/docs/install#windows)

Check both tools before continuing:

```sh
poltergeist --version…
