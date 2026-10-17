---
repo: "logandoo/vibeweaver"
name: "vibeweaver"
description: "A bounded, hard-gated graph-engineered state machine, written as a skill — runs on any agent harness, tuned best for opencode so far： full skill, mini variant, and A/B benchmark harness"
readmeQualityOk: true
url: "https://github.com/logandoo/vibeweaver"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [75, 23]
topics: ["agent-skill", "agent-skills", "graph-engineering", "vibe-coding", "vibecoding", "opencode", "opencode-ai", "opencode-plugin", "opencode-plugins", "opencode-skill"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T06:23:23Z"
lastCommitAt: "2026-10-17T07:59:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["logandoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/44b3e15eba4a0b34d27a66df41702c969ed3845bfeb9265912b35f6320049ee6/logandoo/vibeweaver"
---

# Vibeweaver

Vibeweaver doesn't make a model stronger; it makes the ability already there actually count.

## Quickstart

```bash
git clone https://github.com/logandoo/vibeweaver
bash vibeweaver/vibeweaver/install.sh   # mkdir -p + idempotent (cp -r breaks on missing parents / nests on re-run)
```

Restart opencode and ask for the work; the skill triggers on implement /
modify / debug / deploy coding tasks (not on Q&A or pure consulting).
Saying "strictly follow vibeweaver" at the start of the request makes triggering
essentially certain. Plugins, optional extras, and the Windows path:
[Install](#install).

## Why it exists

Give the human brain free rein and it runs on cognitive bias and
after-the-fact rationalization. Science is the countermeasure we built for it:
preregistration, blind review, lab notebooks, reproducibility. An LLM is the
same kind of machine — brilliant at pattern completion, and just as good at
making up its reasoning after the fact.

Vibeweaver puts coding work under the same discipline:

- Acceptance criteria are written before any action and cannot be relaxed
  mid-loop — preregistration.
- Reviewers and fresh-context verifiers judge the diff and the…
