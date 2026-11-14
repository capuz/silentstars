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
stars: 14
forks: 8
openIssues: 0
closedIssues: 708
watchers: 1
contributors: 6
recentReleases: 5
createdAt: "2026-05-07T14:08:53Z"
lastCommitAt: "2026-11-14T22:01:04Z"
lastReleaseAt: "2026-10-23T14:12:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 63
maintainers: ["github-actions[bot]", "Nitjsefnie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a2f25b3fdd47b1f6e686635bfd98f0689c1e0e2c6e47d673ad08fbed25b849f/Nitjsefnie/claudit"
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

It is deliberately **not** a session-analysis, coaching, or auditing tool. It
does not review your transcripts for "what went wrong", score session quality,
or synthesize an AI narrative about your work — Claude Code's own `/insights`
already does that. claudit puts the numbers in front of you and stays out of
the way; interpreting them is your job, not the dashboard's. PRs that add
qualitative analysis, an "auditor" agent, or a chatbot…
