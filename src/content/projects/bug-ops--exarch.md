---
repo: "bug-ops/exarch"
name: "exarch"
description: "Secure archive library: TAR/ZIP/7z extraction & creation with CVE protection. Type-safe Rust core, Python/Node.js bindings, zero unsafe code."
readmeQualityOk: true
url: "https://github.com/bug-ops/exarch"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["7z", "archive", "cli", "compression", "extraction", "library", "memory-safe", "napi-rs", "nodejs", "path-traversal"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 255
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-30T21:12:05Z"
lastCommitAt: "2026-09-21T09:13:38Z"
lastReleaseAt: "2026-03-15T02:49:21Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 72
maintainers: ["bug-ops", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c89b29ca150f74b196549f480662e818ed9bd08cf8af491997238c0550680dc/bug-ops/exarch"
discussionCount: 0
---

# exarch

Memory-safe archive extraction and creation library with Python and Node.js bindings.

> [!IMPORTANT]
> **exarch** is designed as a secure replacement for vulnerable archive libraries like Python's `tarfile` and Node.js's `tar-fs`, which have known CVEs with CVSS scores up to 9.4.

## Features

- **Extract, create, list, and verify archives** — Full support for TAR and ZIP (all operations), plus 7z extraction, listing, and verification
- **Format auto-detection** — Falls back to magic-byte inspection when the file extension is absent, unrecognised, or contradicts the file content
- **Security-first design** — Default-deny security model with protection against path traversal, symlink attacks, zip bombs, and more
- **Type-driven safety** — Rust's type system ensures validated paths can only be constructed through security checks
- **Extension allowlists** — Optional `allowed_extensions` filter restricts extraction to a specific set of file extensions across TAR, ZIP, and 7z handlers
- **Fluent configuration** — 15 `with_*` builder methods on `SecurityConfig` and 2 on `ExtractionOptions` for ergonomic setup
- **Multi-language support** — Native bindings for Python (PyO3)…
