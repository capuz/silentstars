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
stars: 11
forks: 5
openIssues: 5
closedIssues: 41
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T08:42:04Z"
lastCommitAt: "2026-11-14T10:43:11Z"
lastReleaseAt: "2026-04-06T16:22:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["raultov"]
openGraphImageUrl: "https://opengraph.githubassets.com/14f0fdec74e72d0a17cb947d5d75591e34065a14ce2bbf04a1b220da7dd78a0e/raultov/knot"
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
