---
repo: "AsmanovLev/InvariantFS"
name: "InvariantFS"
description: "Semantic-Aware Adaptive Filesystem"
readmeQualityOk: true
url: "https://github.com/AsmanovLev/InvariantFS"
language: "C"
languages: ["C"]
languagePcts: [74]
topics: ["c", "compression", "compression-tool", "content-addressed", "deduplication", "file-system", "fuse", "vibe-coding"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-08-08T21:40:06Z"
lastCommitAt: "2026-11-01T10:44:14Z"
lastReleaseAt: "2026-11-01T07:36:23Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 48
maintainers: ["AsmanovLev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d06269039b0bc187d62dcad45217d19cb8a4e67c1d5b6a9930088afffbb97460/AsmanovLev/InvariantFS"
---

# InvariantFS

A content-addressed filesystem built around one guarantee:

> what you write comes back byte-identical.

Every codec is verified by decompress-and-compare before it is trusted; when a
transcode cannot be proven reversible, the bytes are stored verbatim. Files are
stored as **content + a recipe**, not as a block range, which is what makes
deduplication, codec selection and partial reads fall out naturally.

FUSE-based, single-host, content-addressed. Written in C11.

**Status: testing.** CI is green across engine, e2e and soak tiers,
releases are published (`v0.6.x`, tarball + deb + Arch + rpm, sha256 +
bootstrap installer), and the pack registry is live. The on-disk format
is Meta-v3 and Meta-v3 only (a pre-v0.5 volume will not open; there is
no conversion path). Durability contract: acknowledged writes are durable
(`fsync` fences before it returns; a failed call leaves the pre-call
state, never a torn prefix) --
see `docs/adr/ADR-009-v3-durability-contract.md`. Anything not yet
acknowledged may be absent after a crash, never torn. Pre-production
status: keep reviewed snapshots and raw `dd` backups before storing
anything you cannot re-import (see `INCIDENTS.md`).…
