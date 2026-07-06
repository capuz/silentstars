---
repo: "kstenerud/yoloai"
name: "yoloai"
description: "AI agent sandboxing done right."
readmeQualityOk: true
url: "https://github.com/kstenerud/yoloai"
homepage: "https://yoloai.dev"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["ai", "ai-agents", "aider", "claude", "codex", "docker", "gemini", "sandbox", "tmux", "yolo"]
stars: 118
forks: 5
openIssues: 6
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-02-24T13:56:57Z"
lastCommitAt: "2026-07-06T07:03:52Z"
lastReleaseAt: "2026-07-02T08:06:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["kstenerud"]
openGraphImageUrl: "https://opengraph.githubassets.com/13bce6f3d2c8f1b1e79b2ac0f5c9887ab9bdc759c323acaa088f863eaea91c1e/kstenerud/yoloai"
---

# yoloAI

**Sandboxed runner for AI coding agents. No more permission fatigue. Your files stay untouched until you say otherwise.**

AI coding agents want to edit your files and run commands, so you must choose between them constantly asking your permission, or bypassing permissions and risking a catastrophe.

Until now.

Let your agent live dangerously in a sandbox, then review the changes and decide what to keep.

```text
You                          Sandbox                        Your project
 │                              │                                │
 ├─ yoloai new fix-bug .        ├─ sandbox copy of project       │
 │                              │                                │
 ├─ << your prompt(s) >>        ├─ agent works freely            │
 │                              │  (no permission prompts)       │
 │                              │                                │
 ├─ yoloai diff fix-bug         ├─ shows what changed            │
 │                              │                                │
 ├─ yoloai apply fix-bug        │                                ├─ patches applied
 │  (you choose which ones)     │                                │
 │…
