---
repo: "axelixlabs/axelix"
name: "axelix"
description: "The source code of Axelix - a Delta Force for your Spring Boot ecosystem "
readmeQualityOk: true
url: "https://github.com/axelixlabs/axelix"
homepage: "https://axelix.io"
language: "Java"
languages: ["Java"]
languagePcts: [68]
topics: ["java", "spring-boot", "monitoring", "spring-framework", "enterprise", "kotlin"]
stars: 134
forks: 18
openIssues: 154
closedIssues: 673
watchers: 5
contributors: 17
recentReleases: 4
createdAt: "2025-07-31T09:55:33Z"
lastCommitAt: "2026-08-28T14:23:02Z"
lastReleaseAt: "2026-08-27T09:38:17Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 50
maintainers: ["mipo256", "NikitaKirilloff", "sygkanrt30"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21ed912a9daa86673cefacd7bbd5811b3a624841d061cc610fe3cf575b3f54c/axelixlabs/axelix"
discussionCount: 8
---

**Axelix is an open-source tool that surfaces the production problems your Spring Boot app hides from
you, then lets you inspect and change any running service from a web console or an AI agent.**

You know the drill. The app passes every test on your laptop and still falls over in staging. A
property resolves to a value nobody remembers setting. A `@ConditionalOnMissingBean` quietly wires in
the wrong implementation. A `Pageable` query with a `JOIN FETCH` pulls the whole table into heap.
`open-in-view` is still `true` in production. Axelix catches this class of problem before it pages
you, and when something is already broken it shows you the live beans, properties, transactions, and
logs of the running JVM, with no redeploy and no SSH.

## What Axelix does

Axelix reads a running Spring Boot service and flags the concrete anti-patterns and misconfigurations
that pass locally but cost you performance, stability, or security in production. It works on a plain
Spring Boot app, with no rewrite and no new framework: apply the fixes it points at and your memory 
footprint, throughput, GC pauses, and startup time will drastically improve.

Axelix analyses your app on every layer, from…
