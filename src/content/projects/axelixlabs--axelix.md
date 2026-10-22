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
stars: 154
forks: 24
openIssues: 187
closedIssues: 795
watchers: 6
contributors: 20
recentReleases: 8
createdAt: "2025-07-31T09:55:33Z"
lastCommitAt: "2026-10-22T08:52:35Z"
lastReleaseAt: "2026-10-20T15:48:08Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 95
undervaluedScore: 49
maintainers: ["mipo256", "NikitaKirilloff", "sergeycherkasovv"]
openGraphImageUrl: "https://opengraph.githubassets.com/68c6256f09af303dc964471e1aa1e6a54e2ce305e5859e4dc891476da5239046/axelixlabs/axelix"
discussionCount: 9
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
