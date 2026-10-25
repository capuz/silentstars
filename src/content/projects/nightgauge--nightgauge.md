---
repo: "nightgauge/nightgauge"
name: "nightgauge"
description: "Open-core, AI-powered issue-to-PR pipeline with enforced quality gates."
readmeQualityOk: true
url: "https://github.com/nightgauge/nightgauge"
homepage: "https://nightgauge.dev"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [50, 46]
topics: ["agents", "ai", "automation", "cli", "code-review", "devtools", "github", "gitlab", "golang", "sdlc"]
stars: 7
forks: 1
openIssues: 182
closedIssues: 1164
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-22T00:33:02Z"
lastCommitAt: "2026-10-25T08:49:08Z"
lastReleaseAt: "2026-09-17T16:33:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 65
maintainers: ["markamccorkle", "dependabot[bot]", "nightgauge-pipeline[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1308234206/f776f71b-daf4-4195-877f-ecd94bac3e32"
discussionCount: 0
---

# Nightgauge

**Work the day shift. Ship the night shift.**

An open-source, local-first issue-to-PR pipeline for AI coding agents,<br>
with a quality gate at every stage between the issue and the merge.

[Website](https://nightgauge.dev) ·
[Quick start](#quick-start) ·
[How it works](#the-pipeline) ·
[Adapters](#adapters) ·
[Docs](#documentation) ·
[Releases](https://github.com/nightgauge/nightgauge/releases) ·
[Contributing](https://github.com/nightgauge/nightgauge/blob/HEAD/CONTRIBUTING.md)

## What you get

**One issue in, one PR out.** Six stages take a GitHub issue from pickup
through planning, implementation and validation to a merged pull request.

**Gates, not vibes.** Every stage is checked by deterministic
[quality gates](#quality-gates), not just a model saying it worked.

**Budgets and guardrails.** Turn, wall-clock and token limits are enforced
outside the model, and a stage that breaches one is stopped.

**Bring your own agent.** Claude Code is the primary path; Codex is beta;
Gemini CLI, Copilot CLI and OpenCode are experimental. See
[Adapters](#adapters).

**Watch it anywhere.** VS Code dashboard and board views, the CLI, and live
status in Discord, Slack or…
