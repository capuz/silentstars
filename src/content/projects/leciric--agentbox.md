---
repo: "leciric/agentbox"
name: "agentbox"
description: "Devin-style that run on your own machine: each agent gets its own Linux machine, desktop and branch, directed by a lead chat. Claude Code, Codex and OpenCode."
readmeQualityOk: true
url: "https://github.com/leciric/agentbox"
homepage: "https://agentbox.linting.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [62, 31]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "electron", "golang", "incus", "opencode", "self-hosted"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-09-24T18:38:30Z"
lastCommitAt: "2026-10-27T12:39:30Z"
lastReleaseAt: "2026-09-29T14:52:02Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["leciric", "luisflorido", "drupio"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c4fcaf1174fd93d211f4924d09b6a588d9df6d295434efc17c4026183429fe7/leciric/agentbox"
---

Tell a project's **lead** what you want. It starts the agents the work needs, each one Claude
Code, Codex, OpenCode or Cursor on **a Linux machine of its own**: its own branch and worktree,
Docker, ports and databases, and a desktop with a browser that you can watch live and take over.
Agents test their work in the real app and keep screenshots and recordings as proof, so you
review what they built, not their word for it, and merge from the same window. The lead answers
their questions, passes on the ones only you can answer, and remembers what the project has
learned for the next agent. It all runs on your computer, and it's MIT-licensed.

## Why AgentBox

- **A real machine per agent, not just a worktree.** Each agent gets a Linux container with its own
  network, Docker and every port free, so ten agents can run the same dev server and database at
  once without colliding. Snapshot one, fork a new agent from it, or pause it with its memory
  intact.
- **A desktop and browser for every agent.** Agents click through the app they're changing with a
  real mouse and keyboard. Open an agent's **Desktop** to watch it, and click **Take control** to
  drive it yourself.
- **A lead that…
