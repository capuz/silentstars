---
repo: "stella/anonymize"
name: "anonymize"
description: "Anonymization pipeline for sensitive text. Deterministic, local-first, fast."
readmeQualityOk: true
url: "https://github.com/stella/anonymize"
homepage: "https://stll.app/product/anonymization"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 34]
topics: ["anonymization", "bun", "data-privacy", "legaltech", "pii", "rust", "stella", "typescript", "wasm"]
stars: 9
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-16T20:51:42Z"
lastCommitAt: "2026-10-05T10:47:16Z"
lastReleaseAt: "2026-06-05T10:25:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 65
maintainers: ["jan-kubica", "stella-provenance-updater[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eca2a591754bc808cd6897aa9b2ea2638304710b899d3cd0a6817231e84148b/stella/anonymize"
---

stella anonymize is an open-source, local-first PII redaction toolkit for legal
and regulated workflows. Detection and replacement are implemented in a shared
Rust core, with bindings for Node.js, Python, and browsers. The default pipeline
is deterministic and makes no model or remote-service calls. Coverage varies by
language, entity type, and document structure.

No detector catches everything. Reversible placeholder replacement is
pseudonymization, and its maps contain original PII; do not log or treat them as
anonymous output. The default pipeline targets personal identifiers, not
passwords, authentication tokens, API keys, or private cryptographic material.
IP addresses, MAC addresses, and URLs require explicit opt-in capabilities.

Contributing to the project is welcome.

## Quickstart

### Node.js

```bash
npm install @stll/anonymize
```

Requires Node.js 20 or newer or Bun 1.4.1 or newer. Prebuilt native binaries ship
for macOS (`arm64`, `x64`), glibc-based Linux (`arm64`, `x64`), and Windows
(`x64`). Alpine Linux and other musl-based systems are not supported.

```ts
import { createPipeline, deanonymise } from "@stll/anonymize";

const pipeline = await createPipeline({…
