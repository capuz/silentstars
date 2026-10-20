---
repo: "chok/fougere"
name: "fougere"
description: "TypeScript business code first. Deployment and API later."
readmeQualityOk: true
url: "https://github.com/chok/fougere"
homepage: "https://fougere.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["framework", "graphql", "json-schema", "schema", "typescript", "api", "crud", "fullstack", "json-rpc", "microservices"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T21:18:51Z"
lastCommitAt: "2026-10-20T08:48:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["chok", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/38618186e776d266d80549e6ce11601c8105601f47abcde7a4d0da9384a92265/chok/fougere"
---

# 🌿 Fougere

**Fougere is focused on your business only. Build it.**<br/>
**Decide later which infrastructure topology you want,**<br/>
**And which technology you want in front of it (GraphQL, REST…).**

With one entity class, everything is derived (validation, table, API…).<br/>
No DTOs to write. It's the same class derived for your needs!<br/>
You split your app into [fronds](https://fougere.dev/docs/concepts/frond), one per business area, and each one can run inside it or on its own.

**[Documentation →](https://fougere.dev/)**

---

> [!IMPORTANT]
> Fougere is in alpha, so use it with caution: APIs and conventions may still change.<br/>
> There are also many [known issues](https://github.com/chok/fougere/blob/HEAD/KNOWN_ISSUES.md).

---

A picture (or an animation!) is worth a thousand words!

So first, **add a field** to an entity and everything derives from it (form, validation, APIs, SQL):

Secondly, **move a frond to its own process.** One line of config, and the code stays the same.

Everything your handler receives is validated against your schema, and it is served over JSON-RPC by default. You can enable REST or GraphQL as well.

> [!TIP]
> If you need full control…
