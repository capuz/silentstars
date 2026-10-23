---
repo: "cognitedata/reveal"
name: "reveal"
description: "Cognite Reveal 3D viewer"
readmeQualityOk: true
url: "https://github.com/cognitedata/reveal"
homepage: "https://cognitedata.github.io/reveal"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-low-risk"]
stars: 100
forks: 23
openIssues: 3
closedIssues: 63
watchers: 66
contributors: 45
recentReleases: 0
createdAt: "2019-08-29T16:08:04Z"
lastCommitAt: "2026-10-23T12:04:48Z"
lastReleaseAt: "2021-04-09T14:03:19Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 46
maintainers: ["renovate[bot]", "pramod-cog", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4f00ab5f957b898dbf6c15b8d628531bc2b3779a1087a527b19d9cba0ce33fa/cognitedata/reveal"
discussionCount: 1
---

# Reveal 3D viewer and libraries

)](https://github.com/cognitedata/reveal/actions/workflows/ci.yml)

Documentation with interactive examples for the latest version is available at [https://cognitedata.github.io/reveal/docs/](https://cognitedata.github.io/reveal/docs/)

---

Reveal viewer is a highly performant 3d-viewer for the Web written in a combination of TypeScript and Rust.

This repository contains the source code for the new version of the Cognite Reveal 3D viewer,
including its file loading libraries.

All information below is for developers.

## Getting started

Install [Node](https://nodejs.org/en/download/) and [Rust](https://doc.rust-lang.org/cargo/getting-started/installation.html).

To test the viewer, you need to build the viewer and then start the examples.

```
cd viewer
pnpm && pnpm run build
cd ../examples
yarn && yarn run start
```

If you now navigate to [localhost:3549](https://localhost:3549), the browser should show a simple 3D model with a UI.

To show a model from your own CDF project, you must first configure Reveal to use your CDF credentials. Follows the steps in the section [Credentials Environment](#Credentials-Environment).

change the URL to…
