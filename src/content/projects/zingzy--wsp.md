---
repo: "Zingzy/wsp"
name: "wsp"
description: "Your setup, on cloud machines, for coding agents. Fork your own dev machine in seconds and let Claude Code and Codex work on it."
readmeQualityOk: true
url: "https://github.com/Zingzy/wsp"
homepage: "https://wspx.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["claude-code", "cloud-development", "codex", "coding-agents", "developer-tools", "electron", "local-first", "mcp", "remote-development", "sandbox"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-09-01T17:25:00Z"
lastCommitAt: "2026-09-27T09:27:25Z"
lastReleaseAt: "2026-09-10T16:27:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["Zingzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab2fa0235f78a2f375db5f71aeb1371d6624c17888f324b51ed145b560dd9d5/Zingzy/wsp"
---

# wsp

Your setup, on cloud machines, for coding agents.

The site is [wspx.vercel.app](https://wspx.vercel.app). The docs are [wsp.apidocumentation.com](https://wsp.apidocumentation.com).

wsp reads your computer once, builds a machine that has what it has (your agents, your tools, your sign-ins), and forks workspaces from it in about twenty seconds. Coding agents work inside those workspaces as threads. You read and answer them from the app, the command line, or another agent over MCP.

## What it does

- **One image of your machine.** The agents you use, the tools they run, your logins, sealed once into a golden image on the machine provider. Rebuild it when your setup changes.
- **Forks in seconds.** Every workspace is a fork of that image, with your setup already there. Forks are live clones: what was running on the source is running on the fork.
- **Agents as threads.** Claude Code and Codex run headless on the machine. Start a thread with a task, read its reply, send the next message, stop it. Threads get real titles and you can rename them, in wsp and in the agent's own session list.
- **Agents starting agents.** An agent on your computer drives wsp over MCP: it forks a…
