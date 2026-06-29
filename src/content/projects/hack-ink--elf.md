---
repo: "hack-ink/ELF"
name: "ELF"
description: "Evidence-linked fact memory for agents."
url: "https://github.com/hack-ink/ELF"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 33
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-31T16:44:22Z"
lastCommitAt: "2026-06-29T07:22:04Z"
lastReleaseAt: "2026-02-23T17:13:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 34
maintainers: ["yvette-carlisle"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e1095a5e7f3c364823a91b75b8e4eca7bc750d6c5a0cc12f08fc8ccd42d4a5/hack-ink/ELF"
discussionCount: 0
---

# ELF

Evidence-linked fact memory for agents.

</div>

## What Is ELF?

ELF is a memory service for LLM agents that stores short, evidence-linked facts and retrieves them with chunk-first hybrid search. Postgres with pgvector is the source of truth for notes and embeddings. Qdrant is a derived, rebuildable index for fast candidate retrieval. ELF can also persist evidence-bound entity/relation facts and optionally attach them as `relation_context` in search explain output. ELF exposes both HTTP and MCP interfaces.

## Project Goals

- Improve effective context usage with compact memory retrieval instead of replaying long history.
- Preserve correctness over time with update and lifecycle semantics, not append-only memory.
- Keep memory behavior auditable with deterministic boundaries, evidence, and replayable traces.
- Enable safe multi-agent collaboration through explicit scopes and sharing controls.
- Make quality measurable with repeatable evaluation and regression checks.

## Why Choose ELF

- Evidence-linked memory with strict provenance requirements.
- Deterministic `add_note` and LLM-driven `add_event` separation.
- Postgres source-of-truth plus rebuildable retrieval index.…
