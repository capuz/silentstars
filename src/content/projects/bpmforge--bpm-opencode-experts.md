---
repo: "bpmforge/bpm-opencode-experts"
name: "bpm-opencode-experts"
description: "Expert system for OpenCode — 11 specialist agents, 14 skills, SDLC workflow. Works with any LLM (Claude, OpenAI, Gemini, Ollama, LM Studio, 75+ providers)."
url: "https://github.com/bpmforge/bpm-opencode-experts"
language: "Shell"
languages: ["Shell"]
languagePcts: [71]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-04-06T15:11:37Z"
lastCommitAt: "2026-06-24T00:21:23Z"
lastReleaseAt: "2026-06-24T00:02:15Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["bpmforge"]
openGraphImageUrl: "https://opengraph.githubassets.com/a064f9aeab33500f0fd09369c456ddf278968b967c7fb696d92ac7eb13109790/bpmforge/bpm-opencode-experts"
---

# BPM OpenCode Experts

Expert agent system for [OpenCode](https://opencode.ai) — 39 primary expert agents + 31 cluster specialists (security, code-review, performance, onboarding, game dev), 31 skills, a 4-mode SDLC workflow, full git lifecycle management, and 53 automated validators that enforce quality gates at every phase. Works with cloud frontier models and small local models (32k LM Studio/Ollama) via tier detection, compact agent variants, and capability-probed delegation.

**Not sure which command to run? Just describe your goal:** `/guide` is the front door — it routes any plain-English goal ("securely check all my source and help fix the issues", "this codebase is unfamiliar", "harden before launch") to the right expert and drives the workflow, always offering the next step.

Sibling project: [`claude-experts`](https://github.com/bpmforge/claude-experts) — same experts for Claude Code, generated from this repo.

## Install

```bash
git clone https://github.com/bpmforge/bpm-opencode-experts.git
cd bpm-opencode-experts
./install.sh
```

Common flags: `--project` (install into `.opencode/` instead of global), `--compact` (overlay compact agent variants for 32k local…
