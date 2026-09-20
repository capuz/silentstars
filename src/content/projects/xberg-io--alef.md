---
repo: "xberg-io/alef"
name: "alef"
description: "Generate fully-typed, lint-clean language bindings for Rust libraries across 16 languages"
readmeQualityOk: true
url: "https://github.com/xberg-io/alef"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["bindgen", "c", "c-ffi", "csharp", "elixir", "golang", "java", "php", "python", "r"]
stars: 99
forks: 18
openIssues: 5
closedIssues: 123
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-03-31T17:01:28Z"
lastCommitAt: "2026-09-20T08:45:30Z"
lastReleaseAt: "2026-04-21T05:26:29Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 33
maintainers: ["Goldziher", "pboling", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1197540366/e0a432b4-8206-4858-b11d-94590c9285d0"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/xberg-io/assets@v1/banner/readme-banner-dark.svg">
  </picture>
</p>

# Alef

  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
</div>

  <strong>Rust in. Native bindings out.</strong>
</div>

  </a>
  </a>
</div>

Alef is the polyglot binding generator behind the xberg.io ecosystem. It extracts a Rust API surface
and emits language-native bindings, package scaffolding, type stubs, README files, API docs, e2e
tests, and release metadata from one `alef.toml`.

**[Installation](#installation)** | **[Quick Start](#quick-start)** | **[Supported Targets](#supported-targets)** |
**[CLI Reference](#cli-reference)**

## Key Features

- **One source of truth** - Configure a Rust workspace once and generate every enabled language target from it.
- **Language-native bindings** - Emit host-language types, docs, errors, async wrappers, callbacks, and package files.
- **Multi-crate workspaces** - Drive multiple independently published binding packages from a shared workspace config.
- **End-to-end fixtures** - Generate cross-language test suites and registry-mode test apps from shared JSON fixtures.
-…
