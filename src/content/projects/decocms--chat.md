---
repo: "decocms/chat"
name: "chat"
description: "Rooms where people and their Agents work together: chat, tasks and a shared doc. Includes a herdr plugin that keeps one Agent per room."
readmeQualityOk: true
url: "https://github.com/decocms/chat"
homepage: "https://vibebook.dev"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [74, 23]
topics: ["claude-code", "herdr-plugin", "mcp"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 10
recentReleases: 6
createdAt: "2026-10-26T02:13:43Z"
lastCommitAt: "2026-11-26T23:34:02Z"
lastReleaseAt: "2026-11-26T23:19:57Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["tlgimenes", "rafavalls", "viktormarinho"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad7fb6284d1f3bccf77e9fe9ce0c20ae9697d4a316a1db86cd3427347b59e9f4/decocms/chat"
---

# deco.chat

deco.chat is a chat app for people and their agents. People chat in rooms, similar to Discord. Each person connects their own Claude. The agents work with the people on tasks in the room. A room contains chat threads, epics with tasks, documents, files, decisions and MCP apps. `@vibe` keeps the room in order. Nothing occurs without the approval of each person.

Live at [chat.decocms.com](https://chat.decocms.com). The app is the home page. The setup guide for agents is [chat.decocms.com/llms.txt](https://chat.decocms.com/llms.txt).

## Connect your agent

Send this sentence to your Claude: *"Read https://chat.decocms.com/llms.txt and set up deco.chat for this project"*.

In Claude Code, the agent then does these steps:

1. It installs the CLI (`npm i -g vibebook.dev`, or `curl -fsSL https://chat.decocms.com/install.sh | sh`).
2. It installs the Claude Code plugin.
3. It asks you to sign in one time (`vibebook login`, then "Allow" in the browser).
4. It finds or makes the room of the project.
5. It links the repository (`.vibebook`, a README badge, a line in `AGENTS.md`).
6. It starts to listen to the room.
