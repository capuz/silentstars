---
repo: "Nimbleway/webrouter"
name: "webrouter"
description: "WebRouter is an open source standard that connects your agent to the web"
readmeQualityOk: true
url: "https://github.com/Nimbleway/webrouter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "llm-tools", "mcp", "python", "web-search", "router"]
stars: 65
forks: 15
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 14
recentReleases: 10
createdAt: "2026-10-08T19:24:10Z"
lastCommitAt: "2026-11-11T10:58:07Z"
lastReleaseAt: "2026-11-10T11:25:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 32
maintainers: ["yogev-nimble", "alongoldenberg", "ilchemla"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c53a62ba4539e740ee9b761be27ad671d2b454ff627e961ccfcda057ff0fefc/Nimbleway/webrouter"
discussionCount: 2
---

Connect your agent to every web tool through one interface: search, extract, live data, answer, research and browser sessions, across many providers. A [router](https://github.com/Nimbleway/webrouter/blob/main/README.md#smart-routing-experimental) can pick the tool and provider for each task, trading off cost, latency and coverage for your domain and the providers you have keys for.

```bash
pip install "webrouter[all]"
```

```python
from web_router import Provider, WebRouter

WebRouter().search("what is retrieval augmented generation")  # no key needed
WebRouter(Provider.NIMBLE).search("...")  # or name one
WebRouter(Provider.TAVILY).search("...")  # same call, same result shape

WebRouter().extract("https://example.com")  # page contents, also keyless

WebRouter().live_data("walmart_pdp", {"product_id": "..."}, provider="nimble")  # a site's fields, fetched now

WebRouter(Provider.LINKUP).answer("...")  # a written answer with its sources, in one call

WebRouter().call_vendor("datadog.logs.search", {"filter": {"query": "status:error"}})  # your own vendor accounts

WebRouter(Provider.NIMBLE).research("...")  # an agentic run: minutes, not milliseconds

with…
