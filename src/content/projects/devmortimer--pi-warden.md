---
repo: "DevMortimer/pi-warden"
name: "pi-warden"
description: "Zero-key runtime guardrails for Pi, Claude Code, and Codex — blocks destructive commands and secret exfiltration, enforces project rules, and breaks agent loops."
readmeQualityOk: true
url: "https://github.com/DevMortimer/pi-warden"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["guardrails", "pi-extension", "pi-package", "typesafe", "agent-guardrails", "claude-code", "codex", "coding-agents", "prompt-injection"]
stars: 199
forks: 32
openIssues: 1
closedIssues: 42
watchers: 2
contributors: 19
recentReleases: 10
createdAt: "2026-09-16T03:58:46Z"
lastCommitAt: "2026-11-24T14:09:33Z"
lastReleaseAt: "2026-09-24T08:03:10Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["DevMortimer", "NopeCharon", "jennymaeleidig"]
openGraphImageUrl: "https://opengraph.githubassets.com/99fa4e8b781320a497f0aee55052ab4d6bbd7033a1d112a40a10a95a1a84e25e/DevMortimer/pi-warden"
fundingLinks: ["GITHUB:https://github.com/DevMortimer"]
discussionCount: 0
---

# pi-warden

**Zero API keys required. $0 out of the box.** pi-warden stands between a coding agent and your machine. Install it with one command and ~90% of its protection runs locally in deterministic code — stopping destructive commands, blocking secret exfiltration after untrusted web reads, catching mechanical project-rule violations in `<1 ms`, reclaiming stale screenshots and logs without breaking prompt caches, and catching edit-revert and thrash loops before they burn your session.

Want semantic judgment on top? Run `/warden enable` to add [Jev](https://typesafe.ai) as optional semantic toppings (`~1` request per coding turn thanks to 95%-frugal gating): it judges subtle prose rules, unverified "done" claims, non-pattern irreversible actions, and smoothly declassifies routine developer pushes when the taint firewall would otherwise fail closed offline.

It runs inside [Pi](https://github.com/earendil-works/pi), and as hooks in Claude Code and Codex.
