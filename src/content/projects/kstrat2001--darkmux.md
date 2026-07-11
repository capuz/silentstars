---
repo: "kstrat2001/darkmux"
name: "darkmux"
description: "Task-class-aware multiplexer for local LLM configurations on Apple Silicon. Profiles, swap, lab."
readmeQualityOk: true
url: "https://github.com/kstrat2001/darkmux"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent-tooling", "apple-silicon", "cli", "llm", "lmstudio", "local-ai", "openclaw", "rust"]
stars: 5
forks: 1
openIssues: 142
closedIssues: 392
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-09T18:33:00Z"
lastCommitAt: "2026-07-11T05:59:39Z"
lastReleaseAt: "2026-06-19T11:36:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 61
maintainers: ["kstrat2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/84bf76b04a6a3e22b13be625863e44b780cac24d4362524c5dd9f76b55744bf7/kstrat2001/darkmux"
---

# darkmux

**[darkmux.com](https://darkmux.com) · Turn your frontier AI assistant into an engagement-aware orchestrator that distributes AI work across your machines.**

darkmux is the substrate layer: profiles per role, missions per engagement, audit per record, coordination across the fleet. Your frontier holds the engagement context; darkmux gives it the local-AI fleet to operate on.

Built for operators who need to see what their AI fleet did, when, and why.

- 🔒 **Hash-chained audit trail with edit detection.** Every dispatch, decision, and review is captured in a BLAKE3 hash-chained per-machine log; `darkmux flow integrity-check` surfaces any post-hoc edit to the chain (exits 2 on chain break, suitable for cron / CI gating).
- 🤝 **Engagement-aware coordination.** Sessions running on different machines share a flow stream, so two Claude Code sessions on two laptops compose into one fleet view rather than two siloed runs.
- 🎯 **Methodology-driven role specialization.** Per-role models selected through documented bake-off methodology; evaluation criteria recorded before the comparison runs.
- 🔧 **Operator sovereignty by design.** Defaults are overridable, writes are…
