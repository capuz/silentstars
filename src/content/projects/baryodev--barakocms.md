---
repo: "BaryoDev/barakoCMS"
name: "barakoCMS"
description: "A headless CMS suite for .NET"
readmeQualityOk: true
url: "https://github.com/BaryoDev/barakoCMS"
homepage: "https://barakocms.com/"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["aspnetcore", "cms", "content-management-system", "csharp", "dotnet", "dotnet-core", "event-sourcing", "fastendpoints", "headless-cms", "marten"]
stars: 6
forks: 5
openIssues: 117
closedIssues: 507
watchers: 1
contributors: 8
recentReleases: 9
createdAt: "2025-12-27T14:37:53Z"
lastCommitAt: "2026-10-25T02:23:48Z"
lastReleaseAt: "2026-09-29T02:54:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 89
maintainers: ["arnelirobles", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/213a79e9515628c0c0669dfe799b748ea45a36b2b5b743db71ad8cf7d6b3703e/BaryoDev/barakoCMS"
discussionCount: 0
---

BarakoCMS is a headless, API-first CMS built on [FastEndpoints](https://fast-endpoints.com/) and
[Marten](https://martendb.io/) (event sourcing over PostgreSQL). The core stays small and generic;
everything else, from accounting and analytics to email, file storage and auth providers, ships as **opt-in
modules** you compose per project, and it's **multi-tenant** out of the box.

This repository is the API, and its own surface is Swagger (`/swagger`, on when `Swagger:Enabled`
is true). The console that sits on top of it is **barakoBrew**, in its own repository at
[BaryoDev/barakoBrew](https://github.com/BaryoDev/barakoBrew), published from that repository as
`ghcr.io/baryodev/barako-brew`. Before barakoBrew 1.2.0 the image was `barako-admin`, and that name
is still pushed alongside it until barakoBrew 2.0.0. This repository has no front end.

> The name **Barako** comes from *kapeng barako*, a bold Philippine coffee varietal, hence the
> coffee-bean mark. The full-module image is "Barako"; the lean core is "Decaf".

### What it is, and what it is not

**Reachable.** No sales call, no partner tier, no procurement cycle, no discovery call. Clone it and
it runs. That is the part…
