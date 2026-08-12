---
repo: "tackeyy/mission"
name: "mission"
description: "Quality-gated autonomous mission completion loop for Claude Code and Codex (plan, execute, review, score, iterate)."
readmeQualityOk: true
url: "https://github.com/tackeyy/mission"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agentic-workflow", "ai-agents", "claude-code", "codex", "loop-engineering", "oss", "plugins", "quality-gate", "react-loop", "skills"]
stars: 7
forks: 0
openIssues: 5
closedIssues: 204
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-15T11:40:15Z"
lastCommitAt: "2026-08-12T05:13:45Z"
lastReleaseAt: "2026-07-05T16:18:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["tackeyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b0139aeefd00af4ffcaa8c1dd724d357859a03160b26dac414c497c5e8c0046/tackeyy/mission"
---

# mission

</p>

**English** | [Japanese](https://github.com/tackeyy/mission/blob/HEAD/README.ja.md)

`mission` is an OSS loop-engineering plugin for Claude Code and Codex. It keeps
agentic work moving until a recorded plan, reviewer evidence, aggregated score,
and state gate say the mission is actually done.

It plans, executes, collects `mission-review/1` reviewer output, aggregates that
review evidence into `push-score --scoring-json`, and iterates until the
configured threshold is reached. A Stop hook keeps the loop from ending early
while an active mission is still below the passing gate.

> Prompt engineering tells an agent what to do. Loop engineering defines how the
> agent keeps working until the job is actually done.

Use `mission` when the problem is not "what prompt should I write?" but "how do I
stop an agent from declaring success before the work passes a quality gate?"

## Loop Engineering

`mission` is a quality-gated loop for multi-step agent work:

```text
plan -> execute -> review -> aggregate score -> iterate
```

It is designed for the loop-engineering moment: recurring agent systems,
workflows, skills, plugins, and sub-agents are becoming the unit of…
