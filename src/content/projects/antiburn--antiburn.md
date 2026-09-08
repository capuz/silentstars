---
repo: "antiburn/antiburn"
name: "antiburn"
description: "Small, fast, local, session-specific checks to reduce your token burn."
readmeQualityOk: true
url: "https://github.com/antiburn/antiburn"
homepage: "https://antiburn.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 23]
topics: ["ai-coding", "desktop-app", "developer-tools", "local-first"]
stars: 93
forks: 4
openIssues: 29
closedIssues: 36
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-08-12T06:11:00Z"
lastCommitAt: "2026-09-08T08:15:47Z"
lastReleaseAt: "2026-09-03T11:30:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["daveslutzkin", "martyportier", "songcarver"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1331676909/edd9d509-c34d-4e77-9e6a-23a6086b97b4"
discussionCount: 0
---

# antiburn

> Tiny, fast, local burn checks for all your coding sessions.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/3369144d-61b0-4b94-8373-41f2541cba95" />
</picture>

A little free desktop app to check your sessions for the most common causes of token burn - sessions that go too deep, subagents that go too hard, skills and MCPs that go unused, etc etc etc.

antiburn supports Claude Code, Codex, Cursor, GitHub Copilot, Cline, OpenCode, Kiro, Amp, Antigravity, Windsurf, and Pi. See the [support matrix](https://github.com/antiburn/antiburn/blob/HEAD/docs/support.md) for platform limits, discovery details, and local data storage.

## Checks

- Excess cache rehydration - cache writes are expensive; let's all work out how to avoid too many of them.
- Fast mode overuse - fast mode is great if you're not close to limit, but be careful if you are.
- Model overthinking - I know `xhigh` and `ultra` sound cool but they're usually better avoided.
- Old model usage - worth checking if you're still pinned to old models, especially in subagents.
- Overpowered subagents - using subagents on premium models is generally a bad idea.…
