---
repo: "gridaco/fx"
name: "fx"
description: "A workflow engine for generative asset pipelines. Plan, price, cache, and run workflows with Rust, Python, and TypeScript."
readmeQualityOk: true
url: "https://github.com/gridaco/fx"
homepage: "https://grida.co/fx"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 96
forks: 11
openIssues: 9
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2020-10-02T18:51:05Z"
lastCommitAt: "2026-10-12T11:15:56Z"
lastReleaseAt: "2026-10-12T06:24:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 40
maintainers: ["softmarshmallow"]
openGraphImageUrl: "https://opengraph.githubassets.com/d797ad7aa41e6936c001e35f00d84e0d80853dc8e69dc52755c4eda4d3f030ce/gridaco/fx"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/grida"]
---

# Grida FX

**Go with the flow.**

Reusable workflows for images, audio, and more. Connect your code and AI models with one
Grida Gateway key (or your own provider keys), and turn a one-off script into something you can
run again.

- **See the plan first.** Inspect the steps, dependencies, and estimated cost before a paid run.
- **Keep the work you already did.** Reuse matching results from the cache and resume interrupted runs.
- **Look inside a run.** Open the node canvas to explore steps, connections, and recorded artifacts.
- **Test without a bill.** Run ordinary code offline, or use [stand-ins](https://github.com/gridaco/fx/blob/HEAD/docs/guide/05-running.md#stand-ins-testing-without-a-provider)
  to answer paid calls in tests.

## Install

FX comes with the Grida CLI:

```sh
npm install -g grida
grida fx --version
```

The CLI needs Node.js 24 or later and carries the FX version it was released with, so updating
`grida` updates FX. FX runs on macOS, and on Linux (x64 and arm64) with glibc 2.28 or later; on
Windows, use WSL 2.

Write custom nodes and builders in Python with the Python SDK:

```sh
pip install grida
```

The JavaScript SDK is `@grida/fx`. To run FX without the…
