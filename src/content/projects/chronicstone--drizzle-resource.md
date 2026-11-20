---
repo: "ChronicStone/drizzle-resource"
name: "drizzle-resource"
description: "Typed list endpoints for Drizzle ORM: validated filters, search, sorting, pagination, facets and totals, tenant-scoped on the server."
readmeQualityOk: true
url: "https://github.com/ChronicStone/drizzle-resource"
homepage: "https://drizzle-resource.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-03-28T00:05:38Z"
lastCommitAt: "2026-11-19T11:52:12Z"
lastReleaseAt: "2026-09-21T10:07:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 58
maintainers: ["ChronicStone", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ba035230cd73de591a09c8980827424a9ae9fc6134efc1444fc1689c71ad1e9/ChronicStone/drizzle-resource"
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

drizzle-resource builds the list endpoints of an app on top of Drizzle ORM. You define a resource once on a table: which relations it loads, which fields can be filtered, searched, sorted and counted, and the tenant condition every query must carry. Each request is then checked against that definition, turned into SQL, and returned as typed rows with page info, facet counts and totals.

Field paths such as `customer.name` or `orderLines.product.category` are typed from your schema and relations, so a typo is a compile error. The tenant scope comes from your server context, never from the request, so a client cannot remove it.

```sh
bun add drizzle-resource      # or: pnpm add / npm install
```

Requires `drizzle-orm >= 1.0.0-rc.5` with relational queries.
