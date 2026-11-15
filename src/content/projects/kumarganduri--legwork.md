---
repo: "kumarganduri/legwork"
name: "legwork"
description: "Your AI finds the open-source tool it needs on GitHub. Legwork installs it in a sandbox."
readmeQualityOk: true
url: "https://github.com/kumarganduri/legwork"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "developer-tools", "llm", "mcp", "model-context-protocol", "sandbox", "supply-chain-security"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-26T11:40:12Z"
lastCommitAt: "2026-11-15T08:28:46Z"
lastReleaseAt: "2026-10-01T18:21:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["kumarganduri"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cd0bcd8ff97d69f5737df3b2522fce24ec945589ece33f7c9e85f736205f8e0/kumarganduri/legwork"
---

# Legwork

**Your AI finds the open-source tool it needs on GitHub. Legwork installs it in a sandbox.**

Three of the first 18 GitHub repos we tried while building it carried hidden
malware, two of them among that week's ten most-starred new AI repos.
Legwork's scan blocked those two in about a second. [The story](https://dev.to/kumarganduri/three-of-the-first-18-github-repos-i-tested-were-malware-4gco).

https://github.com/user-attachments/assets/9e9b80b5-99ff-4d21-b689-74655418f23d

Add Legwork to Claude, Cursor, Codex, opencode or any [MCP](https://modelcontextprotocol.io)
client once. When you ask for something your AI has no tool for, it
searches GitHub, picks a repo, and asks you to approve installing it.
Legwork then checks the code for hidden payloads, builds a working tool for it in a
sandbox, tests it, and hands it over. In your home folder it can only read
the folders you allow.

```sh
claude mcp add legwork -- uvx legwork-mcp hub --allow-read ~/Downloads
```

It needs macOS or Linux and [uv](https://docs.astral.sh/uv/). It's free and
MIT-licensed, and the 47 tools in the [public cache](https://github.com/kumarganduri/legwork/blob/HEAD/cache/) need no API
key. For…
