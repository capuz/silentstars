---
repo: "poppycoderr/domain-driven-kit"
name: "domain-driven-kit"
description: "Executable DDD for Spring Boot 4: domain building blocks, architecture rules that fail the build, reliable domain events (outbox, Kafka, RocketMQ), and guardrails for AI coding agents."
readmeQualityOk: true
url: "https://github.com/poppycoderr/domain-driven-kit"
homepage: "https://poppycoder.netlify.app/ddk/"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["ddd", "domain-driven-design", "java", "spring-boot", "clean-architecture", "ai-agents", "archunit", "claude-code", "domain-events", "layered-architecture"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2025-01-09T02:04:32Z"
lastCommitAt: "2026-10-20T08:49:41Z"
lastReleaseAt: "2026-10-09T17:28:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 80
maintainers: ["poppycoderr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/914127969/7954ee43-5915-4b2b-95a9-b15bd92eef7c"
---

---

## Highlights

- 🧱 **Domain building blocks**: `Identifier`, `ValueObject`, `Entity`, `AggregateRoot`, domain events and specifications, with zero framework dependencies enforced by tests
- 🛡️ **Architecture rules that fail the build**: ArchUnit rules for three- and four-layer projects, included in every generated project
- 🗄️ **Safe persistence**: a generic MyBatis-Plus repository with optimistic locking; missing or duplicate mappers fail at startup
- ⚡ **Two-level cache**: Caffeine + Redis with cross-instance invalidation, Redis failure fallback and a deserialization allow-list
- 🤖 **AI-agent ready**: generated projects ship `AGENTS.md`, `CLAUDE.md` and Claude Code Skills; architecture failures come with a report agents can act on; use cases can be exposed as MCP tools
- 🧩 **Thirteen Spring Boot starters** under one `ddk.*` namespace: web, MyBatis, Redis, cache, data sources, tracing, Seata, domain events, MCP, concurrency control, scheduled jobs, read-model projections, ArchGuard
- 🚀 **Start in minutes**: Maven archetypes and a runnable example, built and tested in CI on Java 21 and 25

## Why DDK

`domain-driven-kit` is not a heavy business framework. It is an…
