---
repo: "momijineko/llm-retry-proxy"
name: "llm-retry-proxy"
description: "A local reverse proxy forwarding tool for LLM APIs. When upstream services (such as Coding Plan) return overload, it automatically retries at fixed intervals until data is obtained. It fully transparently transmits requests/responses (including SSE streaming) to the client."
originalDescription: "一个面向 LLM API 的本地反向代理转发工具。上游服务（如 Coding Plan）过载返回时，自动按固定间隔重试，直到拿到数据。完整透传请求/响应（含 SSE 流式），对客户端透明。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/momijineko/llm-retry-proxy"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [52, 43]
topics: ["coding-plan", "llm", "proxy", "xfyun"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-07T10:23:34Z"
lastCommitAt: "2026-07-16T05:59:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["momijineko"]
openGraphImageUrl: "https://opengraph.githubassets.com/49d7a782adaa48c74ebbc6a534d070bc76187e59e1ab944ded479743f96e2065/momijineko/llm-retry-proxy"
---

# llm-retry-proxy

A local reverse proxy forwarding tool for LLM APIs. When upstream services (such as Coding Plan) return 503 due to overload, it automatically retries at fixed intervals until data is obtained. It fully transparently transmits requests/responses (including SSE streaming) to the client.

Core capabilities include: fixed interval/exponential backoff retries, 429 specific backoff (prioritizing `Retry-After`), racing mode (request racing/rolling racing), multi-upstream routing diversion, key pool multi-key degradation, daily JSONL detailed logs and cumulative summaries, and a built-in visualization analysis panel.

> **Key Pool** is used for multi-key failover at the relay station: it uses keys in order from top to bottom as configured, and automatically switches to the next available key when encountering 429/5xx errors. It is loosely coupled with the retry engine and does not intervene in the request process when not configured.

**This project only recommends using serial polling requests. Please use racing mode with caution, as improper use may put great pressure on the model provider's service endpoints, which may seriously lead to account bans or other…
