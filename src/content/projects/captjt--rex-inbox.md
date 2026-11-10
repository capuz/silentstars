---
repo: "captjt/rex-inbox"
name: "rex-inbox"
description: "One inbox for your coding agents, on top of Rex: approvals, questions, failures and messages, on your Mac and your phone."
readmeQualityOk: true
url: "https://github.com/captjt/rex-inbox"
homepage: "https://www.superlogical.com/rex"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [55, 20]
topics: ["agent-orchestration", "ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "inbox", "macos", "menubar-app", "notifications"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-11-06T16:00:21Z"
lastCommitAt: "2026-11-10T14:49:44Z"
lastReleaseAt: "2026-11-10T13:42:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["captjt"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1448460147/43860dff-3c18-4620-be0d-a94186519ef5"
---

# rex-inbox

Everything your Rex agents need from you, and messages between them.

[Rex](https://www.superlogical.com/rex) already runs your agents' panes and
knows what each one is doing: Claude Code and Codex report `working`,
`blocked`, `done` and `error` on their own (OSC 7501). rex-inbox turns that
into one inbox, lets agents message each other and you, and lets you
answer permission prompts without going to the pane. It also starts new
agents, on this Mac or any machine in `rex hosts`, and says what each
agent did when it finished.

The idea comes from [Plannotator](https://github.com/backnotprop/plannotator)'s
[Inbox](https://plannotator.ai/inbox), by [@backnotprop](https://github.com/backnotprop).
See [Inspiration](#inspiration).

```
$ rex-inbox ls
Needs you
  #17  permission  Claude Code  solar-isle/alpha  ~/git/app  12s  approve Bash: rm approved.txt
Finished
  #12              Claude Code  restless-cliff/shell  ~/git/web  4m   Fixed the flaky retry test. Tests pass. Not committed
Messages
  #7   unread  from solar-isle/planner  1m  Pick a cache

$ rex-inbox approve 17
#17 approved; the pane is now working
```

> Rex is in private beta. rex-inbox needs a Rex build whose…
