---
repo: "volekerb/hivemill"
name: "hivemill"
description: "A self-hosted software factory of Claude Code agents with review, QA and a judge merge gate."
readmeQualityOk: true
url: "https://github.com/volekerb/hivemill"
homepage: "https://github.com/volekerb/hivemill#readme"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["agent-orchestration", "agentic-workflow", "ai-agents", "automation", "claude", "claude-code", "cli", "code-review", "developer-tools", "llm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-10-28T10:44:32Z"
lastCommitAt: "2026-10-31T09:53:51Z"
lastReleaseAt: "2026-10-30T12:59:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["volekerb"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3be215deae25d0d61025e2d89eb8c745df015aae58e6f2c9c2d760375268e70/volekerb/hivemill"
discussionCount: 0
---

https://github.com/user-attachments/assets/dfec91f4-de05-4592-aaec-3662ce674c4a

## What you get

You describe what you want built to one boss agent. A director staffs a team, and a chain of coders, QA, reviewers and a judge ships it as pull requests. The agent that writes a change never reviews, tests or merges it. Hivemill's CLI is `factory`.

## One change, five steps

1. **You ask.** Describe what you want to the boss. It becomes a goal with success criteria.
2. **A team forms.** A director staffs a lead, who plans tasks. Each task gets its own worktree and branch.
3. **A coder builds.** It opens a pull request and stops. It cannot merge or review.
4. **Two others check.** A reviewer reads the diff. QA runs the tests against the acceptance criteria.
5. **A judge decides.** Both pass, it merges. Either fails, it goes back with findings. Every verdict is stored.

The roles and the merge gate as diagrams are under [How it works](#how-it-works).

The factory runs on [herdr](https://herdr.dev), the terminal multiplexer that hosts the agent panes ([source](https://github.com/herdrdev/herdr), pinned release [v0.9.5](https://github.com/herdrdev/herdr/releases/tag/v0.9.5)).

##…
