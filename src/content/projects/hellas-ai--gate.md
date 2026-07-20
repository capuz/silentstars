---
repo: "hellas-ai/gate"
name: "gate"
description: "local encrypted p2p llm inference proxy/gateway"
readmeQualityOk: true
url: "https://github.com/hellas-ai/gate"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-10T19:40:35Z"
lastCommitAt: "2026-07-20T06:33:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 72
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cfdde84fa1c3f8e4b55c21aaff5285cf7f9a4081ebcb6c20297dfbbc99a5697/hellas-ai/gate"
---

<h1>gate</h1>

</div>

_Hellas Gate_ is a user-aligned llm inference server/proxy/router

# in-progress
some of most of this exists, read as a wishlist rather than supported though

- Private local inference via built-in [`catgrad`](https://github.com/hellas-ai/catgrad) engine
- End-to-end encrypted peer-to-peer mesh overlay to aggregate capacity across networked nodes
- Use [LetsEncrypt](https://letsencrypt.org/) to generate a private cert for a public `https://<your-node-id>.private.hellas.ai` endpoint, Hellas will relay it over p2p
- Upstream support for any openai/anthropic-compatible providers, openrouter, vllm, ollama etc 
- Supports [Cursor](https://cursor.ai), [Codex](https://github.com/openai/codex) and [Claude-Code](http://rickroll.com), open-webui, charm, etc via local http server
- API key management, cost-tracking, rate-limiting, quotas, permissions, etc
- Smart router can optimize routing for cost, latency, etc via 'virtual models'
- Capture/Log/Export all requests, responses, metadata through the gateway

# future
- Once [`catgrad`](https://github.com/hellas-ai/catgrad) ZK backend is implemented, we can support _verifying responses_- check request was serviced…
