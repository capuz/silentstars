---
repo: "vassiliylakhonin/agenda-intelligence-md"
name: "agenda-intelligence-md"
description: "Deterministic evidence-packet linter for claim-backed AI output. Reports packet completeness, not truth. CLI, Python API, MCP, A2A, Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/vassiliylakhonin/agenda-intelligence-md"
homepage: "https://pypi.org/project/agenda-intelligence-md/"
language: "JavaScript"
languages: ["JavaScript", "Python", "Solidity"]
languagePcts: [40, 36, 22]
topics: ["ai-agents", "json-schema", "mcp-server", "evidence-validation", "llm-evaluation", "python", "source-grounding", "claim-verification", "human-in-the-loop", "a2a"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T10:15:45Z"
lastCommitAt: "2026-09-23T08:46:25Z"
lastReleaseAt: "2026-05-06T06:52:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["vassiliylakhonin"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb603765e404d2063572937bc1685f5ebfc5e4fc566b59e8e4dfa759ff7fda67/vassiliylakhonin/agenda-intelligence-md"
discussionCount: 1
---

# Agenda Intelligence MD

**Agenda Intelligence MD** is a deterministic evidence-packet linter and compliance orchestration engine for claim-backed AI output. It provides verifiable trust boundaries, guardrail enforcement, and evidence-readiness triage across **A2A (Agent-to-Agent)**, **MCP (Model Context Protocol)**, **CLI / Python API**, and **Serverless Edge Workers (Cloudflare)**.

---

## Core concepts

Agenda Intelligence MD is a deterministic evidence-packet linter for claim-backed AI output.

Give it claims, the source IDs each claim relies on, optional quotations, and the supplied source text. It returns broken references, quote mismatches, lexical-support gaps, unmatched numbers, claims that negate the source they cite, and the next reviewer actions.

It reports **packet completeness**, not whether a claim is true:

- not a factuality verifier;
- no autonomous live source retrieval;
- no authorization, approval, or compliance decision;
- human review is required for every result.

---

## First run

Run the canonical synthetic packet from a source checkout:

```bash
git clone https://github.com/vassiliylakhonin/agenda-intelligence-md
cd agenda-intelligence-md
python -m…
