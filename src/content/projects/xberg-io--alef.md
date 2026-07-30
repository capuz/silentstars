---
repo: "xberg-io/alef"
name: "alef"
description: "Generate fully-typed, lint-clean language bindings for Rust libraries across 16 languages"
readmeQualityOk: true
url: "https://github.com/xberg-io/alef"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["bindgen", "c", "c-ffi", "csharp", "elixir", "golang", "java", "php", "python", "r"]
stars: 89
forks: 15
openIssues: 1
closedIssues: 66
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-31T17:01:28Z"
lastCommitAt: "2026-07-30T06:07:15Z"
lastReleaseAt: "2026-04-21T05:26:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 34
maintainers: ["Goldziher", "renovate[bot]", "pboling"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1197540366/e0a432b4-8206-4858-b11d-94590c9285d0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061110Z&X-Amz-Expires=300&X-Amz-Signature=7dae48ae74cdfe2ae1e3fdc4cee3fb750e4c9f46399371669c36a54e01e34cbe&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE3MCwibmJmIjoxNzg1MzkxODcwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.UUbd2vrWEZrGlVbHZA8q-T8MroPAjV_6sF5YcDks5yE"
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

Alef is the polyglot binding generator behind the Xberg.dev ecosystem. It extracts a Rust API surface
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
