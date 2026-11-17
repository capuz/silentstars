---
repo: "finos/FDC3-Sail"
name: "FDC3-Sail"
description: "Open implementation of the FDC3 standard"
readmeQualityOk: true
url: "https://github.com/finos/FDC3-Sail"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["fdc3"]
stars: 53
forks: 42
openIssues: 39
closedIssues: 213
watchers: 8
contributors: 24
recentReleases: 1
createdAt: "2022-02-26T12:55:59Z"
lastCommitAt: "2026-11-17T14:36:03Z"
lastReleaseAt: "2026-10-19T12:58:47Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 60
maintainers: ["dependabot[bot]", "SeeWhatsOn", "robmoffat"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba53aaa7648850498fa50adc31d19d456a3ec9f30b5fa11e39e691f8426be55/finos/FDC3-Sail"
discussionCount: 0
---

## What is FDC3 Sail?

 - If you are new to FDC3, start with the [FDC3 website](https://fdc3.finos.org).
 - If you want to try FDC3 Sail in your browser, [start here](https://sail.fdc3.finos.org).

FDC3 Sail is an open source implementation of the [FDC3](https://fdc3.finos.org) interoperability standard. The supported product path is a **browser-resident Desktop Agent**: `@finos/sail-browser-agent` owns WCP and `MessagePort` connections in the page, and hosts `@finos/sail-headless-agent` for FDC3 2.2 and 3.0 DACP behavior. Shells and `@finos/sail-platform` compose that agent into example workspaces.

For package ownership, entry points, and what's implemented vs. planned, see the [Architecture Overview](https://fdc3-sail.finos.org/docs/architecture/overview); this README does not repeat it.

```mermaid
graph BT
  Engine["@finos/sail-headless-agent"]
  Env["@finos/sail-env"]
  Theme["@finos/sail-theme"]
  Platform["@finos/sail-platform"]
  DA["@finos/sail-browser-agent"]
  V2["@finos/fdc3-sail-web"]
  Harness["@finos/sail-conformance-harness"]
  One["@finos/sail-one"]
  Finance["@finos/sail-finance"]

  DA --> Engine
  V2 --> Engine
  V2 --> Env
  Harness --> DA
  Harness --> Env…
