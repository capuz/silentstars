---
repo: "domdomegg/computer-use-mcp"
name: "computer-use-mcp"
description: "💻 Give AI models complete control of your computer (probably a bad idea)"
url: "https://github.com/domdomegg/computer-use-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["mcp-server", "model-context-protocol"]
stars: 314
forks: 38
openIssues: 5
closedIssues: 8
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2025-01-12T22:14:38Z"
lastCommitAt: "2026-06-25T01:31:39Z"
lastReleaseAt: "2026-03-02T01:08:17Z"
status: "thriving"
tags: ["funded"]
healthScore: 86
undervaluedScore: 26
maintainers: ["domdomegg", "dependabot[bot]", "AotianNeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff5fb27b8bcc6b007736b350a0a2948b5b229f5a5d59dce8f58b8f6f39f02cb7/domdomegg/computer-use-mcp"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# computer-use-mcp

💻 A Model Context Protocol server for Claude to control your computer. This is very similar to [computer use](https://docs.anthropic.com/en/docs/build-with-claude/computer-use), but easy to set up and use locally.

Here's Claude Haiku 4.5 changing my desktop background (4x speed):

https://github.com/user-attachments/assets/cd0bc190-52c4-49db-b3bc-4b8a74544789

> [!WARNING]
> At time of writing, models make frequent mistakes and are vulnerable to prompt injections. As this MCP server gives the model complete control of your computer, this could do a lot of damage. You should therefore treat this like giving a hyperactive toddler access to your computer - you probably want to supervise it closely, and consider only doing this in a sandboxed user account.

## Installation

Follow the instructions on [install-mcp](https://adamjones.me/install-mcp/?config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNvbXB1dGVyLXVzZS1tY3AiXSwibmFtZSI6ImNvbXB1dGVyLXVzZSJ9), which generates the right config for your MCP client (Claude Code, Claude Desktop, Cursor, Cline, VS Code, and more).

## Tips

This should just work out of the box.

However, to get best results:
- Use a model good…
