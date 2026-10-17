---
repo: "visualcommons/gamut"
name: "gamut"
description: "Memory-safe, specs-compliant, quality-optimized image primitives"
readmeQualityOk: true
url: "https://github.com/visualcommons/gamut"
homepage: "https://crates.io/crates/gamut"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 42
closedIssues: 341
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-01T17:34:04Z"
lastCommitAt: "2026-10-17T07:59:13Z"
lastReleaseAt: "2026-06-12T21:13:51Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 97
undervaluedScore: 59
maintainers: ["justin13888", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8844fdfa513d9e18cab6eae90b13cfb97f47ac79dcc02ea04c3d9f0af1467e5b/visualcommons/gamut"
---

# gamut

> Project Status: Early development. Achieving full specs compliance across modern formats (AVIF, JXL, WebP, DNG) but no guarantees on API stability yet.

Memory-safe, specs-compliant, quality-optimized image primitives.

## Why gamut?

The world doesn't lack image codecs. libavif/libaom, libwebp, and libjpeg-turbo are
mature, fast, and battle-tested — we're not out to beat a decade of hand-tuned SIMD
assembly on raw encode speed. gamut exists because "fast C that works" still leaves real
gaps, and those gaps are exactly where a clean-slate, pure-Rust, permissively-licensed
implementation wins.

- **Memory safety on the industry's worst attack surface.** Image parsers chew on hostile,
  attacker-controlled bytes from the open internet, and the C codecs have the CVE record to
  show how that goes — libwebp's CVE-2023-4863 was a zero-click, wormable heap overflow that
  triggered emergency out-of-band patches across browsers, Electron apps, and mobile OSes in
  a single week. Safe Rust deletes that entire bug class (spatial and temporal memory
  corruption) from the encode and parse paths. For anything that ingests untrusted images,
  that alone justifies the rewrite.

-…
