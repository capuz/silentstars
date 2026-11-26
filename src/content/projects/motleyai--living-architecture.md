---
repo: "MotleyAI/living-architecture"
name: "living-architecture"
description: "Claude Code plugin + CLI that keeps coding agents from eroding your architecture: normative principles attached to a LikeC4 model, which is also the import law for Python and TypeScript, plus an OpenSpec-generating PR flow."
readmeQualityOk: true
url: "https://github.com/MotleyAI/living-architecture"
homepage: "https://github.com/MotleyAI/living-architecture/blob/main/docs/living-architecture-in-questions-and-answers.md"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 27]
topics: ["agent-skills", "ai-coding", "arc42", "architecture-as-code", "architecture-enforcement", "c4-model", "claude-code", "claude-code-plugin", "coding-agents", "import-boundaries"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-25T12:33:07Z"
lastCommitAt: "2026-11-26T12:59:00Z"
lastReleaseAt: "2026-10-25T09:10:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["ZmeiGorynych"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1387463744/160da0ab-ff2f-4a7b-bbde-269fecad4161"
discussionCount: 0
---

# living-architecture

A Claude Code plugin + CLI for agents writing Python and TypeScript code

* **Normative principles attached to a
[LikeC4](https://likec4.dev) architecture model, which also serves as an import whitelist.** 

* **Enforced by a complete
PR workflow that generates [OpenSpec](https://github.com/Fission-AI/OpenSpec) changes, whose archives double as
ADRs.**

## Introduction

Every PR an agent writes can be reasonable on its own while the codebase still drifts, one random decision at a time.
Putting every rule for every component into CLAUDE.md bloats context to the point where they are all ignored anyway.
Random agent decisions from one PR are treated as design patterns by the next session, with the codebase gradually growing 
bizarre structure no one wanted. And six months later, nobody can say why the code is the way it is. 

The plugin, `la`, prevents architectural drifts via these interlocking components:
