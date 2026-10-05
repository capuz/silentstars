---
repo: "BrennonTWilliams/little-loops"
name: "little-loops"
description: "A decision engine for Claude Code. MIT licensed."
readmeQualityOk: true
url: "https://github.com/BrennonTWilliams/little-loops"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["agent-tooling", "ai-engineering", "claude-code", "eval-driven-dev"]
stars: 6
forks: 2
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-03T00:08:38Z"
lastCommitAt: "2026-10-05T10:45:43Z"
lastReleaseAt: "2026-02-14T04:12:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["BrennonTWilliams"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a53ada4ecbc28df4518f1935c4eacf48aca33ef7f2d27859f98dca8c3cc2b63/BrennonTWilliams/little-loops"
discussionCount: 0
---

# little-loops

**The toolkit for long-horizon, eval-gated AI software development.**

Today's coding agents do small tasks well and ship features poorly. The model isn't the ceiling — the session is. little-loops removes it with the three things raw agents are missing: **durability** (the run outlives the chat), **consistency** (the toolbelt is the process), and **verification** (the harness is the spec).

Stop babysitting chats. Start shipping features.

```bash
pip install little-loops
ll-init                                            # detects your stack, writes config
ll-loop run general-task "fix the lint warnings"   # your first self-verifying loop
```

Built for [Claude Code](https://docs.anthropic.com/en/docs/claude-code), with host adapters for Codex, Kimi Code, and Qwen Code; OpenCode and Pi adapters are not yet available. MIT-licensed.

## 1. Run agents until done

The unit of work is the feature, the sprint, or the overnight optimization — not a single chat. Every loop is a finite-state machine whose state is checkpointed to disk after every transition, so runs survive terminal close, context exhaustion, and laptop sleep — `ll-loop resume` picks up mid-trajectory,…
