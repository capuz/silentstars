---
repo: "ata-core/ata-validator"
name: "ata-validator"
description: "JSON Schema validator that compiles to plain JavaScript, still runs where code generation is blocked, and can be compiled away at build time. Passes the full official test suite. https://socket.dev/npm/package/ata-validator"
readmeQualityOk: true
url: "https://github.com/ata-core/ata-validator"
homepage: "https://ata-validator.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["json-schema", "napi", "native", "schema", "simdjson", "validation", "validator", "standard-schema", "draft-2020-12", "fastify"]
stars: 391
forks: 8
openIssues: 1
closedIssues: 21
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-22T16:53:00Z"
lastCommitAt: "2026-11-09T11:59:23Z"
lastReleaseAt: "2026-04-04T21:09:37Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 29
maintainers: ["mertcanaltin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cccb2daec8053f9d484f579903dbea538de2f11c287631140ef98ccb1a75098/ata-core/ata-validator"
fundingLinks: ["GITHUB:https://github.com/mertcanaltin", "GITHUB:https://github.com/lemire"]
discussionCount: 0
---

# ata-validator

JSON Schema validation where the TypeScript type comes from the schema, or the schema from the type. Write the schema once and `validate` narrows to it; write the type once and the bundler plugin writes its schema in at build time. The compiled and interpreted engines answer identically, at 100% of the official suite in both modes, across Draft 2020-12, 2019-09, drafts 7, 6 and 4 and the [JSON Schema v1 dialect](#dialects), and `ata build` emits a standalone module that imports nothing, with its `.d.mts` beside it.

1.0 is a stability commitment: see [docs/STABILITY.md](https://github.com/ata-core/ata-validator/blob/HEAD/docs/STABILITY.md) for the semver, deprecation, and error-code guarantees.

## The type and the schema

One source of truth, in either direction. A schema written with `defineSchema` carries its
type: `validate` narrows `data` to it, and `Infer` pulls the type out for a signature.

```ts
import { defineSchema, Validator, type Infer } from 'ata-validator'

const User = defineSchema({
  type: 'object',
  properties: {
    id: { type: 'integer', minimum: 1 },
    email: { type: 'string', format: 'email' },
    role: { enum: ['admin', 'user'] },
  },…
