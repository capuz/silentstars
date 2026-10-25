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
stars: 98
forks: 17
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-09-28T02:35:07Z"
lastCommitAt: "2026-10-25T22:10:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 30
maintainers: ["savannahfeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c4b11b6074ef743aad0648c452de27a8b0f33b791b4cf614f098a7e2a3835ff/savannahfeder/agentbox"
---

Run dozens of Claude Code and Codex agents in parallel, each in its own git worktree,<br>
  and only hear from the ones that need you.

  Free and open source. A Mac app, or in your browser on any platform with <code>npx agentbox-app</code>,<br>
  on the Claude Code or Codex plan you already have. No server, no account, no extra subscription.

---

## Install

There are two ways to run it: in the browser, or as a Mac app. Both need Node 22 and Claude Code or Codex installed and signed in.

**In your browser.** One command, nothing to install first:

```
npx agentbox-app
```

It starts on your machine and opens a tab. On Linux that open goes through `xdg-open`. Nothing is hosted: it listens only on `127.0.0.1`, and the address carries a key that is new every run. Add `--help` to see the options. `--no-open` prints the address and leaves the browser to you.

From a checkout, build the screen once, then start it the same way. The install links the checkout's own command, so `npx` runs this copy rather than looking for `agentbox` on your PATH:

```
npm install
npm run build
npx agentbox-app
```

**As a desktop app.** Build it from this repo. `npm start` is the desktop command on…
