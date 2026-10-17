---
repo: "hypequery/hypequery"
name: "hypequery"
description: "hypequery - The TypeScript analytics layer for ClickHouse"
readmeQualityOk: true
url: "https://github.com/hypequery/hypequery"
homepage: "https://hypequery.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["analytics", "clickhouse", "clickhouse-client", "dashboard", "typescript", "mcp", "semantic-layer", "apis"]
stars: 104
forks: 7
openIssues: 2
closedIssues: 30
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-03-17T05:35:01Z"
lastCommitAt: "2026-10-17T07:58:08Z"
lastReleaseAt: "2025-07-15T04:57:58Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 49
maintainers: ["lureilly1", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf0dfe2b116fd12f451085ccf394a4ccfdea2525d0ef698cf88fd1f35793ff24/hypequery/hypequery"
discussionCount: 6
---

# hypequery

hypequery is an open-source TypeScript semantic layer and type-safe query builder for ClickHouse. Define analytics once, then use the same trusted contract in backend code, multi-tenant APIs, React hooks, and MCP tools for AI agents.

It fits the stack you already have. Generate types from your live ClickHouse schema, model metrics in normal TypeScript, and catch broken tables, columns, filters, and result shapes before production—without another BI server or YAML project.

## One definition, every surface

```ts
import { dataset, dimension, measure } from '@hypequery/datasets';

export const Orders = dataset('orders', {
  source: 'orders',
  tenantKey: 'tenant_id',
  timeKey: 'created_at',
  dimensions: {
    region: dimension.string(),
    status: dimension.string(),
    createdAt: dimension.timestamp({ column: 'created_at' }),
  },
  measures: {
    revenue: measure.sum('amount'),
    orderCount: measure.count('id'),
    p95OrderValue: measure.percentile('amount', 0.95),
  },
});

export const revenue = Orders.metric('revenue', {
  measure: 'revenue',
});
```

That dataset can run in a worker, become a validated HTTP endpoint, power a typed React dashboard, or…
