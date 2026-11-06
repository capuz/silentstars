---
repo: "moonbitlang/openseek"
name: "openseek"
description: "DeepSeek-backed MoonBit coding agent."
readmeQualityOk: true
url: "https://github.com/moonbitlang/openseek"
homepage: "https://openseek-api.moonbitlang.cn/"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [88]
stars: 105
forks: 19
openIssues: 51
closedIssues: 67
watchers: 4
contributors: 16
recentReleases: 8
createdAt: "2026-05-19T07:04:13Z"
lastCommitAt: "2026-11-06T11:24:29Z"
lastReleaseAt: "2026-11-06T08:17:10Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["tonyfettes", "Milky2018", "kokic"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ea51719b84f2be7d8478d3b79013fbfd500577203186c84f6200bca2e594e2f/moonbitlang/openseek"
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

`openseek-app-server` serves the working-host API at `ws://127.0.0.1:<port>/host`, intended for SSH forwarding.
Stdout announces the port, instance ID and protocol version as one JSON line;
stdin EOF ends the service. The server uses the `openseek` executable beside it;
`OPENSEEK_ENGINE` can select an engine for source builds. Clients initialize
with that instance ID and protocol version before calling the host API. Browser-origin requests are
rejected. Keep the listener and SSH forward bound to loopback.

The root CLI package builds on both native and wasm, and mooncakes.io hosts a
prebuilt wasm binary for every published version.…
