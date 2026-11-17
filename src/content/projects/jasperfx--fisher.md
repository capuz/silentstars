---
repo: "JasperFx/fisher"
name: "fisher"
description: "Sqlite Backed Document and Event Store within the Critter Stack"
readmeQualityOk: true
url: "https://github.com/JasperFx/fisher"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 16
forks: 3
openIssues: 3
closedIssues: 302
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-08-02T17:00:29Z"
lastCommitAt: "2026-11-17T12:18:48Z"
lastReleaseAt: "2026-08-20T21:36:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["jeremydmiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/058b1554f447868f82ec8b26ed53caf6828f10ca1b3c55b3e111e2514a05e8eb/JasperFx/fisher"
---

# Fisher

SQLite-backed Event Store and Document Database inside the Critter Stack.

**Documentation: [fisher.jasperfx.net](https://fisher.jasperfx.net/)**

Fisher is [Marten](https://martendb.io) and [Polecat](https://polecat.jasperfx.net) for SQLite —
event sourcing and document storage with the same API, in a database that is a **file inside your own
process**. There is no server to install, nothing to provision, and nothing to keep running. Backup is
`cp`. Tests need no fixture.

> **Status: 1.0.** The event store, document storage over all four
> identity types plus strong-typed wrappers, hierarchies, numeric revisions, soft delete, duplicated
> fields, user-declared indexes, document metadata mapping, LINQ — including joins, grouping and both
> paging styles — patching, bulk insert, DCB tags, natural keys, all five projection shapes across all
> three lifecycles (composite projections included), the async projection daemon, subscriptions, event
> rewriting — including data masking and stream compacting — both tenancy styles (conjoined and
> database-per-tenant, with tenants that appear at runtime), `AddFisher(...)` DI registration, and the
> `Fisher.AspNetCore` and…
