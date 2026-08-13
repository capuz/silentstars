---
repo: "magicpro97/vibeflow"
name: "vibeflow"
description: "Local-first CLI that orchestrates Claude Code, Codex & GitHub Copilot CLI with guardrails"
readmeQualityOk: true
url: "https://github.com/magicpro97/vibeflow"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 8
forks: 3
openIssues: 3
closedIssues: 287
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-06-07T03:48:44Z"
lastCommitAt: "2026-08-13T05:19:18Z"
lastReleaseAt: "2026-06-23T15:58:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 66
maintainers: ["magicpro97", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e0b71d55e5e55575932110f5e470a60a4313629930dcf4b5228fcb3c09fe55/magicpro97/vibeflow"
---

# VibeFlow

  <strong>The local-first orchestrator for AI coding agents.</strong><br>
  Drive Claude Code, Codex & GitHub Copilot CLI with a confidence gate, source protection, and verified completion.
</p>

</p>

</p>

## Purpose

VibeFlow is a local-first npm CLI tool that opens a visual web UI and helps users run AI-assisted software development workflows using Claude Code, Codex CLI, and GitHub Copilot CLI out-of-the-box.

The tool acts as the main orchestrator. It collects task context, reads project sources, selects skills, generates tool-specific instruction files, dispatches AI coding engines, verifies results, and continuously improves local skills based on lessons learned.

On a fresh clone, arm the guardrail before any human edit:

```bash
./scripts/guardrail-on.sh
```

See issue #162 (orchestrator-first / F1) for the full rationale.

## Recommended name and command

Product name: **VibeFlow**

Recommended npm package and command:

```bash
npx @magicpro97/vibeflow
```

After global install:

```bash
npm install -g @magicpro97/vibeflow
vf
```

`vf` is the short command for day-to-day use.

## Install and use

```bash
npx @magicpro97/vibeflow            # run without…
