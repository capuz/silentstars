---
repo: "Necmttn/ax"
name: "ax"
description: "the agent experience layer · observability + memory for AI coding agents (Claude Code + Codex) · local-first, typed, yours"
url: "https://github.com/Necmttn/ax"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agent-memory", "agent-observability", "ai-agents", "bun", "claude-code", "codex", "developer-tools", "effect-ts", "evidence-graph", "llm-observability"]
stars: 70
forks: 8
openIssues: 17
closedIssues: 150
watchers: 0
contributors: 10
recentReleases: 10
createdAt: "2026-05-08T07:34:30Z"
lastCommitAt: "2026-06-30T06:51:54Z"
lastReleaseAt: "2026-06-01T15:35:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["Necmttn", "ak-devmode"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1232710515/2a715a29-2e0e-48d3-ae61-994733d81ee9"
discussionCount: 1
---

# ax

###### the retro loop for AI coding agents

**Make your agent learn.**
Turn every agent session into a better next run.

---

Every sub-agent you spawn finishes its work and disappears. Whatever it
figured out - which command failed three times before the right one, which
file actually mattered, which approach to skip - dies with it. The next
sub-agent rediscovers it from scratch. Your own next session does too.

`ax` watches every session your harness runs, spots the mistakes it
repeats, and turns them into small, repo-specific fixes you review and
apply - one at a time.

Under the hood, it's the loop that closes before the session ends. A Stop hook fires
at session-end (main or sub-agent), asks the agent for a structured retro
(*tried · worked · failed · next*), and indexes the result as a typed
experiment in a local graph. Friction patterns become proposals you
triage. Accepted proposals become experiments with t+7 / t+30 / t+90
verdicts. The next session reads what worked.

> *What did this sub-agent learn? Which experiments are still open?
> Which skills earned their keep? What did that branch cost in tokens?*
> `ax` answers these by reading what already happened.

##…
