---
repo: "bman654/clodex"
name: "clodex"
description: "Bridge Claude Code to OpenAI models — OpenAI API key or ChatGPT/Codex-plan OAuth"
readmeQualityOk: true
url: "https://github.com/bman654/clodex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 39
forks: 12
openIssues: 7
closedIssues: 5
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-20T06:03:45Z"
lastCommitAt: "2026-08-20T22:46:07Z"
lastReleaseAt: "2026-07-23T14:37:54Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 41
maintainers: ["bman654", "github-actions[bot]", "camjac251"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec4f2ccdd872359e58ac21405e9acebe9d67967ff62634d393acd5252f85711b/bman654/clodex"
---

# clodex

**clodex** lets you use your ChatGPT/Codex plan, OpenAI API models, or OpenCode Go models with Claude Code as first-class model choices.
You can use them anywhere you use Anthropic models like Opus and Sonnet — as the main session model, and in subagents, workflows, and agent teams. Clodex integrates them directly into Claude Code, using Claude Code's system prompt.
It works with your existing Claude Code plan as well as your Codex plans WITHOUT violating Anthropic's ToS.
No messing with CMUX or child codex processes or any of that stuff.
You can finally have Fable and Sol work together to solve the hardest problems.

You can also run clodex as a local OpenAI-compatible endpoint in front of your Codex plan, so any OpenAI-compatible client can use it.

> clodex is derived from the original [relay-ai](https://github.com/jacob-bd/relay-ai) project, heavily modified and streamlined for this one use case, with the full commit history preserved.

Contributions are welcome — see [CONTRIBUTING.md](https://github.com/bman654/clodex/blob/HEAD/CONTRIBUTING.md) for how to scope a PR and what the quality bar is.

## Quick Start (ChatGPT/Codex plan)

```bash
npm install -g…
