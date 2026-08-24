---
repo: "sensedeal/cue-skills"
name: "cue-skills"
description: "Cue Skills for Agents"
readmeQualityOk: true
url: "https://github.com/sensedeal/cue-skills"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-20T02:08:41Z"
lastCommitAt: "2026-08-24T04:21:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["huhoo", "xfgong"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e9078879c765ff82a0482f370fab91592edc7ae8b775e6260996b22d3fd2a0a/sensedeal/cue-skills"
---

# cue-skills

**[English](https://github.com/sensedeal/cue-skills/blob/HEAD/README.md) · [中文](https://github.com/sensedeal/cue-skills/blob/HEAD/README.zh-CN.md)**

Open-source agent skills published by [Cue](https://cuecue.cn) (sensedeal).

A **skill** is a portable instruction bundle that any AI agent ([Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills), Codex CLI, Gemini CLI, …) can load to gain a new capability — without modifying the agent itself. This repo collects the skills Cue maintains for public use.

## DSH users: install the Cue Omni Reader bundles

Running [DeepSeek Harness](https://github.com/deepseek-harness)? Add the two Cue bundles to a profile and get Cue Omni Reader as native `mcp__omni__*` tools:

```sh
dsh plugin --profile web add @cueai/dsh-omni-reader
dsh plugin --profile web add @cueai/dsh-omni-reader-guard   # optional SSRF/consent guard
```

Restart dsh; the model then sees `mcp__omni__parse` / `…get_parse_status` / `…read_result` / `…read_outline` / `…save_result` / `…cancel_parse` / `…discard_result`. Set `CUE_API_KEY` (+ optional `OMNI_ALLOWED_ROOTS`) via `$DSH_HOME/.env`. Guide:…
