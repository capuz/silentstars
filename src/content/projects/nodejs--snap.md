---
repo: "nodejs/snap"
name: "snap"
description: "Node.js snap source and updater"
readmeQualityOk: true
url: "https://github.com/nodejs/snap"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 187
forks: 43
openIssues: 1
closedIssues: 59
watchers: 14
contributors: 33
recentReleases: 0
createdAt: "2020-10-15T06:56:30Z"
lastCommitAt: "2026-09-11T08:14:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 43
maintainers: ["web-flow", "rvagg"]
openGraphImageUrl: "https://opengraph.githubassets.com/96153f38211dda1fed79946712b42c7916ca825d5291ae52f1e20e705bf1e2e2/nodejs/snap"
fundingLinks: ["GITHUB:https://github.com/nodejs", "OPEN_COLLECTIVE:https://opencollective.com/nodejs"]
---

# Node.js Snap for https://snapcraft.io/

[Snaps](https://snapcraft.io/about) are:

> app packages for desktop, cloud and IoT that are easy to install, secure, cross‐platform and dependency‐free. Snaps are discoverable and installable from the Snap Store, the app store for Linux with an audience of millions.

The Snap managed from this repository is available as `node` from the Snap store and contains the Node.js runtime and [npm](https://www.npmjs.com/). Tracks before Node.js 26 also include [Yarn Classic](https://classic.yarnpkg.com/). They are automatically built and pushed for each supported release line and nightly versions straight from the `main` branch. Once initially installed, new versions of Node.js for the release line you've chosen are automatically updated to your computer within hours of their release on [nodejs.org](https://nodejs.org/).

* [Installation](#installation)
  * [Switching release lines](#switching-release-lines)
  * [Nightly ("edge") versions](#nightly-edge-versions)
* [How publishing happens](#how-publishing-happens)
  * [Snap configuration](#snap-configuration)
  * [Watching for releases](#watching-for-releases)
  * [Building Snaps](#building-snaps)…
