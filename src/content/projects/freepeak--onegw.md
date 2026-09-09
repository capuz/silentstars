---
repo: "FreePeak/onegw"
name: "onegw"
description: "Single-binary LLM gateway in Go — OpenAI/Anthropic/Gemini any-to-any translation, fallback combos, token saver, usage tracking, ~100 MB RSS"
readmeQualityOk: true
url: "https://github.com/FreePeak/onegw"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["anthropic", "gemini", "go", "llm", "llm-gateway", "llm-proxy", "openai", "reverse-proxy", "streaming"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 39
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-07T04:25:30Z"
lastCommitAt: "2026-09-09T08:18:46Z"
lastReleaseAt: "2026-09-08T07:30:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["linhdmn"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d3c8ead0cb27cebe43b44d94ff0ee6efacdf630fcc9a4422a4db86c56e80c48/FreePeak/onegw"
---

</div>

# onegw

</div>

**Single-binary LLM gateway in Go.** One process fronts OpenAI-, Anthropic-, and
Gemini-compatible providers behind any of those three API surfaces — with
cross-format translation, fallback routing, token saving, and usage tracking —
inside a ~100 MB RAM envelope.

A resource-efficient alternative to JavaScript gateways like
[9router](https://github.com/decolua/9router): no runtime, no per-request
buffering, no conversation state.

## Why onegw

| Concern | Typical Node/JS gateway | onegw |
| --- | --- | --- |
| Runtime | Node.js + framework | Single static Go binary (`CGO_ENABLED=0`) |
| Streaming | Parsed & re-serialized | Byte passthrough; cross-format streams re-encoded event-by-event |
| Sessions | Cached conversations | Stateless — memory is independent of session count |
| RAM | Hundreds of MB | **Measured: 17 MiB baseline → 67 MiB peak** under 30 concurrent 800 KB streams |
| Throughput target | — | 1–2 B tokens/day (~12–23 k tok/s sustained; bench hit ~71 K tok/s) |

## Features

- **Three wire surfaces, any-to-any translation.** OpenAI, Anthropic, and
  Gemini clients can all talk to all three upstream kinds — request bodies and
  SSE streams…
