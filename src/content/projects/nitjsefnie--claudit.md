---
repo: "Nitjsefnie/claudit"
name: "claudit"
description: "Self-hosted Claude Code usage dashboard — TTL-correct cost accounting and per-project attribution for session transcripts"
readmeQualityOk: true
url: "https://github.com/Nitjsefnie/claudit"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["claude-code", "cost-tracking", "dashboard", "llm", "observability", "python", "self-hosted", "usage-tracking"]
stars: 18
forks: 8
openIssues: 0
closedIssues: 716
watchers: 1
contributors: 6
recentReleases: 5
createdAt: "2026-05-07T14:08:53Z"
lastCommitAt: "2026-11-18T12:03:23Z"
lastReleaseAt: "2026-10-23T14:12:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["github-actions[bot]", "Nitjsefnie"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1dbe75a23b0c4b36d31d53f3b2d5d67f4ab964bbb99d8083a4a1aa4e64e1e3a/Nitjsefnie/claudit"
---

# claudit

**Claude Code Usage Dashboard** — a self-hosted web app for visualising AI
coding-session usage transcripts.

A FastAPI backend ingests transcripts from Cloudflare R2 (or a local `file://`
mirror), parses them into Postgres, and serves dashboards and raw transcripts
to a React + in-browser-Babel frontend (no build step). One deploy can ingest
several buckets and several transcript formats at once: Claude Code session
JSONLs, Codex rollouts, and the two Kimi CLI wire formats (kimi-code and
legacy).

## Scope

claudit **exposes statistics** about Claude Code usage: how much you spent,
how many tokens went where, cache-tier breakdowns, reply latency, tool-error
rate, and when you were active. It answers *how much*, *how many*, and *when*.
