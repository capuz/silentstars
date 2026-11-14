---
repo: "jeanibarz/knowledge-base-mcp-server"
name: "knowledge-base-mcp-server"
description: "This MCP server provides tools for listing and retrieving content from different knowledge bases."
readmeQualityOk: true
url: "https://github.com/jeanibarz/knowledge-base-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 55
forks: 13
openIssues: 12
closedIssues: 568
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-02-08T14:42:35Z"
lastCommitAt: "2026-11-14T10:45:09Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 55
maintainers: ["jeanibarz", "dependabot[bot]", "gundestrup"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cbefe8af5d5c09685aea439b77e00bc8480240fab10c21d232c3090d2766e9b/jeanibarz/knowledge-base-mcp-server"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/jeanibarz"]
---

# Knowledge Base MCP Server

Point this server at a folder of markdown notes and it becomes searchable by meaning, not just by keyword — from your AI client, or from your shell.

You keep your notes as ordinary files on your own disk. The server reads them, splits them into chunks, turns each chunk into a vector with an embedding model of your choosing (a local Ollama model, OpenAI, or HuggingFace), and stores those vectors in a local [FAISS](https://faiss.ai/) index. Run it with a local embedding model and a local LLM and your notes never leave the machine; point it at a hosted provider and only then do they cross the network. Two front doors sit on top of that index:

- **An MCP server** that any [Model Context Protocol](https://modelcontextprotocol.io) client — Claude Desktop, Codex CLI, Cursor, Continue, Cline — can call to search your notes, ask questions answered from them, and (optionally) write new ones.
- **A `kb` command-line tool** for the same corpus from a terminal or an agent's shell, plus the operational commands the MCP surface doesn't expose: indexing, diagnostics, evaluation, and note curation.

Throughout the docs, a *knowledge base* (or *shelf*) is one…
