---
repo: "arman-jalili/rigorix-oss"
name: "rigorix-oss"
description: "A deterministic coding-agent runtime for repeatable, auditable AI software engineering."
readmeQualityOk: true
url: "https://github.com/arman-jalili/rigorix-oss"
homepage: "https://github.com/arman-jalili/rigorix-oss"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [58, 23]
topics: ["ai", "ci-cd", "coding-agent", "dag", "governance", "llm", "oss", "rust", "template-driven"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 440
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-13T05:28:27Z"
lastCommitAt: "2026-08-28T15:33:39Z"
lastReleaseAt: "2026-08-21T14:15:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 57
maintainers: ["arman-jalili"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a876e042ac2fda0d470845b5f1b7b75bdc12a0277c473fcd17a4eed501b43cf/arman-jalili/rigorix-oss"
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
