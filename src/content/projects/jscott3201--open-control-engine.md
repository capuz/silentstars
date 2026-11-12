---
repo: "jscott3201/open-control-engine"
name: "open-control-engine"
description: "Embeddable, deterministic Rust control engine that natively executes OBC/LBL CDL for smart-building control sequences."
readmeQualityOk: true
url: "https://github.com/jscott3201/open-control-engine"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ashrae", "building-automation", "cdl", "control-engine", "control-systems", "embeddable", "hvac", "modelica", "rust", "smart-buildings"]
stars: 7
forks: 1
openIssues: 51
closedIssues: 148
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-06-15T18:33:19Z"
lastCommitAt: "2026-11-12T05:32:23Z"
lastReleaseAt: "2026-10-06T02:14:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 52
maintainers: ["jscott3201"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fb32d1b7c60b54863a5cad037577d27c96cb06617758a83cac1b1b3fb479814/jscott3201/open-control-engine"
---

# Open Control Engine

**Open Control Engine runs building control sequences written in the OBC / LBL
[Control Description Language (CDL)](https://obc.lbl.gov/specification/cdl.html), published as
ANSI/ASHRAE Standard 231-2026, as a Rust library you embed in your own application.**

You hand it a control sequence as a CXF document (CDL's JSON-LD exchange format). It parses,
validates, and compiles that sequence into a frozen topological schedule, then ticks the schedule
deterministically — the same document, parameters and input sequence produce bit-identical outputs,
run to run and across x86_64 and arm64, checked against committed goldens on both architectures on
every pull request.

It is a library and nothing else: no `main`, no daemon, no network listener, no async runtime, and
no database. Everything non-computational — points, trends, tags, durability — sits behind a
storage port your application implements. That split is not a design preference. The
OpenBuildingControl (OBC) specification's metadata section (OBC §7.17; clause 5.13 in the table of
contents of ANSI/ASHRAE Standard 231-2026) says of that metadata that none of it affects the
computation of a control signal,…
