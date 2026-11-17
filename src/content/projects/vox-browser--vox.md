---
repo: "vox-browser/vox"
name: "vox"
description: "A new browser engine written 100% in V + UI2"
readmeQualityOk: true
url: "https://github.com/vox-browser/vox"
language: "V"
languages: ["V"]
languagePcts: [82]
stars: 356
forks: 12
openIssues: 8
closedIssues: 9
watchers: 36
contributors: 4
recentReleases: 5
createdAt: "2020-08-17T05:36:16Z"
lastCommitAt: "2026-11-17T14:35:49Z"
lastReleaseAt: "2026-11-16T08:03:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 37
maintainers: ["medvednikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3468348e751cc3c08150e1fa4448f4651064e0bc812ccb54b049030eab18e194/vox-browser/vox"
fundingLinks: ["GITHUB:https://github.com/medvednikov", "PATREON:https://patreon.com/vlang"]
---

## Vox Browser

https://vox-browser.org

[Windows build instructions](https://github.com/vox-browser/vox/blob/HEAD/docs/WINDOWS.md)

WebGL uses a shader frontend written in V, with direct Metal generation on
macOS and native driver compilation on Linux and Windows. See
[shader validation and backend equivalence tests](https://github.com/vox-browser/vox/blob/HEAD/docs/SHADER_VALIDATION.md).

### Building

Setup and build helpers run as V `.vsh` scripts. Python is used by optional
tests, benchmarks, and generators. See
[build-tool commands](https://github.com/vox-browser/vox/blob/HEAD/tools/BUILDING.md).

Install a current [V compiler](https://github.com/vlang/v), put `v` on `PATH`,
and install the shared V UI with `v install ui2` (or update it with `v up ui2`).

Install native dependencies once, then prepare the development environment once
per terminal from the repository root. Subsequent builds use **`v .`**. The setup
command prepares native bridges and compiler adapters and selects the checked C
backend. Re-run setup after updating V, UI2 or the build dependencies. `V_BIN`
and `UI2_SOURCE_DIR` can select existing checkouts.

#### macOS

```sh
brew install freetype openssl…
