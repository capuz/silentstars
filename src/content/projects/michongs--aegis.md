---
repo: "MiChongs/aegis"
name: "aegis"
description: "High-performance multi-tenant user platform built with Go, Gin, PostgreSQL, Redis, NATS and Temporal."
readmeQualityOk: true
url: "https://github.com/MiChongs/aegis"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 33]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-20T02:29:25Z"
lastCommitAt: "2026-08-12T05:15:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 11
maintainers: ["MiChongs"]
openGraphImageUrl: "https://opengraph.githubassets.com/e545e20d806ac1cdf817f12e64c27d65c448bc94a9e070e2eaa3fa44a514a569/MiChongs/aegis"
---

</div>

**Language:** **English** | [简体中文](https://github.com/MiChongs/aegis/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/MiChongs/aegis/blob/HEAD/README.ja.md)

**Aegis** is a production-oriented, multi-tenant user platform built with Go for high concurrency, clean service boundaries, and realtime-ready delivery.

<p>
</p>

</div>

## Platform Profile

<table>
  <tr>
    <td width="33%">
      <strong>Runtime Model</strong><br/>
      Unified Go runtime for <code>api + worker</code>, with clear bootstrap boundaries and shared infrastructure clients.
    </td>
    <td width="33%">
      <strong>Tenant Isolation</strong><br/>
      Application boundaries are enforced through <code>appid</code>, with scoped session, cache, notification, and realtime paths.
    </td>
    <td width="33%">
      <strong>Operational Focus</strong><br/>
      Built around predictable hot paths, cache-first validation, async pipelines, and public-safe edge behavior.
    </td>
  </tr>
  <tr>
    <td width="33%">
      <strong>Primary Storage</strong><br/>
      PostgreSQL for transactional data, Redis for session, cache, unread-count, and presence indexing.
    </td>
    <td width="33%">…
