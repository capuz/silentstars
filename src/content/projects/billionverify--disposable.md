---
repo: "BillionVerify/disposable"
name: "disposable"
description: "Open Source Disposable Email Detection"
readmeQualityOk: true
url: "https://github.com/BillionVerify/disposable"
homepage: "https://billionverify.com/disposable-email-detection?utm_source=github"
language: "Go"
languages: ["Go", "Python", "Rust"]
languagePcts: [48, 26, 25]
topics: ["disposable-email", "email", "email-marketing", "email-validation", "email-validation-api", "free"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-10T03:56:28Z"
lastCommitAt: "2026-10-29T10:37:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58abbca4fb473acaf3f6defeecfd9559987e6b8e7692eb63469288bf603ead2/BillionVerify/disposable"
discussionCount: 2
---

# Free and Open Source Disposable Email Detection

Tiny Go and Rust libraries, plus a Go CLI, that answer one question:
**"Is this email's domain a disposable / one-time mailbox?"**

- **~213k** known disposable domains, merged from nine community lists and embedded into the binary (no network or disk I/O at runtime).
- O(1) exact-match lookup through an in-memory map; wildcard suffixes use a
  short linear scan. Safe for concurrent use.
- **Hourly** updates from upstream lists, with per-source license verification
  on every run (see `.github/workflows/update.yml`).
- MIT licensed.

Maintained by [BillionVerify](https://billionverify.com), where the same disposable-domain data powers the production `/v1/verify/disposable` endpoint.

---

## Install

### Go

```bash
go get github.com/billionverify/disposable
```

Or grab the CLI:

```bash
go install github.com/billionverify/disposable/cmd/disposable-check@latest
```

### Rust

Install the native [`disposable`](https://crates.io/crates/disposable) crate from crates.io:

```bash
cargo add disposable
```

## Library usage

### Go

```go
import "github.com/billionverify/disposable"

if disposable.IsDomain("mailinator.com") {
    //…
