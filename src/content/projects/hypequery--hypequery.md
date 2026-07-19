---
repo: "hypequery/hypequery"
name: "hypequery"
description: "hypequery - The TypeScript analytics layer for ClickHouse"
readmeQualityOk: true
url: "https://github.com/hypequery/hypequery"
homepage: "https://hypequery.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["analytics", "clickhouse", "clickhouse-client", "dashboard", "typescript", "mcp"]
stars: 91
forks: 5
openIssues: 2
closedIssues: 22
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-03-17T05:35:01Z"
lastCommitAt: "2026-07-19T06:11:55Z"
lastReleaseAt: "2025-07-15T04:57:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["lureilly1", "github-actions[bot]", "ShawnChen-Sirius"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fee171e9ca9548dc9c98693b3163c5c4a0011395c275b5fa2ae12b18d8fb647/hypequery/hypequery"
discussionCount: 6
---

</p>

  <h3 align="center">The type-safe analytics backend for ClickHouse</h3>
</p>

<h4 align="center">Define ClickHouse analytics once, then run them inline, over HTTP, in React, or from agents.</h4>

  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
</p>

  </a>
</p>

</p>

## The problem

Querying ClickHouse from TypeScript with the official client means writing raw SQL strings, casting results to `any`, and maintaining hand-rolled types that drift from your real schema.

As analytics features grow, the business meaning drifts too. `revenue`, `active users`, tenant scope, and time grain rules get copied across dashboards, API handlers, jobs, and agent tools until the product has several answers to the same question:

```ts
// Raw @clickhouse/client — no types, no safety, breaks silently
const result = await client.query({
  query: `SELECT region, sum(total) as revenue
          FROM orders
          WHERE created_at >= '2026-01-01'
          GROUP BY region
          ORDER BY revenue DESC`,
  format: 'JSONEachRow',
});
const rows = await result.json(); // typed as any[]
//    ^^^^ schema drift, typos, and runtime errors are on you
```

## The solution

hypequery gives TypeScript teams…
