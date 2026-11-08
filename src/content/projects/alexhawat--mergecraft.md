---
repo: "alexhawat/mergeCraft"
name: "mergeCraft"
description: "An evidence-first AI code review engine combining deterministic analysis, model reasoning, independent verification, and policy-driven merge gates"
readmeQualityOk: true
url: "https://github.com/alexhawat/mergeCraft"
homepage: "https://github.com/alexhawat/mergeCraft#-get-started-in-3-steps"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["code-review", "llm", "python", "ai", "byok", "github-action", "pr-review", "self-hosted"]
stars: 12
forks: 5
openIssues: 8
closedIssues: 452
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-07-27T20:59:48Z"
lastCommitAt: "2026-11-08T14:14:20Z"
lastReleaseAt: "2026-10-29T10:55:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["alexhawat", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1314274177/bad6a684-bb57-492f-8084-218beb3bfc4d"
---

# mergeCraft

**AI-powered PR review as a standalone, [BYOK](https://github.com/alexhawat/mergeCraft/blob/HEAD/docs/glossary.md#byok) GitHub Action.**
No SaaS account. No dashboard. Your repo, your keys, your reviewers.

[**For LLM / Agents**](#for-agents) · [Problem](#problem) · [How it works in GitHub Action](#how-it-works) · [Install](#install) · [Features](#features) · [Docs](#docs)

[Agent skill](https://github.com/alexhawat/mergeCraft/blob/HEAD/skills/mergecraft/SKILL.md) · [AGENTS-mergecraft.md](https://github.com/alexhawat/mergeCraft/blob/HEAD/AGENTS-mergecraft.md) · [llms.txt](https://github.com/alexhawat/mergeCraft/blob/HEAD/llms.txt)

---

### One-line setup prompts

Open your coding agent in the repo you want reviewed, hit the copy button on
the block below, and paste. That is the whole install.

```text
Set up mergeCraft (BYOK AI PR review) in this repository.

Reference: https://github.com/alexhawat/mergeCraft/blob/main/AGENTS-mergecraft.md

Do all of this yourself, without asking me, except where step 4 says STOP:

1. Ensure `uv` is on PATH. If it is missing, install it:
     curl -LsSf https://astral.sh/uv/install.sh | sh     # macOS/Linux
     powershell -c "irm…
