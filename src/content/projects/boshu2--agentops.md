---
repo: "boshu2/agentops"
name: "agentops"
description: "The operational layer for coding agents. Memory, validation, and feedback loops that compound between sessions."
url: "https://github.com/boshu2/agentops"
homepage: "https://www.12factoragentops.com"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [69, 26]
topics: ["ai-agents", "claude-code", "claude-code-plugins", "vibe-coding", "claude-marketplace", "devops", "codex", "codex-plugin", "cursor", "opencode-plugin"]
stars: 396
forks: 40
openIssues: 16
closedIssues: 43
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2025-11-05T19:18:56Z"
lastCommitAt: "2026-06-23T06:40:14Z"
lastReleaseAt: "2026-02-01T17:20:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 28
maintainers: ["boshu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/29aeefdd85fa954df3e290e16a7406960e80eef57d9bc37e25ea43d039fbc880/boshu2/agentops"
discussionCount: 1
---

# AgentOps

### Autonomous code validation for coding agents

Coding agents can produce plausible code that is still wrong. AgentOps helps answer the two questions that decide whether you can trust the work: **is the code right, and is the agent output proven enough to grant more autonomy?** It sits on top of the agent you already use (Claude Code, Codex, Cursor, OpenCode) and adds the validation membrane, evidence trail, and repo-local corpus that make that judgment repeatable.

</div>

---

## See it work

![The AgentOps loop in Claude Code: /discovery builds a bead graph, /crank fans sub-agents out in waves, /validate --mixed gets a Claude + Codex verdict](docs/assets/hero.gif)

<sub><code>/discovery</code> → bead graph · <code>/crank</code> → sub-agents in waves · <code>/validate --mixed</code> → real Claude + Codex verdict. Live sessions. <a href="docs/assets/hero.mp4">MP4</a></sub>

</div>

AgentOps breaks intent into bounded slices, gives each a failing test and a write scope, and makes every phase boundary a gate that records evidence. The agent starts loaded with prior decisions and learnings instead of cold:

```text
> /council --mixed validate this PR

[council]…
