---
repo: "mrwogu/promptscript"
name: "promptscript"
description: "Prompt-as-Code for Enterprise AI. Standardize, audit, and deploy instructions across any AI coding assistant."
readmeQualityOk: true
url: "https://github.com/mrwogu/promptscript"
homepage: "https://getpromptscript.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-tools", "claude", "cli", "cursor", "developer-experience", "devtools", "enterprise", "github-copilot", "promptscript", "typescript"]
stars: 380
forks: 5
openIssues: 35
closedIssues: 83
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-19T13:15:50Z"
lastCommitAt: "2026-10-31T19:00:52Z"
lastReleaseAt: "2026-01-30T22:50:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 30
maintainers: ["mrwogu", "dependabot[bot]", "zerone0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/9caffacccec82580f179272ca15db855ddc74444dcafbc84bf2a8b28eff5bb29/mrwogu/promptscript"
discussionCount: 0
---

# PromptScript

**Write your AI rules once. Every agent follows them.**

_One source for Claude Code, GitHub Copilot, Cursor, and 47 more tools. Define instructions,
skills, agents, MCP servers, hooks, and policies once, inherit them like code, and compile native
files for every tool._

[**Get started**](https://getpromptscript.dev/getting-started/) ·
[**Try the playground**](https://getpromptscript.dev/playground/) ·
[**Explore all features**](https://getpromptscript.dev/features/) ·
[**View target matrix**](https://getpromptscript.dev/reference/formatters/)

---

## What is PromptScript?

PromptScript is an open-source compiler for AI coding agent rules. `.prs` sources
define instructions, project standards, restrictions, skills, agents, MCP servers, hooks, and
workflows, while `promptscript.yaml` configures targets and the policies for skill extensions and prompts. The
compiler turns them into the native files each AI tool already knows: `CLAUDE.md` for Claude Code,
`.github/copilot-instructions.md` for GitHub Copilot, `.cursor/rules` for Cursor, and 47 more
targets.

Why does this matter? Every AI coding tool reads its own instruction files, in its own format, from
its own…
