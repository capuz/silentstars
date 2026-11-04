---
repo: "grafana/ai-sdk"
name: "ai-sdk"
description: "Grafana AI SDK for Go — streaming, tool-calling AI backends that speak fluent @ai-sdk/react"
readmeQualityOk: true
url: "https://github.com/grafana/ai-sdk"
homepage: "https://grafana.ai/technology/ai-sdk"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 262
forks: 16
openIssues: 71
closedIssues: 142
watchers: 0
contributors: 22
recentReleases: 10
createdAt: "2026-07-28T21:51:20Z"
lastCommitAt: "2026-11-04T13:04:37Z"
lastReleaseAt: "2026-10-27T13:08:28Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 31
maintainers: ["nrbrd", "renovate-sh-app[bot]", "jalevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/56691f7d0f55757148de76efaf32954a66f0d568a06b3c25d8319343cf84f314/grafana/ai-sdk"
---

Call language models, stream responses, execute tools, and serve AI-powered
endpoints from Go. Use the SDK on its own or pair it with an AI SDK React
frontend.

[Quick start](#quick-start) · [Documentation](https://github.com/grafana/ai-sdk/blob/HEAD/docs/README.md) · [Examples](https://github.com/grafana/ai-sdk/blob/HEAD/examples/) · [API reference](https://pkg.go.dev/github.com/grafana/ai-sdk)

---

## Why

The SDK gives Go applications one API for model calls, streaming, tools,
structured output, and multi-step agents across supported providers. It follows
the design of [Vercel's AI SDK](https://ai-sdk.dev) and stays wire-compatible
with its TypeScript frontend hooks. A Go endpoint can stream Server-Sent Events
(SSE) directly to hooks such as `useChat`.

```text
   Go backend                          React frontend
   ──────────                          ──────────────
   aisdk.StreamText(...)   ── SSE ──▶  useChat({ transport })
   aisdk.WriteUIMessageStream(w, …)    // same protocol
```

See [How a request runs](https://github.com/grafana/ai-sdk/blob/HEAD/docs/concepts/architecture.md) for the generation,
tool, and streaming flow. Reuse an existing AI SDK React frontend or…
