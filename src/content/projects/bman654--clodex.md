---
repo: "bman654/clodex"
name: "clodex"
description: "Bridge Claude Code to OpenAI models — OpenAI API key or ChatGPT/Codex-plan OAuth"
readmeQualityOk: true
url: "https://github.com/bman654/clodex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 27
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 8
createdAt: "2026-07-20T06:03:45Z"
lastCommitAt: "2026-07-22T06:09:29Z"
lastReleaseAt: "2026-07-22T06:10:09Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 49
maintainers: ["bman654", "jacob-bd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7c7be172af66e71fa23a6e9245635786b1224f45f6cac5a3db77e204e1bed65/bman654/clodex"
---

# clodex

**clodex** lets you use your ChatGPT/Codex plan or OpenAI models with Claude Code as if they were Anthropic models.
You can use them anywhere you use Anthropic models like Opus and Sonnet — as the main session model, and in subagents, workflows, and agent teams. Clodex integrates them directly into Claude Code, using Claude Code's system prompt.
It works with your existing Claude Code plan as well as your Codex plans WITHOUT violating Anthropic's ToS.
No messing with CMUX or child codex processes or any of that stuff.
You can finally have Fable and Sol work together to solve the hardest problems.

You can also run clodex as a local OpenAI-compatible endpoint in front of your Codex plan, so any OpenAI-compatible client can use it.

> clodex is derived from the original [relay-ai](https://github.com/jacob-bd/relay-ai) project, heavily modified and streamlined for this one use case, with the full commit history preserved.

Contributions are welcome — see [CONTRIBUTING.md](https://github.com/bman654/clodex/blob/HEAD/CONTRIBUTING.md) for how to scope a PR and what the quality bar is.

## Quick Start (ChatGPT/Codex plan)

```bash
npm install -g @bman654/clodex          # 1.…
