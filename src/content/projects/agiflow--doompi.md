---
repo: "AgiFlow/doompi"
name: "doompi"
description: "PI agent harness distribution"
readmeQualityOk: true
url: "https://github.com/AgiFlow/doompi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 38
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-22T11:14:53Z"
lastCommitAt: "2026-09-26T08:46:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["vuongngo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14a3bc3e30e9f63febd0c2479d0990ee4730ec9bf7ab376c55e8c3a12016ffa9/AgiFlow/doompi"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/cli/doompi/assets/logo.png">
    <source media="(prefers-color-scheme: light)" srcset="packages/cli/doompi/assets/logo-light.png">
  </picture>
</p>

# DoomPi

**A coding agent that loads only the skills and tools you name.**

> It begins with one useful MCP server. Then another. Soon the agent fixing a heading
> wakes up with database tools, browser controls, and their small novel of schemas. This
> is our config.

DoomPi is an opinionated, composable distribution of
[Pi](https://github.com/earendil-works/pi). It is closer in spirit to Spacemacs, Doom Emacs, or a
curated Neovim setup than to a single plugin. It is tailored for people whose agents have too many
skills and tools. It turns extensions, skills, MCP servers, and system prompts into config instead
of background noise.

Plugin systems often rely on model-driven discovery to decide what context to load. Codex, for
example, selects plugins from their descriptions and then loads their skills, but relevant skills
do not always load reliably. DoomPi makes the session composition explicit. Pick a major mode and
some domains; add a profile if you want…
