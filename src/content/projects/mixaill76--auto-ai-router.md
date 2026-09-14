---
repo: "MiXaiLL76/auto_ai_router"
name: "auto_ai_router"
description: "High-performance proxy router for LLM APIs with automatic load balancing, rate limiting, and fail2ban protection"
readmeQualityOk: true
url: "https://github.com/MiXaiLL76/auto_ai_router"
homepage: "https://mixaill76.github.io/auto_ai_router/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["ai", "gateway", "golang", "google", "litellm", "load-balancer", "openai", "openai-api", "vertex-ai", "air"]
stars: 52
forks: 14
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-01-24T12:59:56Z"
lastCommitAt: "2026-09-14T09:12:49Z"
lastReleaseAt: "2026-01-28T17:24:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["MiXaiLL76", "Vadzimik977", "kras1lnikoff"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1141208161/2bc17e32-5475-413b-b5a9-c290e2bdee0e"
---

# Auto AI Router

</p>

High-performance proxy router for LLM APIs with automatic load balancing, rate limiting, and fail2ban protection. Routes requests to OpenAI, Vertex AI, Gemini AI Studio, Anthropic, Comet API, and other Auto AI Router instances.

## Key Features

- **Multi-provider support** — OpenAI, Vertex AI, Gemini, Anthropic, Comet API, Proxy chains
- **Round-robin load balancing** — across multiple credentials per model
- **Rate limiting** — per-credential and per-model RPM/TPM controls
- **Fail2ban** — automatic provider banning on repeated errors
- **Prometheus metrics** — request counts, latency, credential status
- **LiteLLM DB integration** — spend logging and API key authentication
- **Streaming** — full SSE support for all providers
- **Environment variables** — secure credential management via `os.environ/VAR_NAME`

## Quick Start

```bash
# Build
git clone https://github.com/MiXaiLL76/auto_ai_router.git
cd auto_ai_router
go build -o auto_ai_router ./cmd/server/

# Run
./auto_ai_router -config config.yaml
```

Or with Docker:

```bash
docker pull ghcr.io/mixaill76/auto_ai_router:latest
docker run -p 8080:8080 -v $(pwd)/config.yaml:/app/config.yaml…
