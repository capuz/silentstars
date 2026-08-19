---
repo: "MongLong0214/commitlore"
name: "commitlore"
description: "Git-native decision memory for Claude Code, Codex, Cursor and other coding agents. Preserve constraints and rejected alternatives; surface only the decisions still in force."
readmeQualityOk: true
url: "https://github.com/MongLong0214/commitlore"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["claude-code", "git", "mcp", "agent-memory", "ai-memory", "codex", "coding-agents", "context-engineering", "decision-log", "developer-tools"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 345
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-26T03:53:22Z"
lastCommitAt: "2026-08-19T04:08:16Z"
lastReleaseAt: "2026-08-09T00:05:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["MongLong0214", "commitlore-canonical-build[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/246f4566be72420d972603a33dc3ecc9715a1f842a9dfeb47cd2568100cc3387/MongLong0214/commitlore"
---

</p>

</p>

  <strong>English</strong> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.zh-CN.md">简体中文</a>
</p>

# CommitLore

**Your coding agent keeps re-proposing things your team already rejected.**
CommitLore keeps those decisions in Git and hands the agent the ones still in
force, before it edits the file.

CommitLore has no hosted service; it keeps its records in Git. Once its MCP
server or hook returns context, the host handles that context under its own
policy; CommitLore does not control that data flow.

**Two halves, and only one of them is automatic.** *Delivery* — handing the
agent the decisions that still apply, before it edits a path — happens on its
own once installed. *Capture* — writing a new decision down — is something the
agent does when a change carries a reason the diff cannot show; an ordinary
`git commit` cannot start it, because a hook has the diff and a capture needs
the session. [What happens automatically](#what-happens-automatically-and-what-does-not)
says exactly which hosts do which.

<details>
<summary><strong>Contents</strong></summary>

- [Install](#install)
- [What the agent receives](#see-it-work)
- [What…
