---
repo: "savannahfeder/agentbox"
name: "agentbox"
description: "A desktop GUI for running dozens of Claude Code and Codex agents in parallel, each in its own git worktree. Answer them like email, or use the board view. Free, open source, on the plan you already pay for."
readmeQualityOk: true
url: "https://github.com/savannahfeder/agentbox"
homepage: "https://agentbox.ac"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [75, 20]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "claude-code-gui", "codex", "coding-agents", "developer-tools", "electron", "git-worktree"]
stars: 345
forks: 38
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-09-28T02:35:07Z"
lastCommitAt: "2026-11-04T08:01:39Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 24
maintainers: ["savannahfeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dfca1f022286307751cfd554df17b5b7b9cd99c6f97717356f0cc1e611b1891/savannahfeder/agentbox"
---

Run dozens of Claude Code and Codex agents in parallel, each in its own git worktree,<br>
  and only hear from the ones that need you.

  Free and open source. A Mac app, or in your browser on Linux with <code>npx agentbox-app</code>,<br>
  on the Claude Code or Codex plan you already have. No server, no account, no extra subscription.

---

## Install

There are two ways to run it: in the browser, or as a Mac app. Both need Node 22.13 or newer and Claude Code or Codex installed and signed in.

**As a desktop app.** Build it from this repo. `npm start` is the desktop command on Omarchy and on a Mac:

```
git clone https://github.com/savannahfeder/agentbox.git
cd agentbox
npm install
npm start
```

`npm install` ends with a count of vulnerabilities. What is left after `npm audit fix` are advisories on Vite,
Vitest and the Tiptap editor that only a new major version of each would clear.
The install worked if it exits without an error.

**In your browser.** One command, nothing to install first:

```
npx agentbox-app
```

It starts on your machine and opens a tab. On Linux that open goes through `xdg-open`. Nothing is hosted: it listens only on `127.0.0.1`, and the address carries a…
