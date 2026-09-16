---
repo: "ata-core/ata-validator"
name: "ata-validator"
description: "JSON Schema validator for Draft 2020-12, draft 7 and the v1 dialect. Compiles schemas to plain JavaScript on first use, falls back to an interpreter where code generation is blocked, and points at the line that failed. No required binaries."
readmeQualityOk: true
url: "https://github.com/ata-core/ata-validator"
homepage: "https://ata-validator.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["json-schema", "napi", "native", "schema", "simdjson", "validation", "validator", "standard-schema", "draft-2020-12", "fastify"]
stars: 362
forks: 7
openIssues: 2
closedIssues: 17
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-22T16:53:00Z"
lastCommitAt: "2026-09-16T08:47:39Z"
lastReleaseAt: "2026-04-04T21:09:37Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 27
maintainers: ["mertcanaltin"]
openGraphImageUrl: "https://opengraph.githubassets.com/3127bb837f59a0dd2854b7046ea5e558c828f4c619e8151b4afb5f67a02f1790/ata-core/ata-validator"
fundingLinks: ["GITHUB:https://github.com/mertcanaltin", "GITHUB:https://github.com/lemire"]
discussionCount: 0
---

# ata-validator

JSON Schema validation that compiles for speed and still runs where code generation is blocked. The compiled and interpreted engines answer identically, at 100% of the official suite in both modes, across Draft 2020-12, draft 7 and the [JSON Schema v1 dialect](#dialects). First-class TypeScript inference, and `ata build` emits a standalone module that imports nothing.

1.0 is a stability commitment: see [docs/STABILITY.md](https://github.com/ata-core/ata-validator/blob/HEAD/docs/STABILITY.md) for the semver, deprecation, and error-code guarantees.

## Quick start

```bash
npm install --save-dev ata-validator
npx ata build 'schemas/*.json' --out-dir src/generated
```

The `ata-validator` package itself is pure JavaScript. The native accelerator (simdjson parsing, parallel NDJSON, buffer APIs) ships as per-platform optional packages that npm installs automatically where they fit, the same pattern Vite uses for esbuild. Seven targets are built: macOS on arm64 and x64, Linux on x64 and arm64 against both glibc and musl, and Windows on x64. A platform without a prebuild still installs and validates, on the pure-JS engine. For a guaranteed zero-binary install:

```bash…
