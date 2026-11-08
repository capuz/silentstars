---
repo: "jscott3201/open-control-engine"
name: "open-control-engine"
description: "Embeddable, deterministic Rust control engine that natively executes OBC/LBL CDL for smart-building control sequences."
readmeQualityOk: true
url: "https://github.com/jscott3201/open-control-engine"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ashrae", "building-automation", "cdl", "control-engine", "control-systems", "embeddable", "hvac", "modelica", "rust", "smart-buildings"]
stars: 7
forks: 1
openIssues: 21
closedIssues: 66
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-06-15T18:33:19Z"
lastCommitAt: "2026-11-08T10:41:17Z"
lastReleaseAt: "2026-10-06T02:14:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 52
maintainers: ["jscott3201", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce96aa9934ed5df4dfb81896cef915426d7e20903add3cf3dc787739a26b0134/jscott3201/open-control-engine"
---

# Open Control Engine

**Open Control Engine runs building control sequences written in the OBC / LBL
[Control Description Language (CDL)](https://obc.lbl.gov/specification/cdl.html), as a Rust
library you embed in your own application.**

You hand it a control sequence as a CXF document (CDL's JSON-LD exchange format). It parses,
validates, and compiles that sequence into a frozen topological schedule, then ticks the schedule
deterministically — the same document, parameters and input sequence produce bit-identical outputs,
run to run and across x86_64 and arm64, checked against committed goldens on both architectures on
every pull request.

It is a library and nothing else: no `main`, no daemon, no network listener, no async runtime, and
no database. Everything non-computational — points, trends, tags, durability — sits behind a
storage port your application implements. That split is not a design preference; it is CDL §7.17,
which states that such metadata does not affect the computation of a control signal.

Today it loads and simulates **46 ASHRAE Guideline 36 sequence fixtures** against a registry of
**133 CDL block classes**\*. It is **pre-1.0 and not published to…
