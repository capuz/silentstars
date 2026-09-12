---
repo: "nim-lang/langserver"
name: "langserver"
description: "The Nim language server implementation (based on nimsuggest)"
readmeQualityOk: true
url: "https://github.com/nim-lang/langserver"
homepage: "https://nim-lang.github.io/langserver/"
language: "Nim"
languages: ["Nim"]
languagePcts: [94]
topics: ["nim", "language-server", "lsp", "mcp"]
stars: 312
forks: 53
openIssues: 45
closedIssues: 107
watchers: 5
contributors: 30
recentReleases: 0
createdAt: "2018-06-06T09:41:21Z"
lastCommitAt: "2026-09-12T08:06:05Z"
lastReleaseAt: "2026-05-08T13:08:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 33
maintainers: ["moigagoo", "dependabot[bot]", "martin-c"]
openGraphImageUrl: "https://opengraph.githubassets.com/900eb56dea5646cf44b4dc7de86d6794d518b6bc6a5263e1ae1d24ba76d3e341/nim-lang/langserver"
---

# Nim Language Server

`nimlangserver` is a language server for Nim. It can run as an **LSP server** for editors and IDEs, or as an **MCP server** for AI coding agents such as GitHub Copilot, Claude Code, and Gemini.

**[Read the docs →](https://nim-lang.github.io/langserver)**

## Quick install

```sh
nimble install -g nimlangserver
```

Requires `nimble >= 0.16.1` and a `nimsuggest` that supports `--v3` (Nim 1.6+ or devel).

## Demo

LSP:

MCP:

## Related projects

- [nimlsp](https://github.com/PMunch/nimlsp) — an alternative Nim language server with `nimsuggest` embedded directly in the binary.

## License

MIT
