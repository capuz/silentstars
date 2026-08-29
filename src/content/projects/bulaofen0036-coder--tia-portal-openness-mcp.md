---
repo: "bulaofen0036-coder/TIA_Portal_Openness_MCP"
name: "TIA_Portal_Openness_MCP"
description: "Drive Siemens TIA Portal V20/V21 (STEP 7, WinCC Unified) from any MCP client — create projects, generate PLC & HMI, compile & diagnose. Prebuilt runtime, no Openness coding required."
readmeQualityOk: true
url: "https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP"
homepage: "https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP/releases/latest"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["industrial-automation", "ladder-logic", "mcp", "model-context-protocol", "openness", "plc", "s7-1200", "s7-1500", "scl", "siemens"]
stars: 195
forks: 51
openIssues: 5
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-14T02:09:06Z"
lastCommitAt: "2026-08-29T10:08:34Z"
lastReleaseAt: "2026-06-02T14:11:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 32
maintainers: ["bulaofen", "bulaofen0036-coder", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6fc3b98857c73091704b929871d8d69ff1ca9cc82f3af447fd0bb2188d5132c/bulaofen0036-coder/TIA_Portal_Openness_MCP"
---

# TIA Portal MCP Server (V20 + V21 · S7DCL · CLI · read-only online monitoring · one-click config · Doctor)

> Current version: see the Release badge below and [CHANGELOG.md](https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP/blob/HEAD/CHANGELOG.md) (this README no longer hardcodes a version).

**English** · [中文](https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP/blob/HEAD/README.zh-CN.md)

> **v2.0 — the same exe is also a declarative CLI (`tia`).** Any AI emits a
> YAML/JSON spec, any engineer runs one command (`tia gen spec.yaml`) — no MCP
> client required. Verbs: `gen` / `patch` / `compile` / `describe` / `export` /
> `import` / `prewarm` / `schema` / `version`. Exit code 0/1/2. See
> `docs/CLI_quickstart.md`. The MCP server behaviour is unchanged.

> **Free & open (MIT).** The server runs with **no license key** — there is no
> license-enforcement code at all.

Drive **Siemens TIA Portal V20 or V21** from any **MCP** client (stdio or HTTP):
create projects, add hardware, generate PLC objects (Tag / UDT / DB / SCL / LAD),
build **WinCC Unified** screens and events, compile-and-diagnose, and save —
all through natural-language tool calls. The bundle ships…
