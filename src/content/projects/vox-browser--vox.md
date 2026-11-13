---
repo: "vox-browser/vox"
name: "vox"
description: "A new browser engine written 100% in V + UI2"
readmeQualityOk: true
url: "https://github.com/vox-browser/vox"
language: "V"
languages: ["V"]
languagePcts: [82]
stars: 342
forks: 11
openIssues: 7
closedIssues: 9
watchers: 37
contributors: 4
recentReleases: 4
createdAt: "2020-08-17T05:36:16Z"
lastCommitAt: "2026-11-13T05:43:50Z"
lastReleaseAt: "2026-11-09T05:29:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 37
maintainers: ["medvednikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/141a2efb11e6a88fb19b99de902e48522368f5cf8f93ad8bc15ad6b894b1dc44/vox-browser/vox"
fundingLinks: ["GITHUB:https://github.com/medvednikov", "PATREON:https://patreon.com/vlang"]
---

## Vox Browser

https://vox-browser.org

[Windows build instructions](https://github.com/vox-browser/vox/blob/HEAD/docs/WINDOWS.md)

WebGL uses the V shader frontend and direct Metal generation on macOS. See
[shader validation and backend equivalence tests](https://github.com/vox-browser/vox/blob/HEAD/docs/SHADER_VALIDATION.md).

### Building

Python is not required to build Vox. Setup and build helpers run as V `.vsh`
scripts. Python is used by optional tests, benchmarks, and generators. See
[build-tool commands](https://github.com/vox-browser/vox/blob/HEAD/tools/BUILDING.md).

Install a current [V compiler](https://github.com/vlang/v), put `v` on `PATH`,
and install the shared V UI with `v install ui2` (or update it with `v up ui2`).
Vox needs no Ladybird checkout, Skia, vcpkg or Rust toolchain.

Install native dependencies once, then prepare the development environment once
per terminal from the repository root. Subsequent builds use **`v .`**. The setup
command prepares native bridges and compiler adapters and selects the checked C
backend. Re-run setup after updating V, UI2 or the build dependencies. `V_BIN`
and `UI2_SOURCE_DIR` can select existing checkouts.

#### macOS…
