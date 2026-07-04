---
repo: "sandros94/h3-route-tools"
name: "h3-route-tools"
description: "Type-first routes for h3 v2 — validated params/body/query/response, a typed fetch client, and OpenAPI 3.1 — for plain h3 and nitro v3"
readmeQualityOk: true
url: "https://github.com/sandros94/h3-route-tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-08T10:15:39Z"
lastCommitAt: "2026-07-04T23:14:26Z"
lastReleaseAt: "2026-07-04T22:57:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 51
maintainers: ["sandros94", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/301fd25f0d01eebd7d084aedd4a6968e86cca1c015102922a4421aee42e5f118/sandros94/h3-route-tools"
fundingLinks: ["GITHUB:https://github.com/sandros94"]
---

# h3-route-tools

Type-first routes for [h3](https://h3.dev) v2 — validated params/body/query/response, a typed fetch client, and OpenAPI 3.1 — for plain h3 and [nitro](https://nitro.build) v3.

> [!NOTE]
> This is highly experimental with the main goal of exploring a fully type-first route design with a typed fetch client. The idea is based on the work done by [productdevbook](https://github.com/productdevbook) on the upstream [h3#1143](https://github.com/h3js/h3/pull/1143) and [h3#1237](https://github.com/h3js/h3/pull/1237).

Routes are validated with any [Standard Schema](https://standardschema.dev) validator (zod, valibot, …). The examples below use valibot.

## Plain h3

Define routes with per-method validation. The validated `params`/`query`/`headers` are written — typed — to `event.context` (and mirrored read-only on `event.validated`); the response is validated too, and failures return `400` automatically.

```ts
import { serve } from "srvx";
import { H3Typed } from "h3-route-tools";
import * as v from "valibot";

const app = new H3Typed().route({
  route: "/posts/:id",
  params: v.object({ id: v.pipe(v.string(), v.toNumber()) }),
  get: {
    validate: { response:…
