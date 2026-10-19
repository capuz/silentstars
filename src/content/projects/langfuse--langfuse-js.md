---
repo: "langfuse/langfuse-js"
name: "langfuse-js"
description: "🪢 Langfuse JS/TS SDK"
readmeQualityOk: true
url: "https://github.com/langfuse/langfuse-js"
homepage: "https://langfuse.com/docs/observability/sdk/overview"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["javascript", "langfuse", "llmops", "observability", "sdk-js", "typescript"]
stars: 175
forks: 116
openIssues: 10
closedIssues: 16
watchers: 2
contributors: 51
recentReleases: 0
createdAt: "2023-07-02T21:43:44Z"
lastCommitAt: "2026-10-19T09:14:39Z"
lastReleaseAt: "2024-01-05T14:27:50Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 46
maintainers: ["langfuse-bot", "hassiebp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2caec4a508c1c4b027c1cf527f1318f5fdcdf893b863f50bb75a843d4fafd98/langfuse/langfuse-js"
---

# langfuse-js

Modular mono repo for the Langfuse JS/TS client libraries.

## Packages

> [!IMPORTANT]
> The SDK was rewritten in v5 and released in March 2026. Refer to the [v5 migration guide](https://langfuse.com/docs/observability/sdk/upgrade-path/js-v4-to-v5) for instructions on updating your code.
>
> **`langfuse` on npm is not the latest Langfuse JS/TS SDK.** The unscoped packages `langfuse`, `langfuse-core`, `langfuse-node`, and `langfuse-langchain` are the **deprecated** v3 client (`new Langfuse()`, `trace()`, `span()`, `api.traceList`). Do **not** `npm install langfuse` for new instrumentation.
>
> **Latest install:** `npm install @langfuse/tracing @langfuse/otel @opentelemetry/sdk-node`. Use [@langfuse/tracing](https://github.com/langfuse/langfuse-js/blob/HEAD/packages/tracing) (`startActiveObservation` / `startObservation`) + `LangfuseSpanProcessor` from [@langfuse/otel](https://github.com/langfuse/langfuse-js/blob/HEAD/packages/otel). Prompts/datasets/scores: [@langfuse/client](https://github.com/langfuse/langfuse-js/blob/HEAD/packages/client). Docs: https://langfuse.com/docs/observability/sdk/overview — Upgrade: [v3 →…
