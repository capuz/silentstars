---
repo: "maksugr/acp-devtools"
name: "acp-devtools"
description: "See exactly what your editor and your coding agent say to each other — a transparent ACP proxy with a live web inspector, CLI, and read-only MCP server."
readmeQualityOk: true
url: "https://github.com/maksugr/acp-devtools"
homepage: "http://playground.acp-devtools.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["acp", "agent-client-protocol", "ai-agents", "coding-agent", "debugger", "developer-tools", "devtools", "jetbrains", "mcp", "zed"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-19T17:11:52Z"
lastCommitAt: "2026-11-06T13:20:26Z"
lastReleaseAt: "2026-11-06T09:45:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 10
maintainers: ["maksugr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a574d7982098d77e6670f7189b838969198bbcee5b12873523e02d949abfffa3/maksugr/acp-devtools"
---

## What is ACP?

The [Agent Client Protocol](https://agentclientprotocol.com/get-started/introduction)
is an open, newline-delimited JSON-RPC wire format that lets an editor (Zed,
WebStorm, IntelliJ, Neovim, Visual Studio via ReSharper) drive a coding agent
(Claude Code, Codex, Goose, OpenCode, and
[40+ others](https://agentclientprotocol.com/get-started/agents)) over stdio,
without either side knowing the other's implementation. **ACP Devtools sits in the middle of that stdio pipe — neither side knows it's there.**

Never seen the wire before? [Anatomy of an ACP session](https://github.com/maksugr/acp-devtools/blob/HEAD/docs/session-anatomy.md)
walks one real capture frame by frame — handshake, prompt turn, a tool call
behind a permission dialog, a cancelled turn — and it's the same session the
[playground](#playground) loads, so you can click along.

## Who it's for

- **Agent authors** — see exactly what an editor sends, and validate your wire
  output against the spec.
- **Editor / plugin developers** — see what the _other_ side sends (WebStorm and
  Zed disagree on capabilities, `_meta`, and id format) and test against
  recorded traffic without burning tokens.
- **Anyone…
