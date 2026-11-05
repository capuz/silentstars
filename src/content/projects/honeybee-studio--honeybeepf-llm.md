---
repo: "honeybee-studio/honeybeepf-llm"
name: "honeybeepf-llm"
description: "Lightweight eBPF-based observability agent for AI/LLM workloads - monitors token usage, latency, and sensitive file access in Kubernetes without code changes."
readmeQualityOk: true
url: "https://github.com/honeybee-studio/honeybeepf-llm"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai", "ebpf", "helm", "kubernetes", "llm", "monitoring", "observability", "opentelemetry", "rust", "security"]
stars: 10
forks: 3
openIssues: 15
closedIssues: 18
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-02-21T02:55:31Z"
lastCommitAt: "2026-11-05T14:05:28Z"
lastReleaseAt: "2026-10-30T02:42:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 57
maintainers: ["sammiee5311", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbd260ce20849939a47e4808e98b1bcea2e5a05ae035c85a223a1f83defa05c/honeybee-studio/honeybeepf-llm"
---

# honeybeepf-llm

**Per-pod LLM token, request and latency metrics from eBPF — no code changes, no proxy, no SDK.**

honeybeepf-llm is a Rust eBPF agent that runs as a DaemonSet. It attaches uprobes to OpenSSL's `SSL_write` and
`SSL_read`, reads the plaintext HTTP of calls to LLM providers, and exports token usage, request counts and
latency per Kubernetes namespace and pod over OpenTelemetry.

image; the client pods call a local mock of the provider APIs with fake keys.</sub>

### Architecture

## Why

- **No code changes.** Applications keep their SDKs and their real provider hostnames. Nothing to import, wrap or
  redeploy.
- **No proxy.** Traffic goes straight from the pod to the provider; the agent only reads copies of the buffers
  that OpenSSL encrypts and decrypts. If the agent stops, requests carry on unaffected.
- **API keys stay out of logs and metrics.** The agent logs only the request path (without its query), pid,
  model and token counts, never headers or bodies. A test sends fake keys in headers, bodies and query strings
  and checks every log record at every level ([#45](https://github.com/honeybee-studio/honeybeepf-llm/pull/45)).
- **Per pod.** Calls from pods…
