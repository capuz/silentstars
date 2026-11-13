---
repo: "Francis1998/agentic-career-search"
name: "agentic-career-search"
description: "Agentic job-discovery backend: 119 ATS & job-board adapters (Greenhouse, Lever, Workday, JSON-LD), explainable scoring with decision traces, cancellable runs, JobSpy-style search with CSV/JSONL export and Atom feeds, resume-to-job matching with missing skills, a read-only MCP server and optional GPT-6, Claude 5.5, Gemini 4 or Kimi K3.1 enrichment."
readmeQualityOk: true
url: "https://github.com/Francis1998/agentic-career-search"
homepage: "https://github.com/Francis1998/agentic-career-search#why-this-exists"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["career-tools", "fastapi", "job-search", "python", "agentic-workflow", "ai-agent", "llm-integration", "atom-feed", "ats", "explainable-ai"]
stars: 101
forks: 17
openIssues: 7
closedIssues: 0
watchers: 13
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T04:57:42Z"
lastCommitAt: "2026-11-13T05:38:35Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 25
maintainers: ["Francis1998", "cursor[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3b33fda1e5aad375310937118587cbe2ff7b3d677742e3defd30cc69db551de/Francis1998/agentic-career-search"
---

# agentic-career-search

   

**An agentic job-discovery backend that explains every decision.** Point it at public
career boards (119 ATS and job-board adapters: Greenhouse, Lever, Workday, Ashby,
SmartRecruiters, schema.org JSON-LD and more). A worker runs cancellable discovery runs
that score every posting and record why, then you search, export and subscribe to the
results.

## Why this exists

Job-search automation usually fails in practice because it:

- **can't explain its ranking** → every job stores a deterministic score, priority tier,
  matched terms, rationale and plan steps (`raw.agent_decision`);
- **breaks silently** → one adapter contract with timeouts, bounded scope and per-source
  `source.failed` events instead of a crashed script;
- **can't be steered** → runs follow a `queued → running → completed / cancelled / failed`
  state machine with cooperative cancellation and an ordered event log;
- **leaves results in a terminal** → JobSpy-style search, CSV/JSONL export and an Atom
  feed for Slack, Teams or any feed reader;
- **can't tell what fits *you*** → `POST /jobs/match` ranks the captured feed against your
  resume text with matched and missing skills —…
