---
repo: "Dicklesworthstone/franken_alignment"
name: "franken_alignment"
description: "Evidence-carrying control system for powerful AI agents, featuring epistemic MVCC, authority graphs, progressive ATP evidence, and decision-sensitive introspection in pure safe Rust."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_alignment"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent-control", "ai-alignment", "ai-safety", "asupersync", "authority-graph", "causal-inference", "commit-reveal", "formal-verification", "frankensuite", "metacognition"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-07T01:47:25Z"
lastCommitAt: "2026-09-19T02:47:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1359645474/a241535b-bb00-43f0-8da7-350ec15bac78"
---

# franken_alignment

</div>

**Evidence-carrying control for powerful, potentially untrusted agents. Pure Rust. Structured concurrency. Versioned judgment. Economical introspection.**

</div>

```bash
# What runs today, from a source checkout (see Installation & local verification):
git clone https://github.com/Dicklesworthstone/franken_alignment
cd franken_alignment
RCH_REQUIRE_REMOTE=1 rch exec -- cargo +nightly-2026-09-07 test --locked -p fa-reference
RCH_REQUIRE_REMOTE=1 rch exec --base HEAD --clean-overlay --no-overlay -- cargo +nightly-2026-09-07 run --locked -p xtask -- check
```

> **A note on tense (read this first).** This README is written in the **present tense, as if the entire design in [`COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENALIGNMENT.md`](https://github.com/Dicklesworthstone/franken_alignment/blob/HEAD/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENALIGNMENT.md) is fully realized**: the target state where every performance and safety gate is green and every subsystem is live. This is a deliberate choice. It lets the document describe the *finished* system so it gets **trued-up in place as milestones land** (Gates G0→G6 in [§21 of the…
