---
repo: "eandualem/agent-backbone"
name: "agent-backbone"
description: "A lightweight control plane for terminal coding agents. Message, manage and delegate across Claude Code, Codex and OpenCode sessions, with GitHub Issues as the task list. No files in your repo. 🌟 Star to support our work!"
readmeQualityOk: true
url: "https://github.com/eandualem/agent-backbone"
homepage: "https://pypi.org/project/agent-backbone/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-orchestration", "ai-agents", "claude-code", "codex", "developer-tools", "llm", "mcp", "multi-agent", "python", "tmux"]
stars: 6
forks: 1
openIssues: 22
closedIssues: 158
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-02-11T09:56:41Z"
lastCommitAt: "2026-10-04T10:01:37Z"
lastReleaseAt: "2026-09-09T13:26:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 67
maintainers: ["eandualem"]
openGraphImageUrl: "https://opengraph.githubassets.com/0353e273eeedbd6ce5f39aeccff518e78d3475df119086834a6049aa65df3ef3/eandualem/agent-backbone"
---

# agent-backbone

Run terminal coding agents as a team on your machine.

agent-backbone manages persistent tmux sessions for Claude Code, Codex, OpenCode
and other agent CLIs. Agents can message each other, delegate work through GitHub
Issues and form teams across runtimes and repositories. You can inspect their
state, join their terminals, or talk to them through Telegram.

It uses your existing agent logins and model access. No repository configuration
is required for core use; optional shared skills and swarms create their own
links and worktrees.

*Installation from PyPI and collaboration between Claude Code and OpenCode on
Linux. Unedited recording at 3× speed.*

## What it enables

- **Communication:** agents address each other by name. Messages wait in a
  durable queue while the recipient is busy or needs a person.
- **Management:** start, stop, inspect and attach to sessions. State readings
  include the evidence behind them.
- **Delegation:** GitHub issues reach the agent responsible for a repository;
  labels route work to specific agents. An orchestrator is an ordinary agent
  that watches several repositories.
- **Teams:** a swarm puts a coordinator and workers on one…
