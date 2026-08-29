---
repo: "kpavlov/tachyon"
name: "tachyon"
description: "💫 Tachyon MCP Runtime for Java and Kotlin - Model Context Protocol (MCP) server with Streamable HTTP, native Netty transports, tools, tasks, resources, prompts, completions, resumable sessions, and stateless deployment support."
readmeQualityOk: true
url: "https://github.com/kpavlov/tachyon"
homepage: "https://deepwiki.com/kpavlov/tachyon"
language: "Java"
languages: ["Java"]
languagePcts: [81]
topics: ["java", "java-25", "mcp", "netty", "server", "java-21", "java-26", "ai", "ai-agent-tools", "ai-agents"]
stars: 30
forks: 9
openIssues: 10
closedIssues: 18
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-06-15T16:59:19Z"
lastCommitAt: "2026-08-29T17:28:07Z"
lastReleaseAt: "2026-07-08T14:20:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 49
maintainers: ["kpavlov", "renovate[bot]", "seanxuu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1270386613/08d29278-7e81-4a1e-9362-17197246830f"
---

src="docs/assets/social-banner.jpg"
    alt="Tachyon MCP banner"
    style="width: 100%; height: auto;border-radius: 10px"
  />
</div>

**Tachyon MCP** is a Java 21+ server runtime for the
[Model Context Protocol](https://modelcontextprotocol.io). It implements MCP 2025-11-25 and
2026-07-28 over Streamable HTTP and passes the official conformance suites for both versions.

Build servers with synchronous Java handlers or a coroutine-first Kotlin DSL. Tachyon runs
blocking handlers on virtual threads, keeps them off the Netty event loop, and requires no
application framework.

## Why Tachyon?

- **Simple handlers** -- write blocking Java code or suspending Kotlin code without reactive
  pipelines or manual thread pools.
- **Stable application API** -- protocol-version mappers isolate handlers from wire-format changes.
- **Java annotations support** -- adapt existing mcp-java, LangChain4j, or Spring AI annotated services into Tachyon MCP servers.
- **Stateless by default** -- opt into sessions only when you need resumable SSE, event replay, and
  TTL cleanup.
- **Production transport** -- Netty backpressure, graceful shutdown, DNS-rebinding protection,
  CORS, and native transport…
