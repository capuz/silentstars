---
repo: "ahmedEid1/lumen"
name: "lumen"
description: "Lumen — learner-owned AI education platform. Tell the AI what you want to learn: it builds you a private course in ~a minute, tutors you with course-scoped RAG + citations, and lets you share, clone & remix via a moderated catalog. BYOK, custom no-LangChain multi-agent orchestrator, golden evals in CI, MCP server. Live demo + public /eval."
readmeQualityOk: true
url: "https://github.com/ahmedEid1/lumen"
homepage: "https://lumen.ahmedhobeishy.tech"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 32]
topics: ["python", "agentic-ai", "celery", "docker", "e-learning", "evals", "fastapi", "llm", "mcp", "nextjs"]
stars: 92
forks: 40
openIssues: 0
closedIssues: 2
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2020-11-29T17:11:42Z"
lastCommitAt: "2026-10-29T21:24:56Z"
lastReleaseAt: "2026-06-06T05:29:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 35
maintainers: ["ahmedEid1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/317002133/fd0f2706-9492-41a0-92d8-996705bbd09c"
---

# Lumen

**Type a one-sentence learning goal — an AI orchestrator builds you a private course in ~50 seconds,
a RAG tutor with citations teaches it, and you can audit every agent decision it made.**

[**Live demo**](https://lumen.ahmedhobeishy.tech) · [**Eval results**](https://lumen.ahmedhobeishy.tech/eval) · [**Architecture**](https://github.com/ahmedEid1/lumen/blob/HEAD/docs/architecture.md) · [**MCP server**](https://github.com/ahmedEid1/lumen/blob/HEAD/docs/mcp.md)

Try it yourself: [the one-click demo](https://lumen.ahmedhobeishy.tech/demo) pre-fills `demo@lumen.test` / `Demo!2026` and drops you into the tutor (free-tier box — give a cold page a few seconds).</sub>

## What this is

A **learner-owned, two-role e-learning platform** — every signed-in user runs the whole loop themselves; `admin` only moderates and configures. The product is the loop; the point of the repo is the agentic system underneath it.

| Step | What happens |
|---|---|
| **Define** | A guided AI intake (capped at six turns) turns a fuzzy goal into a structured **learning brief** — the source goal is field-encrypted at rest |
| **Build** | The authoring orchestrator builds a **private course** from the…
