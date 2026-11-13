---
repo: "yusing/mekugi"
name: "mekugi"
description: "The harness that provides better Agent and User Experiences."
readmeQualityOk: true
url: "https://github.com/yusing/mekugi"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-29T08:55:19Z"
lastCommitAt: "2026-11-13T11:18:36Z"
lastReleaseAt: "2026-11-11T04:58:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["yusing"]
openGraphImageUrl: "https://opengraph.githubassets.com/78e2c4a795f58171599e61335c5c007cb69309890593ffb36d6a3bd73cb95880/yusing/mekugi"
---

# mekugi

A mekugi is the small peg that pins a Japanese sword's handle to the blade.
Take it out and the handle comes off. Leave it in and the blade is still the
blade.

Mekugi keeps stock Codex agents working from current, compact context across
long sessions, compaction, and delegates, and lets you see what they are doing,
what they are about to do, and what they have done. Codex keeps editing,
execution, the sandbox, permissions, command sessions, and patch review.
Invocation overrides leave Codex configuration unchanged.

[Why Mekugi](#why-mekugi) · [Install](#install) · [Quick start](#quick-start) ·
[Guides](#guides) · [Documentation](#documentation)

## Why Mekugi

### Agents work from current, compact context

- **Compaction that rereads sources.** Codex context resets without generating a
  handover summary. Agents can [select files, skills and captured changes](https://github.com/yusing/mekugi/blob/HEAD/modules/agentguidance/SPEC.md#compaction-context)
  needed for unfinished work; Mekugi reads them before the conversation continues,
  so work resumes from current source text.
- **Agent-chosen checkpoints.** Agents can [compact at safe…
