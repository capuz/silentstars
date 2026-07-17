---
repo: "DataDog/saluki"
name: "saluki"
description: "A toolkit for building telemetry data planes in Rust."
readmeQualityOk: true
url: "https://github.com/DataDog/saluki"
homepage: "https://datadoghq.dev/saluki/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 38
forks: 11
openIssues: 72
closedIssues: 229
watchers: 11
contributors: 5319
recentReleases: 0
createdAt: "2024-04-10T16:07:11Z"
lastCommitAt: "2026-07-17T05:59:34Z"
lastReleaseAt: "2025-05-21T20:14:02Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["jszwedko", "tobz", "blt"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f34bfac382ef891fc9c601226ddadf378ed305b869c71ef148c296d7e8e68d3/DataDog/saluki"
discussionCount: 0
---

# saluki

Saluki is a toolkit for building telemetry data planes in Rust.

## Structure

Everything under `lib/` contains reusable/common code, and everything under `bin/` contains dedicated crates for
building application-specific binaries.

### Binaries

- `bin/agent-data-plane`: the primary data plane binary, which provides a production-grade DogStatsD pipeline and an
  experimental OTLP pipeline
- `bin/correctness`: binaries used to run correctness tests against ADP and standalone DogStatsD

### Libraries

The `lib/` directory contains two groups of crates:

**Reusable and general-purpose** — Implementations of features/capabilities that are required for Saluki or Agent Data
Plane but aren't specific to Saluki. Examples include `ddsketch`, generated code for Protocol Buffers definitions, and
so on.

**Saluki** (`saluki-*`) — Foundational crates that make up Saluki itself, covering topology construction, component
traits, I/O primitives, context resolution, configuration, and more.

## Contributing

If you find an issue with this package and have a fix, or simply want to report it, please review our
[contributing](https://datadoghq.dev/saluki/development/contributing) guide.…
