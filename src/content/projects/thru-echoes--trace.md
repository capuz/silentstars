---
repo: "Thru-Echoes/TRACE"
name: "TRACE"
description: "TRACE protocol for auditing decision-provenance in AI-assisted scientific workflows "
readmeQualityOk: true
url: "https://github.com/Thru-Echoes/TRACE"
homepage: "https://doi.org/10.5281/zenodo.21711455"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-transparency", "audit-trail", "claude-code", "human-ai-collaboration", "mcp", "model-context-protocol", "open-science", "provenance", "python", "reproducibility"]
stars: 26
forks: 2
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-02-02T19:49:58Z"
lastCommitAt: "2026-11-09T03:29:59Z"
lastReleaseAt: "2026-09-04T20:29:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 41
maintainers: ["Thru-Echoes", "chenmingtang830"]
openGraphImageUrl: "https://opengraph.githubassets.com/31c06319f1b9aade5452fd5004c634eaf2e5076869574bc0a8f025252bc0b395/Thru-Echoes/TRACE"
---

# Why TRACE? 

In the age of AI, how do we know *who* proposed *what* in a scientific or coding dev workflow? Was the idea for that methodological decision made by *AI* or by a *human*? And when decisions are proposed by AI, are they being accepted, rejected, or iterated on? 

What does the solution to this look like? 

Every row above is a real event from session `trace_20260730_32c108`, captured as
the work happened. Note what a diff could not have told you: one decision is
still **awaiting resolution** because the AI is not permitted to resolve its own
proposal, and the last event **retracts** an earlier contribution that turned out
to be wrong. Regenerate it from any session with
`python3 scripts/make_provenance_animation.py <session.json>`.

**One sentence from you, fully-scoped session from Claude:**

1. From inside `TRACE/`, ask Claude to start a session and review the manuscript (which is inside sibling dir, `TRACE-research/`).
2. Past-session memory makes Claude pivot to that sibling repo before logging anything.
3. `trace_start_session` runs there, learnings auto-recall, and a five-item task plan emerges.

## **TRACE: Transparent Recording of AI-assisted Collaboration…
