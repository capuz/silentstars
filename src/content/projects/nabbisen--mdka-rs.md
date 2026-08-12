---
repo: "nabbisen/mdka-rs"
name: "mdka-rs"
description: "A HTML to Markdown (MD) converter balances conversion quality with runtime efficiency."
readmeQualityOk: true
url: "https://github.com/nabbisen/mdka-rs"
homepage: "https://nabbisen.github.io/mdka-rs/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [64, 20]
stars: 55
forks: 4
openIssues: 2
closedIssues: 36
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-01-04T01:34:47Z"
lastCommitAt: "2026-08-12T05:15:44Z"
lastReleaseAt: "2024-01-06T10:30:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 48
maintainers: ["nabbisen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bcf9aa1633e0c244b46fbbf9314c20a1818c0eea6eccc2c90fb892a74b121e8/nabbisen/mdka-rs"
---

# mdka

**A HTML to Markdown converter written in Rust.**

mdka balances conversion quality with runtime efficiency —
readable output from real-world HTML, without sacrificing speed or memory.    
"ka" means "化 (か)" pointing to conversion.

---

## Why mdka?

There are several good HTML-to-Markdown converters in the Rust ecosystem.
mdka's specific focus is:

- **Reliable output from diverse HTML sources.**
    It is built on [scraper](https://crates.io/crates/scraper), which uses
[html5ever](https://github.com/servo/html5ever) — the HTML5 parser from
the Servo browser engine. html5ever applies the same parsing algorithm that
web browsers use, so it handles malformed tags, deeply nested structures,
CMS output, and SPA-rendered DOM without special-casing.
- **Crash resistance.**
    Conversion uses non-recursive DFS throughout. There is no stack overflow,
no matter the nesting depth.
- **Configurable pre-processing.**
    Five [conversion modes](#conversion-modes) let you tune what gets kept or
stripped — from noise-free LLM input to lossless archiving.
- **Multi-language.**
    The same Rust implementation is accessible from Node.js (napi-rs) and
Python (PyO3).

---

## Quick Start…
