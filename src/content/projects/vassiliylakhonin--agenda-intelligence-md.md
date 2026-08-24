---
repo: "vassiliylakhonin/agenda-intelligence-md"
name: "agenda-intelligence-md"
description: "Checks AI claim/source packets before human review: missing references, quote mismatches, weak lexical support, and unmatched numbers. CLI, Python API, and MCP."
readmeQualityOk: true
url: "https://github.com/vassiliylakhonin/agenda-intelligence-md"
homepage: "https://pypi.org/project/agenda-intelligence-md/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 42]
topics: ["ai-agents", "json-schema", "mcp-server", "evidence-validation", "llm-evaluation", "python", "source-grounding", "claim-verification", "human-in-the-loop"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T10:15:45Z"
lastCommitAt: "2026-08-24T04:22:49Z"
lastReleaseAt: "2026-05-06T06:52:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["vassiliylakhonin"]
openGraphImageUrl: "https://opengraph.githubassets.com/1701be33a955135111640c143bc3da9f102bddc470d419b7af9e74220eb030c0/vassiliylakhonin/agenda-intelligence-md"
discussionCount: 1
---

# Agenda Intelligence MD

Agenda Intelligence MD is a deterministic evidence-packet linter for claim-backed AI output.

Give it claims, the source IDs each claim relies on, optional quotations, and the supplied source text. It returns broken references, quote mismatches, lexical-support gaps, unmatched numbers, claims that negate the source they cite, and the next reviewer actions.

It reports **packet completeness**, not whether a claim is true:

- not a factuality verifier;
- no autonomous live source retrieval;
- no authorization, approval, or compliance decision;
- human review is required for every result.

## First run

Run the canonical synthetic packet from a source checkout:

```bash
git clone https://github.com/vassiliylakhonin/agenda-intelligence-md
cd agenda-intelligence-md
python -m venv .venv
.venv/bin/python -m pip install -e .
.venv/bin/agenda-intelligence check examples/evidence-packet/request.json
```

Expected shape:

```text
packet_status=packet_complete claims=2 sources=1 factuality=not_assessed
  c1: packet_complete (lexical_support=supported, coverage=1.0)
  c2: packet_complete (lexical_support=supported, coverage=1.0)
```

Use JSON for an agent loop or CI…
