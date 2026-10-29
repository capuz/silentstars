---
repo: "iweidujiang/spring-insight"
name: "spring-insight"
description: "Lightweight monitoring for Spring Boot / Spring Cloud: business-side Starter instrumentation reports data, and a standalone insight-server provides topology and trace views."
originalDescription: "面向 Spring Boot / Spring Cloud 的轻量监测：业务侧 Starter 埋点上报，独立 insight-server 看拓扑与链路。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/iweidujiang/spring-insight"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [71, 22]
stars: 6
forks: 1
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-04T09:35:06Z"
lastCommitAt: "2026-10-29T10:21:01Z"
lastReleaseAt: "2026-09-30T07:33:34Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 56
maintainers: ["iweidujiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dde9037f8f612a5158f200342869209f01ddefe7ee159452dfa07f8f5175b2d/iweidujiang/spring-insight"
---

Spring Insight

**Lightweight APM / distributed tracing for Spring Boot.**

Lightweight distributed tracing and performance observability for Spring Boot: simple to integrate, zero-config to start, with a built-in UI. Suited to local development, integration debugging, and small-scale microservice observability.

---

## Why Spring Insight

SkyWalking, Zipkin, Micrometer Tracing and similar solutions are very capable, but integration cost is often high: collectors, storage, protocol agreements, aligning versions across multiple services...

Spring Insight is lighter:

- **Low integration cost**: add the Starter to your application and run an `insight-server` alongside it.
- **Trace visualization**: request lists, waterfall charts, call topology.
- **Easy troubleshooting**: filter by service / duration / status to locate slow requests and errors.
- **Suited to individuals / small teams**: no need for a heavyweight APM to see which services a request passed through, which segment is slow, and where it failed.

---

## Quick Start (two steps)

### 1. Start the monitoring center

**Docker (recommended)**

```bash
docker run --rm -p 9966:9966 \
  -e…
