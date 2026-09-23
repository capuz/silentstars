---
repo: "gtapps/claude-code-hermit"
name: "claude-code-hermit"
description: "Turn Claude Code into a 24/7 Agent"
readmeQualityOk: true
url: "https://github.com/gtapps/claude-code-hermit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "ai-agent", "anthropic", "claude", "claude-code", "claude-code-plugin", "hermit", "self-hosted", "autonmous-agent"]
stars: 74
forks: 15
openIssues: 2
closedIssues: 353
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-23T18:33:11Z"
lastCommitAt: "2026-09-23T08:46:50Z"
lastReleaseAt: "2026-04-26T23:13:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["gtapps"]
openGraphImageUrl: "https://opengraph.githubassets.com/007466e8b146ce946180b3ed35b3d7439332fe3e9d5a7a4ca7f0d12a3889f90a/gtapps/claude-code-hermit"
discussionCount: 1
---

</p>

# Your own local Claude Tag.

Run an always-on Claude Code agent on your machine or server, for you or your team. Use it from your terminal or the Claude app via [Remote Control](https://code.claude.com/docs/en/remote-control), or connect Discord, Telegram, iMessage, or a custom Claude Code [channel](https://code.claude.com/docs/en/channels).

Give it ongoing responsibilities: maintain research, monitor systems, run routines, and follow up on unfinished work. Between requests, it checks those responsibilities, carries progress across sessions, and reaches you when something needs attention.

Run it on your Claude subscription and extend it with your own MCP servers, skills, and plugins.

</p>

## Set up

**Choose one installation method below.** Run it from the folder where you want your agent, empty or existing. Uses your Claude subscription on Linux, macOS, or Windows via WSL2. See [prerequisites](https://github.com/gtapps/claude-code-hermit/blob/HEAD/plugins/claude-code-hermit/docs/how-to-use.md#prerequisites).

<details open>
<summary>Install the Claude Code plugin</summary>

With Claude Code 2.1.271+ and Bun 1.3+ installed:

```bash
claude plugin marketplace add…
