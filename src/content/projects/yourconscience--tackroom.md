---
repo: "yourconscience/tackroom"
name: "tackroom"
description: "Dotfiles for your AI agents: one ~/.agents repo for skills, MCP servers, hooks, agent roles and memory, synced natively into 15 coding agents (Claude Code, Codex, Gemini CLI, Cursor, Pi, OpenCode and more). Commit-pinned, audited externals."
readmeQualityOk: true
url: "https://github.com/yourconscience/tackroom"
homepage: "https://yourconscience.github.io/tackroom/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "dotfiles", "mcp", "opencode", "homebrew", "cli", "agent-plugins"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-06T07:37:35Z"
lastCommitAt: "2026-11-14T10:46:45Z"
lastReleaseAt: "2026-09-10T10:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 66
maintainers: ["yourconscience", "mxttbennett"]
openGraphImageUrl: "https://opengraph.githubassets.com/717e52d84c4f885b2f272e389d0ba7a85a6b2fc82a99a30a8f9d528be60d4245/yourconscience/tackroom"
---

# tackroom

tackroom syncs one `~/.agents` repo into 15 coding agents and pins every outside skill to a commit.

[Website](https://yourconscience.github.io/tackroom/) · [Docs](https://yourconscience.github.io/tackroom/docs/) · [Releases](https://github.com/yourconscience/tackroom/releases)

## Install and set up

```bash
brew install yourconscience/tap/tackroom && tackroom setup
```

With npm: `npm install -g tackroom && tackroom setup`. Both install the same checksum-verified binary for macOS or Linux, arm64 or x86-64.

`setup` asks nothing. It creates `~/.agents`, finds the agents you have, copies in their skills, MCP servers and roles, runs the first sync and prints a short summary. A native file that differs from the shared copy is backed up before it is replaced. `tackroom setup --review` asks before each step instead. On another machine, run `tackroom setup --from <your config repo url>`.

After that, you work in the view; the commands do the same from a shell or a script:

```bash
tackroom view     # the dashboard: sync state, pins, holds, crons; desktop or phone
tackroom sync     # write each agent's native config from the repo
tackroom status   # what is synced, held or…
