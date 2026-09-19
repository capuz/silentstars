---
repo: "gtrabanco/agentic-workflow"
name: "agentic-workflow"
description: "Stack-agnostic agentic-programming workflow skills + documentation scaffold"
readmeQualityOk: true
url: "https://github.com/gtrabanco/agentic-workflow"
homepage: "https://agwo.party"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [78, 20]
topics: ["agents", "agentskills", "claude-ai", "claude-code", "claude-skills", "skills", "workflow"]
stars: 21
forks: 5
openIssues: 20
closedIssues: 103
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T18:35:09Z"
lastCommitAt: "2026-09-19T08:15:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 48
maintainers: ["gtrabanco"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1259670522/53e3c46e-5446-44ec-a27c-ca7f69318a4d"
---

</p>

  </a>
  <br>
  <sub style="font-size: 0.75em;"><code>ship-roadmap</code> opening a PR end to end on a sample repository — click to watch</sub>
</p>

# Agentic Workflow Skills

A reusable set of **agent skills** that run a disciplined, doc-driven workflow
for building software with agents — from idea/issue to a reviewed, classified,
merge-ready change. The skills are **project-adaptive**: they discover and obey
each repository's own guide, architecture, roadmap and style docs at runtime, so
the same workflow works on any stack.

They are plain Markdown (`SKILL.md` files), so they work with **any agent** that
reads skills — Claude Code, Cursor, Codex, OpenCode, Cline, and
[70+ others](https://skills.sh) — installed with the
[`skills`](https://github.com/vercel-labs/skills) CLI (see
[Install](#install)).

> The examples in `docs/` are generic and illustrative; the skills
> themselves are stack-agnostic and architecture-agnostic.

> ## ⚠️ Breaking change (v3, 2026-07-04): the default branch is now model-agnostic
>
> `npx skills add gtrabanco/agentic-workflow` (no `#ref`) now installs what used
> to be the **`#inheritance`** variant: no skill carries `model:`/`effort:`
>…
