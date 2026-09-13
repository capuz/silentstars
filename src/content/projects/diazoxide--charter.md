---
repo: "diazoxide/charter"
name: "charter"
description: "Control plane for your harness across many repos — durable personas, per-task workspaces, and a credential vault the model never reads from"
readmeQualityOk: true
url: "https://github.com/diazoxide/charter"
homepage: "https://pypi.org/project/charter-cp/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-framework", "agentic-orchestration", "agentic-workflow", "claude", "claude-code", "ai-agents", "cli", "developer-tools", "git-worktree", "llm-tools"]
stars: 17
forks: 4
openIssues: 23
closedIssues: 434
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-06T06:22:48Z"
lastCommitAt: "2026-09-13T08:30:36Z"
lastReleaseAt: "2026-08-22T16:20:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["diazoxide", "Biacode"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1324824206/22a6c047-fc0e-49ff-9829-81ab276cdb95"
discussionCount: 1
---

# charter

**Your agent forgets everything, holds every credential, and works in one checkout.**

charter is a control plane for coding agents working across many repos on GitHub or
GitLab: durable **personas**, isolated per-task **workspaces**, and a credential **vault**
the model never reads from. It runs inside **Claude Code, opencode and Codex**, enforcing
the same rules in each.

That picture is **the frame**, which charter draws around your agent. `charter claude`
— or `charter opencode`, or `charter codex` — starts the harness inside a tmux window charter
lays out: the agent in the middle, charter's panels around it, repainted when charter's
hooks say the plane changed. tmux draws the rectangles and does the terminal emulation;
charter fills the edges and draws nothing in the agent's own pane (ADR 0018). It is a
capture, not a mockup: `docs/assets/capture-frame.sh "$(mktemp -d)" --full` empties the
directory it is given, builds a throwaway plane in it, opens four chats on a private tmux
server and prints the screen. **No agent is running in it.**
Every chat runs `charter status`, which is what fills the middle pane, and the CI results,
the dispatch badge and the working…
