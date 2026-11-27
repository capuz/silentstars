---
repo: "lgalabru/axel"
name: "axel"
description: "Agent orchestration, designed for Rex."
readmeQualityOk: true
url: "https://github.com/lgalabru/axel"
homepage: "https://axel.md"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["claude-code", "codex", "git", "llm", "worktree-manager", "rex"]
stars: 329
forks: 22
openIssues: 6
closedIssues: 10
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-01-29T17:22:08Z"
lastCommitAt: "2026-11-27T16:29:05Z"
lastReleaseAt: "2026-11-05T19:19:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["lgalabru", "jonleopard", "SaeedNoshadi89"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1145325201/31d04a5e-7d1e-4ed4-855e-c0942186f0e6"
---

Threads and named agents, back in the terminal.</b>

---

```sh
# Two agents: one builds, one reviews with another model
axel agent new terra codex
axel agent new opus claude/opus

# A thread: terra does the work, then hands the diff to opus
axel thread new --agent terra "add retries to the webhook sender, then ask @opus for a review"
```

Or run `axel` in Rex and type the same thing into the launcher that floats over your window.
The thread keeps going when you close the laptop, and you can pick it up from any machine.

## Key features

### 🧵 Threads, not chat tabs

A thread is an intent and everything done about it. It outlives the agent's process, the
pane and the machine: run several at once, resume tomorrow, settle it when it's done. Every
change is a signed event, so copies on other machines merge.

### 🪪 Named agents

A team of specialists instead of one assistant that knows everything. `terra` builds with a
few skills for your stack; `opus` reviews with another model. Each has its own Ed25519 key,
permissions, budget and inbox, and loads only its own skills.

```sh
axel agent new opus claude/opus --skills review
axel send "@opus please review the diff"
```
