---
repo: "er2es/fuzzphony"
name: "fuzzphony"
description: "Fuzzphony is a PostgreSQL-native search layer for PHP and Symfony: typo-tolerant, accent-insensitive, ranked full-text search with filters and a real query language, without Elasticsearch, Meilisearch or any other service. Tables are never altered; a sidecar index table sits next to them."
readmeQualityOk: true
url: "https://github.com/er2es/fuzzphony"
homepage: "https://packagist.org/packages/fuzzphony/fuzzphony"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["fuzzy-search", "php8", "postgresql", "symfony", "demo-app"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-24T05:23:15Z"
lastCommitAt: "2026-11-03T10:52:26Z"
lastReleaseAt: "2026-10-09T09:37:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 40
maintainers: ["er2es"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9b78d5dcdbd6a3ba7e4c6cddc8b101385e65239477c9dd7b839c85344422133/er2es/fuzzphony"
---

# Fuzzphony

**Fuzzy search, in perfect harmony with your database.**

Fuzzphony is a small, relevant alternative to Elasticsearch and Meilisearch for PHP and Symfony applications that already run
PostgreSQL: typo-tolerant, accent-insensitive, ranked full-text search with filters, facets and a query language. It never
alters your tables. The index lives in a sidecar table next to them, in the database you already run, so there is no search
service to add, feed or keep in step.

- **Consistent.** The index is in the same PostgreSQL as your data: no dual write, no second system that can disagree. With
  `sync: trigger` a row and its index entry change in one transaction (no lag); with the queue, within one worker batch. A
  search runs inside your transaction and sees what it sees.
- **Secure.** Authorization is built in: a tenant-scoped index refuses a search without a tenant, a field can be granted to a
  role, and a field a viewer may not see is not matched, ranked, highlighted, counted or suggested from. Tests prove a hidden
  field's content cannot change a restricted viewer's results. A search that names no actor is made as the current user.
- **Fast and small.** Common…
