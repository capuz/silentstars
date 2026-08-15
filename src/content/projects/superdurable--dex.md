---
repo: "superdurable/dex"
name: "dex"
description: "Durable Execution (D-EX), Redefined. Dead Simple, More Power."
readmeQualityOk: true
url: "https://github.com/superdurable/dex"
language: "Go"
languages: ["Go"]
languagePcts: [44]
stars: 34
forks: 1
openIssues: 1
closedIssues: 38
watchers: 2
contributors: 30
recentReleases: 10
createdAt: "2023-09-07T16:37:07Z"
lastCommitAt: "2026-08-15T04:03:26Z"
lastReleaseAt: "2026-08-07T19:25:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["longquanzheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/58c35626f26fa4d421ee6aac3a1a1add4454650507dda3e4b1290ebc5d92483b/superdurable/dex"
---

# Dex - Durable Execution, Re-defined.

**Dead Simple. More Power.**

Traditional databases persist only data. Durable Execution persists both data and actions. On top of that, Super Durable synchronizes persisted data with your existing databases and data storage—unifying your persistence architecture.

## Quick start

```bash
brew install superdurable/tap/dexcli
dexcli dev --open
```

Open Dex Web at [http://127.0.0.1:8802](http://127.0.0.1:8802). This starts
the complete local Dex environment, including its internal workflow backend.
Dex step inputs and large values persist by default in `$HOME/.dex/blobs`.

See [cli/README.md](https://github.com/superdurable/dex/blob/HEAD/cli/README.md) for Dex endpoints and persistence options.

Operate Dex without a browser using the same installed binary:

```bash
dexcli flow search
dexcli flow inspect <flow-id>
dexcli api list
```

Product documentation: [https://docs.superdurable.io](https://docs.superdurable.io)
(source in [`docs/`](https://github.com/superdurable/dex/blob/HEAD/docs/)).

## Releases

Versions are per-component. Tag with a prefix (for example `server-v1.0.0`, `sdk-go/v1.2.3`, `blob-cache-go/v0.1.0`). Details:…
