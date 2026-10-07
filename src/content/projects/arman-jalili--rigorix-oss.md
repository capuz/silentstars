---
repo: "arman-jalili/rigorix-oss"
name: "rigorix-oss"
description: "A deterministic coding-agent runtime for repeatable, auditable AI software engineering."
readmeQualityOk: true
url: "https://github.com/arman-jalili/rigorix-oss"
homepage: "https://github.com/arman-jalili/rigorix-oss"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["ai", "ci-cd", "coding-agent", "dag", "governance", "llm", "oss", "rust", "template-driven"]
stars: 18
forks: 1
openIssues: 5
closedIssues: 582
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-13T05:28:27Z"
lastCommitAt: "2026-10-07T10:30:17Z"
lastReleaseAt: "2026-10-06T19:00:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["arman-jalili"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4265271302d76b888ee1b193c3d97801f1ec274a689ef89e73b8796c1852c59/arman-jalili/rigorix-oss"
---

# Rigorix

**The LLM generates code. Rigorix governs execution.**

Coding agents can now write, edit, and ship software. The question organizations are starting to hit is not *can they?* — it's *what did the agent do, who approved it, and what was it allowed to touch?*

Conversation history can't answer that. An API gateway can't either — that layer governs what flows *into* your AI, not what the agent does in your repository, your shell, your CI.

Rigorix is the enforcement layer for agent execution. Natural-language tasks are compiled into a reviewable plan, executed inside policy, permission, and budget boundaries, and every step is recorded in a signed, timestamped audit envelope. When an agent wants to do something risky, Rigorix doesn't ask — it refuses, or gates the step for human approval.

Built for platform and security teams running agents at scale — not for developers who want a faster autocomplete.

---

## Watch it stop

The fastest way to understand Rigorix is the [two-minute demo](https://github.com/arman-jalili/payments-demo): a coding agent fixes a real double-charge bug in a payments webhook — then its plan drifts toward a file it wasn't cleared to touch…
