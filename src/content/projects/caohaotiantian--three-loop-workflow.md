---
repo: "caohaotiantian/three-loop-workflow"
name: "three-loop-workflow"
description: "A disciplined three-loop workflow (Design Doc -> Impl Doc -> Development) for non-trivial software changes, packaged as a Claude skill."
readmeQualityOk: true
url: "https://github.com/caohaotiantian/three-loop-workflow"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [67, 33]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-26T02:39:29Z"
lastCommitAt: "2026-10-31T07:45:55Z"
lastReleaseAt: "2026-07-08T02:46:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 39
maintainers: ["caohaotiantian"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b31c9c477fae1b83bbef1eff8eaf491012f21cb465c9f85e3851c3eb32a43b/caohaotiantian/three-loop-workflow"
---

# three-loop-workflow

A disciplined workflow for non-trivial software changes, packaged as a portable Agent Skill (runs on Claude Code, Codex, and opencode).

中文版本 → [README-cn.md](https://github.com/caohaotiantian/three-loop-workflow/blob/HEAD/README-cn.md)

> **v3 is a ground-up rewrite and a breaking change from v2.** Replace the folder; do not copy into it.
> If you have v2 installed, read [Upgrading from v2](#upgrading-from-v2) first. What changed and why:
> [docs/why-v3.md](https://github.com/caohaotiantian/three-loop-workflow/blob/HEAD/docs/why-v3.md).

## What's in this repo

- **`three-loop-workflow/`** — a Claude skill that operationalizes the workflow. Drop this folder into Claude Code or Claude.ai and Claude will follow it on any non-trivial code change.

The skill is four Markdown files plus its `LICENSE`: `SKILL.md`, which is always loaded; `references/deep.md`, which only Deep work reads; `references/parallel.md`, which only work split across writers reads; and `references/writing.md`, which selects writing rules by text type. They are the single source of truth.

## What's new

**v3.5.1** replaces the mandated simplified-English standard with judgment-based…
