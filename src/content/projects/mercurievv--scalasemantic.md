---
repo: "MercurieVV/ScalaSemantic"
name: "ScalaSemantic"
description: "MCP server for deep semantic analysis of Scala via SemanticDB — exact find-usages, class hierarchies, implicit resolution & call paths for AI coding agents like Claude Code. Beyond grep and standard LSP."
url: "https://github.com/MercurieVV/ScalaSemantic"
homepage: "https://mercurievv.github.io/ScalaSemantic/"
language: "Scala"
languages: ["Scala"]
languagePcts: [82]
topics: ["ai", "ai-tools", "claude", "claude-code", "code-analysis", "code-intelligence", "developer-tools", "llm", "mcp", "model-context-protocol"]
stars: 13
forks: 0
openIssues: 4
closedIssues: 46
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-18T17:17:38Z"
lastCommitAt: "2026-07-03T12:21:11Z"
lastReleaseAt: "2026-06-22T19:46:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 58
maintainers: ["MercurieVV", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f9b90ef70330d37cab39e23410a8abc24844abda504a2072a690f6a1365a3cc/MercurieVV/ScalaSemantic"
discussionCount: 0
---

# ScalaSemantic

**ScalaSemantic** is an MCP server that gives AI coding agents compiler-resolved Scala facts — exact symbols, types, inheritance, usages, implicits, and call paths — over compiler-emitted **SemanticDB**. Instead of grepping source text, agents query what the compiler already knows.

Works with Scala 2.13.* and 3.*.*, any sbt/Mill/Gradle project, and any MCP-compatible agent (Claude Code, Codex, Gemini CLI, Cline, Roo Code, Continue…).

## Quick setup

Add the plugin to your sbt project and generate rules:

```scala
// project/plugins.sbt
addSbtPlugin("io.github.mercurievv" % "sbt-scalasemantic-mcp" % "@VERSION@")
```

```sh
sbt mcpClientConfig compile
```

For other build tools, manual setups, or advanced options, see the [Integration guide](docs/getting-started/integration.md).

For a build-tool-neutral setup that needs only `java` (no sbt, no Scala CLI), download the launcher
once and run `setup`. It idempotently enables SemanticDB, writes the agent steering files, and
merges an MCP server entry into every client config it finds — re-running is always safe:

```sh
curl -fsSL…
