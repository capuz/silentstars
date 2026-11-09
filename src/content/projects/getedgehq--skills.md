---
repo: "getedgehq/skills"
name: "skills"
description: "Edge finds task-fit agent skills, shows available evidence, and loads pinned versions into AI agents."
readmeQualityOk: true
url: "https://github.com/getedgehq/skills"
homepage: "https://getedge.cc"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [51, 25]
topics: ["agent-skills", "agents", "ai-agents", "anthropic", "claude", "claude-code", "claude-skills", "llm", "mcp", "skills"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-10T06:03:13Z"
lastCommitAt: "2026-11-09T04:35:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["federicodeponte", "federocketlist"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c70542d17a7e0a6dc48c2a4c162fc807ce046c2d4d751c7b74135a39160ec09/getedgehq/skills"
---

# Edge Skills

Edge gives your AI agent the right expert skill for the task at hand. It searches 100,000+ security-screened public skills, picks the best fit, and loads a pinned version for that task. Works in Claude Code, Codex, Cursor and the Claude app.

**Using Claude Code or Codex? Add skill discovery:**

```bash
npx skills add getedgehq/skills --skill edge-find-skills
```

**Set up Edge:** paste this into Claude Code, Codex or Cursor:

```text
Set up Edge for me: fetch https://getedge.cc/SKILL.md?ref=gh-skills with curl, read it, and follow it
```

After setup, your agent can load any skill in this repository automatically when a task needs it. Details on [getedge.cc](https://getedge.cc/?ref=gh-skills).

## Benchmarks

Explore [Edge's benchmark evidence](https://github.com/getedgehq/skills/blob/HEAD/benchmarks/): published results, study protocols, task manifests and reanalysis scripts, alongside credited external research. Browse the [interactive benchmarks](https://getedge.cc/benchmarks/) for outcomes and method details.

## What can Edge find?

These are examples returned by production `find_skill` on 2026-09-29; they are third-party catalog results, not packages…
