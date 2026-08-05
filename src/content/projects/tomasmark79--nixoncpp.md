---
repo: "tomasmark79/NixonCpp"
name: "NixonCpp"
description: "Project template for a C++ application and library, set up with Meson/Nix tooling, tests, documentation, and packaging. (modular layout, CI-ready, cross-build targets)."
readmeQualityOk: true
url: "https://github.com/tomasmark79/NixonCpp"
homepage: "https://www.linkedin.com/in/tomas79/"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [61, 22]
topics: ["application", "cpp", "library", "meson", "nix", "template", "c", "ci", "tests"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-05T22:54:23Z"
lastCommitAt: "2026-08-05T06:08:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 21
maintainers: ["tomasmark79"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5217a60b7a62af736ef75f720159d3c1ed002eb9b5c0178691c6d7af6c1d41d/tomasmark79/NixonCpp"
---

NixonCpp
========

</p>

Overview
--------

Project template for a C++ application and library, set up with Meson/Nix tooling, tests, documentation, and packaging.

Highlights:

- Modular layout (app + library)
- CI-ready
- Cross-build targets (aarch64, Windows, WASM)

Repository layout
-----------------

- include/                Public library headers
- src/app/                Application sources
- src/lib/                Library implementation
- tests/                  Unit tests
- assets/                 Runtime assets
- scripts/                Build and tooling scripts

Requirements
------------

- Nix (recommended) or a C++20 toolchain + Meson + Ninja
- Optional: doxygen + graphviz for docs

Quick start (Nix)
-----------------

If you use `direnv`:

```bash
direnv allow
```

Build (native, release):

```bash
make build
```

Run tests (native, debug build first):

```bash
make test
```

Clone helper
------------

See: [scripts/clonenixoncpp.sh](https://github.com/tomasmark79/NixonCpp/blob/HEAD/scripts/clonenixoncpp.sh)

Template rename
---------------

```bash
# Usage: scripts/rename.sh <NewName> [NewLibName] [NewNamespace]
./scripts/rename.sh MyApp MyAppLib myapp
```

Build…
