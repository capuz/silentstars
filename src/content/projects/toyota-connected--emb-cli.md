---
repo: "toyota-connected/emb_cli"
name: "emb_cli"
description: "Embedder CLI tool"
url: "https://github.com/toyota-connected/emb_cli"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-08-15T17:59:54Z"
lastCommitAt: "2026-06-27T06:23:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["jwinarske", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0667ef250539eff44f34656b66dc533ea1d0433db7440c08526aa01c7203ff/toyota-connected/emb_cli"
---

# emb — Flutter Embedder CLI

`emb` provisions a Flutter **embedded-Linux** development workspace and builds
deployable app bundles for embedders such as
[ivi-homescreen](https://github.com/meta-flutter/ivi-homescreen). It's a Dart
port of [meta-flutter/workspace-automation](https://github.com/meta-flutter/workspace-automation)
(`flutter_workspace.py` + `create_aot.py`).

The whole flow is a handful of commands:

```
deps → repos → Flutter SDK → engine → AOT → ivi-homescreen bundle
```

- **Host dependency install** in one transaction (PackageKit on Linux, Homebrew
  on macOS, WinGet on Windows), with `WhatProvides` resolution so `pkg-config`,
  `libjpeg-devel`, etc. just work.
- **Prebuilt Flutter engine** fetched from
  [meta-flutter/flutter-engine](https://github.com/meta-flutter/flutter-engine)
  releases (auto, keyed by the SDK's engine commit).
- **Cross-compile AOT** for `arm64` / `riscv64` from an `x86_64` host using the
  engine's simulator `gen_snapshot` — no qemu (the artifact is self-contained).
- **Self-describing packages**: a package declares its build in a manifest and
  `emb build <dir>` does the rest.

---

## Requirements

- **Dart SDK ≥ 3.10.1** to run/build…
