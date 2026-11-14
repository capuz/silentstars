---
repo: "Trinity-S-AI-DNA/t27"
name: "t27"
description: "Spec-first ternary language: .t27 → synthesizable Verilog, bit-exact — the compiler behind Trinity's silicon"
readmeQualityOk: true
url: "https://github.com/Trinity-S-AI-DNA/t27"
language: "Zig"
languages: ["Zig"]
languagePcts: [71]
topics: ["golden-ratio", "trinity-ecosystem", "zig"]
stars: 5
forks: 4
openIssues: 2061
closedIssues: 5800
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-03T20:05:22Z"
lastCommitAt: "2026-11-14T10:51:19Z"
lastReleaseAt: "2026-05-15T08:51:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 70
maintainers: ["gHashTag"]
openGraphImageUrl: "https://opengraph.githubassets.com/c78fc1afdbc78cacdcb27808ac65187e31eeed42effdc4c51f44d9f292aee9d1/Trinity-S-AI-DNA/t27"
discussionCount: 0
---

# Golden Master — Unified Spec Migration

## 🌟 STATUS: UNIFIED SPEC MIGRATION ACTIVATED

**Goal:** ALL specs live in `t27/specs/` as canonical source of truth.

> *Accepted: all specs from our repositories are transferred to a single `t27` as canonical source of truth.*
> *Other repositories may contain implementation/host adapters, but **specs, contracts, tests and golden artifacts live in `t27`**; in `golden-master` only what passed GOLDEN CHAIN enters.*

---

## 📁 Canonical Structure — `t27/specs/`

```
specs/
├── domains/           # Domain definitions (physics, math, etc.)
├── agents/            # Agent specs and behaviors
├── ml/                # Machine learning specs
├── runtime/           # Runtime-related specs
├── tools/             # Tool-related specs
├── tests/             # Test specification suites
├── golden/            # Golden-verified specs
├── archived/          # Duplicates/archived specs
├── compiler/          # Compiler-related specs
├── gateway/           # Gateway/interface specs
├── fpga/              # FPGA-related specs
├── protocol/          # Protocol definitions
├── tri/               # TRI-specific test specs
└── ci/                # CI-related…
