---
repo: "nabbisen/mdka-rs"
name: "mdka-rs"
description: "A HTML to Markdown (MD) converter balances conversion quality with runtime efficiency."
readmeQualityOk: true
url: "https://github.com/nabbisen/mdka-rs"
homepage: "https://nabbisen.github.io/mdka-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
stars: 55
forks: 4
openIssues: 2
closedIssues: 36
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-01-04T01:34:47Z"
lastCommitAt: "2026-09-16T08:48:12Z"
lastReleaseAt: "2024-01-06T10:30:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["nabbisen"]
openGraphImageUrl: "https://opengraph.githubassets.com/375d4da4af11a6e68c096fae6ac2f7f3b8dffcee7170a548cbb57d735094eb3f/nabbisen/mdka-rs"
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
stripped, from noise-free LLM input to maximum retention. Three of the five
currently produce identical output — see [Conversion Modes](#conversion-modes).
- **Multi-language.**
    The same…
