---
repo: "moonbitlang/openseek"
name: "openseek"
description: "DeepSeek-backed MoonBit coding agent."
readmeQualityOk: true
url: "https://github.com/moonbitlang/openseek"
homepage: "https://openseek-api.moonbitlang.cn/"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [89]
stars: 101
forks: 17
openIssues: 38
closedIssues: 54
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2026-05-19T07:04:13Z"
lastCommitAt: "2026-10-19T09:15:06Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 32
maintainers: ["bobzhang", "tonyfettes", "Milky2018"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf5d4e24cbd1ab9fb87e5107e9ce8db7d5ccc1a20162c3995c7334532a2f4907/moonbitlang/openseek"
---

# moonbitlang/openseek

OpenSeek is a small MoonBit foundation for an OpenAI-compatible coding agent
supporting DeepSeek, Kimi, and Z.AI GLM models. The module is split into pure
data, HTTP transport, agent orchestration, and a CLI entry point so request
encoding can be tested without network access.

For a picture of how the pieces fit together — module architecture, the core
data model, and the life of one agent turn — see
[`docs/architecture.md`](https://github.com/moonbitlang/openseek/blob/HEAD/docs/architecture.md).

## Running without a checkout

Native archives for Linux x64/arm64, macOS arm64 and Windows x64 are
published independently by the **CLI release** workflow to OSS and S3.
Downloads use `https://cli.moonbitlang.com/openseek/cli/releases/v<version>/`;
the version comes from the root `moon.mod`. After publishing version 0.7.0, its files are
[Linux x64](https://cli.moonbitlang.com/openseek/cli/releases/v0.7.0/openseek-linux-x64.tar.gz),
[Linux arm64](https://cli.moonbitlang.com/openseek/cli/releases/v0.7.0/openseek-linux-arm64.tar.gz),
[macOS arm64](https://cli.moonbitlang.com/openseek/cli/releases/v0.7.0/openseek-macos-arm64.tar.gz),
[Windows…
