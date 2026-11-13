---
repo: "savannahfeder/agentbox"
name: "agentbox"
description: "A desktop GUI for running dozens of Claude Code and Codex agents in parallel, each in its own git worktree. Answer them like email, or use the board view. Free, open source, on the plan you already pay for."
readmeQualityOk: true
url: "https://github.com/savannahfeder/agentbox"
homepage: "https://agentbox.ac"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "claude-code-gui", "codex", "coding-agents", "developer-tools", "electron", "git-worktree"]
stars: 394
forks: 42
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-09-28T02:35:07Z"
lastCommitAt: "2026-11-13T05:39:02Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 23
maintainers: ["savannahfeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/529d67dc4d3e22dc66001129ac6043dfcd4db72ebd52eea7c7ece70e11926bd1/savannahfeder/agentbox"
---

Run dozens of Claude Code and Codex agents in parallel, each in its own git worktree,<br>
  and only hear from the ones that need you.

  Free and open source. A Mac app, or in your browser on Linux with <code>npx agentbox-app</code>,<br>
  on the Claude Code or Codex plan you already have. No server, no account, no extra subscription.

---

## Install

**As a Mac app.** [Download Agentbox for Mac](https://agentbox.ac/download). It is signed and notarised, and runs on Apple silicon and Intel.

Every way needs Claude Code or Codex installed and signed in. Building it from source or running it in the browser also needs Node 22.18 or newer.

**As a desktop app from source.** Build it from this repo. `npm start` is the desktop command on Omarchy and on a Mac:

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

It…
