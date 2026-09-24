---
repo: "Elijas/token-throttle"
name: "token-throttle"
description: "Multi-resource rate limiting for LLM APIs. Reserve tokens before you call, refund what you don't use, stay under the limit across workers."
readmeQualityOk: true
url: "https://github.com/Elijas/token-throttle"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "ai-agents", "ai-engineering", "llm", "llms", "rate-limit", "rate-limit-redis", "rate-limiter", "rate-limiting", "tokens"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2025-04-21T09:15:28Z"
lastCommitAt: "2026-09-24T08:40:56Z"
lastReleaseAt: "2026-09-14T16:08:45Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["Elijas", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e47245c00ba9d2fa24d72eaad71be7f0ac95f4bd20f368969e5b3b93403e6d9/Elijas/token-throttle"
---

# token-throttle

**Multi-resource rate limiting for LLM APIs.** Reserve tokens before you call, refund what you don't use, stay under the limit across workers.

Works with any LLM provider and any client library — token-throttle limits the _rate_, not the _client_.

```bash
pip install "token-throttle[redis,tiktoken]>=14.0.0,<15.0.0"   # OpenAI + Redis (recommended)
pip install "token-throttle[redis]>=14.0.0,<15.0.0"            # Any provider + Redis
pip install "token-throttle>=14.0.0,<15.0.0"                   # Any provider + in-memory
```

Requires Python 3.12+. The Redis backend needs Redis 6.2+ for the commands it issues, though tested coverage starts at 7.2; it supports standalone or Sentinel only — not Redis Cluster or client-side sharding (see [docs/operations.md](https://github.com/Elijas/token-throttle/blob/HEAD/docs/operations.md)).

token-throttle is beta and follows strict semver. The recent major-version sequence reflects rapid beta development, with each incompatible API or correctness change released as a major. Pin an exact major range (as shown above) and review the [CHANGELOG](https://github.com/Elijas/token-throttle/blob/HEAD/CHANGELOG.md) before upgrading —…
