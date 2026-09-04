---
repo: "ask-marcel/ask-marcel-office-cli"
name: "ask-marcel-office-cli"
description: "The Microsoft 365 command line built for AI agents: one sign-in, 182 read-only commands, every document as clean markdown. Outlook, OneDrive, SharePoint, Teams, Calendar, Excel, OneNote, Planner. MCP server included."
readmeQualityOk: true
url: "https://github.com/ask-marcel/ask-marcel-office-cli"
homepage: "https://www.npmjs.com/package/ask-marcel-office-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "bun", "claude-code", "cli", "cursor", "excel", "llm", "markdown", "mcp", "mcp-server"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-04-27T11:02:54Z"
lastCommitAt: "2026-09-04T08:08:11Z"
lastReleaseAt: "2026-09-03T01:10:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 68
maintainers: ["vdelacou", "a-tokyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/634bdba7d9c116a000c7ef7db822db96a29c4b0d15422325f30ea121fa3008d7/ask-marcel/ask-marcel-office-cli"
---

# ask-marcel-office

### The Microsoft 365 command line built for AI agents

**One sign-in. No Azure app registration. Every document as clean markdown.**

Outlook · OneDrive · SharePoint · Calendar · Excel · Teams · Planner · To Do · OneNote · People

[Install](#install-in-60-seconds) · [See it work](#see-it-work) · [What it reaches](#what-your-agent-can-reach) · [Files to markdown](#any-file-becomes-markdown) · [Library](#embed-it-as-a-typescript-library) · [All 192 commands](https://github.com/ask-marcel/ask-marcel-office-cli/blob/HEAD/docs/COMMANDS.md)

</div>

---

Your agent is smart enough to answer *"what did Contoso say about the Q3 budget, and what's in the attached deck?"* It just can't see your mailbox.

`ask-marcel-office` gives any tool-calling LLM (Claude Code, Cursor, Cline, an MCP server, your own loop) eyes on your entire Microsoft 365:

```bash
npm i -g ask-marcel-office-cli
ask-marcel-office login          # your normal Microsoft sign-in, in a browser, once
ask-marcel-office list-mail-messages --top 5
```

That is the whole setup. **No Azure app registration. No tenant-admin consent. No client secrets.** And nothing for a runaway agent to break: the command…
