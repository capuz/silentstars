---
repo: "raultov/knot"
name: "knot"
description: "High-performance Rust MCP server & CLI codebase indexer for AI agents. Unlocks deep codebase understanding through semantic vector search, structural graph traversal, and cross-repo dependency resolution. Empowers AI coding agents with semantic and structural search for maximum token efficiency."
readmeQualityOk: true
url: "https://github.com/raultov/knot"
homepage: "https://www.knot.kz"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [76, 20]
topics: ["ai-agents", "claude", "code-indexing", "codex", "cursor", "gemini", "llm-tools", "mcp", "mcp-server", "model-context-protocol"]
stars: 8
forks: 5
openIssues: 7
closedIssues: 35
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T08:42:04Z"
lastCommitAt: "2026-10-31T15:57:38Z"
lastReleaseAt: "2026-04-06T16:22:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["raultov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11ccd9c6e11231dcdb93128b6c281d894e0790a779f20b629e93013d49aaaa3/raultov/knot"
---

# knot

**knot** is a high-performance codebase indexer that extracts structural and semantic information from source code, enabling AI agents to understand, analyze, and navigate large code repositories. Currently supports Java, Kotlin, TypeScript, JavaScript/Node.js, Rust, Python, **Groovy**, **C/C++**, **C#**, HTML, and CSS/SCSS, plus **Build Systems** (Maven pom.xml, Gradle build.gradle, Jenkins pipeline, **Cargo.toml**, **MSBuild .csproj + Directory.Packages.props**), **Configuration Files** (YAML, JSON, .properties — optional), **Kubernetes + Helm** (optional), and **Cross-Repo Dependency Linking** with full cross-language linking.

For recent release notes see [CHANGELOG.md](https://github.com/raultov/knot/blob/HEAD/CHANGELOG.md).

The indexer automatically builds:
- **Vector Search Database** (Qdrant) — semantic understanding via embeddings
- **Graph Database** (Neo4j) — architectural relationships via call graphs

This dual-database approach powers both:
- **MCP (Model Context Protocol) Server** — Exposes read-only tools (search, callers, explore, list_files, list_endpoints, repos, deps) to any LLM client (Claude, Gemini, ChatGPT, Cursor, etc.)
- **CLI Tool** — Standalone…
