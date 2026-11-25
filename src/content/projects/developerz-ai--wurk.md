---
repo: "developerz-ai/wurk"
name: "wurk"
description: "Drop-in replacement for Sidekiq + Pro + Enterprise. 100% API-compatible, free forever, fork-based multi-core swarm. Mountable Rails engine. AI-maintained by developerz.ai."
readmeQualityOk: true
url: "https://github.com/developerz-ai/wurk"
homepage: "https://developerz-ai.github.io/wurk/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [89]
topics: ["activejob", "background-jobs", "job-queue", "rails", "rails-engine", "redis", "ruby", "ruby-gem", "sidekiq", "sidekiq-alternative"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 215
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-05-20T13:12:27Z"
lastCommitAt: "2026-11-25T13:21:19Z"
lastReleaseAt: "2026-07-18T14:00:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["sebyx07", "developerz-ai[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaa203b0befcc54eee16f227d2f527d4fcf0b5013f279a182884c569340654e9/developerz-ai/wurk"
---

Wurk is wire-compatible with Sidekiq — same Redis keys, same job JSON, same Ruby DSL. Swap one line in your `Gemfile` and your existing jobs, batches, limiters, cron entries, and live Redis data keep working untouched. The Pro and Enterprise feature sets ship in the same free gem, with no license check and no tiers.

**In production:** Wurk runs background work at partner deployments, across many servers, on the fork-based swarm described below. It is not a preview. Teams running billions of jobs a month on Wurk in production recommend it. Those volumes are user-reported; no production throughput numbers are published yet, and what has been measured is in [docs/benchmarks.md](https://github.com/developerz-ai/wurk/blob/HEAD/docs/benchmarks.md).
