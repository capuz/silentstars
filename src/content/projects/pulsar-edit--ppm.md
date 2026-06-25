---
repo: "pulsar-edit/ppm"
name: "ppm"
description: "Pulsar Package Manager"
url: "https://github.com/pulsar-edit/ppm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["pulsar-edit"]
stars: 39
forks: 15
openIssues: 18
closedIssues: 9
watchers: 7
contributors: 68
recentReleases: 0
createdAt: "2022-07-16T03:01:34Z"
lastCommitAt: "2026-06-25T01:39:18Z"
status: "thriving"
tags: ["funded"]
healthScore: 74
undervaluedScore: 39
maintainers: ["idleberg", "confused-Techie", "savetheclocktower"]
openGraphImageUrl: "https://opengraph.githubassets.com/453795405a2c448b089cf0da7faeb591ec714187603c72525ee308c2381a65da/pulsar-edit/ppm"
fundingLinks: ["GITHUB:https://github.com/pulsar-edit", "OPEN_COLLECTIVE:https://opencollective.com/pulsar-edit"]
---

# ppm - Pulsar Package Manager

Discover and install Pulsar packages powered by [pulsar-edit.dev](https://web.pulsar-edit.dev).

ppm is bundled with the `pulsar` binaries so any ppm command can also be run with `pulsar -p` or `pulsar --package`.

You can configure ppm by using the `ppm config` command line option (recommended) or by manually editing the `~/.pulsar/.apmrc` file as per the [npm config](https://docs.npmjs.com/misc/config).

## Relation to npm

ppm bundles [npm](https://github.com/npm/npm) with it and spawns `npm` processes to install Pulsar packages. The major difference is that `ppm` sets multiple command line arguments to `npm` to ensure that native modules are built against Chromium's v8 headers instead of node's v8 headers.

The other major difference is that Pulsar packages are installed to `~/.pulsar/packages` instead of a local `node_modules` folder and Pulsar packages are published to and installed from GitHub repositories instead of [npmjs.com](https://www.npmjs.com/)

Therefore you can think of `ppm` as a simple `npm` wrapper that builds on top of the many strengths of `npm` but is customized and optimized to be used for Pulsar packages.

## Installing…
