---
repo: "future-agi/traceAI"
name: "traceAI"
description: "Open Source AI Tracing Framework built on Opentelemetry for AI Applications and Frameworks"
readmeQualityOk: true
url: "https://github.com/future-agi/traceAI"
homepage: "https://app.futureagi.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 22]
topics: ["ai", "ai-agents", "langchain", "large-language-models", "openai", "opentelemetry", "tracing", "observability"]
stars: 264
forks: 54
openIssues: 9
closedIssues: 4
watchers: 2
contributors: 24
recentReleases: 7
createdAt: "2025-04-15T04:57:02Z"
lastCommitAt: "2026-10-31T07:44:40Z"
lastReleaseAt: "2026-10-31T07:46:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 41
maintainers: ["nik13", "Tanmaycode1"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0048ff8d2a68c58a6d00fdb6206f7a5ef916f99afa293408546f888e6fc5dfb/future-agi/traceAI"
---

**OpenTelemetry tracing for AI applications.**

Trace LLM calls, agents, tools, and retrieval. Keep your application code and your observability stack.

**77 integration families · 5 languages · OpenTelemetry-native · Apache 2.0**

[Get started](#quickstart) · [Integrations](#integrations) · [Documentation](https://docs.futureagi.com/docs/tracing) · [Contribute](https://github.com/future-agi/traceAI/blob/HEAD/CONTRIBUTING.md)

- **Start at the SDK boundary.** Instrument supported clients and frameworks instead of adding logging around each call.
- **Follow the request.** Connect model calls, retrieval, and tool execution with OpenTelemetry spans and context.
- **Choose what leaves your app.** Configure content masking and export through your own OpenTelemetry pipeline.

## Quickstart

Pick your language. These examples send traces to [Future AGI](https://app.futureagi.com); you can also supply your own OpenTelemetry tracer provider and exporter.

| Language | Instrumentation | Install / coordinates |
| :--- | :--- | :--- |
| [Python](#python) | Framework instrumentors · Python 3.10–3.13 for this example | `pip install fi-instrumentation-otel traceai-openai` |
| [TypeScript /…
