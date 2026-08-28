---
repo: "foglamp-labs/foglamp"
name: "foglamp"
description: "The missing observability layer for the Vercel AI SDK."
readmeQualityOk: true
url: "https://github.com/foglamp-labs/foglamp"
homepage: "https://foglamp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 325
forks: 29
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-24T21:54:27Z"
lastCommitAt: "2026-08-28T14:33:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 21
maintainers: ["gustavo-fior", "mintlify[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248618409/aa1fba33-897e-4582-8df1-1cacb8108067"
---

</a>
</p>

</p>

# Foglamp

**The missing observability layer for the Vercel AI SDK.**

Two lines of code and an API key give you unified observability for your AI
agents — **costs, latency, token usage, distributed traces, and prompt/response
logs** — across every `generateText` / `streamText` call in your app.

Foglamp is **open source** ([Apache 2.0](#license)) and self-hostable. Bring
your own ClickHouse + Postgres with `docker compose up`, or point the SDK at
the hosted endpoint.

```ts
import { registerTelemetry } from "ai";
import { foglamp } from "foglamp";

registerTelemetry(foglamp()); // that's it — every AI SDK call is now traced
```

---

## Why

The Vercel AI SDK gives you `generateText`, `streamText`, tools, and multi-step
agents — but no first-class answer to *"what did that agent cost, how slow was
it, and what did it actually send the model?"* Foglamp fills that gap:

- **Cost** — computed at ingest from OpenRouter pricing, per token dimension
  (prompt, completion, cached, reasoning, images, web search, …). Unknown model
  → cost shows `—`, never a misleading `$0`. Per-project custom price overrides.
- **Latency & TTFT** — p50 / p95 / p99 per model, agent, and…
