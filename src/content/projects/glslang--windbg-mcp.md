---
repo: "glslang/windbg-mcp"
name: "windbg-mcp"
description: "MCP server exposing WinDbg/DbgEng (live user-mode, kernel, crash dumps, Time Travel Debugging) to AI agents over stdio or over HTTP with --listen"
readmeQualityOk: true
url: "https://github.com/glslang/windbg-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["claude-code", "debugging", "mcp", "windbg", "windbgx", "reverse-engineering", "reverse-engineering-tool", "reverse-engineering-tools", "windows", "windows-server"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-05-30T18:57:13Z"
lastCommitAt: "2026-09-30T09:56:29Z"
lastReleaseAt: "2026-08-08T14:03:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["glslang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7dd2ac6a2a90eae04ea047415ac1307e2045498f4b5d961481ef567e9c0d64d/glslang/windbg-mcp"
discussionCount: 1
---

# windbg-mcp

An [MCP](https://modelcontextprotocol.io) server that exposes **WinDbg/DbgEng** to AI agents
(Claude Code, Claude Desktop, Cursor, …) — over **stdio**, or over **HTTP** with `--listen`, which
serves the same tools to clients that are not on the machine DbgEng runs on. It drives a live
debugger engine for **user-mode**, **kernel-mode**, **crash-dump**, and
**Time Travel Debugging (TTD)** workflows.

The low-level engine bindings live in [`dbgscope`](https://github.com/glslang/dbgscope)
(`src/dbgeng.rs`); this crate adds process-per-session engine supervision and the `rmcp` tool
surface on top.

## Documentation

This file is the map. Each topic is one document, and each document is the whole of that topic.

| | |
|---|---|
| [Install and engine setup](https://github.com/glslang/windbg-mcp/blob/HEAD/docs/install.md) | Requirements, prebuilt binaries, Scoop, and the one-time WinDbg engine copy that TTD replay, `!analyze`, the driver tools and 32-bit .NET SOS need |
| [Use with an MCP client](https://github.com/glslang/windbg-mcp/blob/HEAD/docs/mcp-clients.md) | Client config, running the server on another machine (`--listen`), the Claude Code plugin, the MCP registry |…
