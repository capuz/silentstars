---
repo: "Necmttn/ax"
name: "ax"
description: "the agent experience layer · observability + memory for AI coding agents (Claude Code + Codex) · local-first, typed, yours"
readmeQualityOk: true
url: "https://github.com/Necmttn/ax"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agent-memory", "agent-observability", "ai-agents", "bun", "claude-code", "codex", "developer-tools", "effect-ts", "evidence-graph", "llm-observability"]
stars: 101
forks: 11
openIssues: 70
closedIssues: 287
watchers: 0
contributors: 11
recentReleases: 8
createdAt: "2026-05-08T07:34:30Z"
lastCommitAt: "2026-08-25T04:09:38Z"
lastReleaseAt: "2026-06-01T15:35:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["Necmttn", "Missing-Identity"]
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

Under the hood, the `/retro` workflow pulls unreviewed sessions from the local
graph when you ask for them. It records a structured retro (*tried · worked ·
failed · next*) and turns repeated friction into proposals you review. Accepted
proposals become experiments with verdicts after 3, 10, and 30 sessions. The
next session reads what worked.

> *What did this sub-agent learn? Which experiments are still open?
> Which skills earned their keep? What did that branch cost in tokens?*
> `ax` answers these by reading what already happened.

## 60 seconds in

```bash
curl -fsSL ax.necmttn.com/install | bash…
