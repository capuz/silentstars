---
repo: "xshaheen/headless-framework"
name: "headless-framework"
description: "headless-framework is a modern, open-source headless framework for .NET developers who want full control with zero constraints."
readmeQualityOk: true
url: "https://github.com/xshaheen/headless-framework"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 47
closedIssues: 363
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-07-11T13:36:47Z"
lastCommitAt: "2026-11-03T10:52:20Z"
lastReleaseAt: "2026-05-18T00:09:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 79
maintainers: ["xshaheen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6194b19257797959994ef5b394e4902686a60122737fa664c69249ded74e5ba/xshaheen/headless-framework"
---

# .NET Headless Framework

**Production backend infrastructure for .NET, without a framework taking over your app.**

[اللغة: العربية](https://github.com/xshaheen/headless-framework/blob/HEAD/README.ar.md)

213 packages &bull; One setup grammar &bull; Swap any provider in one line

[Why Headless](#why-headless) &bull; [60-second start](#60-second-start) &bull; [One grammar, every domain](#one-grammar-every-domain) &bull; [What is in the box](#what-is-in-the-box) &bull; [Package catalog](#package-catalog)

---

## Why Headless

Every backend service needs the same twenty things: a cache, blob storage, background jobs, a message bus, distributed locks, feature flags, dynamic settings, audit logs, email, SMS. You have three usual options, and each one costs you something.

- **Hand-roll them.** You write the outbox, the job claim query, and the lock renewal yourself. Those are the parts that fail at 3 a.m.
- **Glue twenty libraries together.** StackExchange.Redis, Hangfire, MassTransit, and Azure SDKs each have their own setup style, their own idea of a connection, and their own opinions about your DI container.
- **Adopt a full application framework.** You get everything at once,…
