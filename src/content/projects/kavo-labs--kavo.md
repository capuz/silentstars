---
repo: "kavo-labs/kavo"
name: "kavo"
description: "🚀 The fastest way to build CRUD APIs in TypeScript. Works with your favorite JavaScript framework and ORM, featuring filtering, sorting, pagination, and OpenAPI support."
readmeQualityOk: true
url: "https://github.com/kavo-labs/kavo"
homepage: "http://kavo.js.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["crud", "nodejs", "rest", "rest-api", "restapi", "restful", "restful-api", "typescript", "mikroorm", "mongoose"]
stars: 12
forks: 1
openIssues: 25
closedIssues: 118
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-25T11:07:46Z"
lastCommitAt: "2026-08-29T10:20:25Z"
lastReleaseAt: "2026-08-20T10:49:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["h16d", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1311913266/16fe75fa-9673-4614-a0f9-db29f1087c61"
discussionCount: 1
---

</p>

<h3 align="center">Turn models into APIs.</h3>

  Define an entity once and get a complete REST and
  GraphQL CRUD API with filtering, sorting, pagination, and generated routes.
</p>

</p>

# Kavo

Define an entity once, add one decorator, and Kavo generates the rest: create,
read, update, delete, filtering, sorting, pagination, nested includes, and
field selection — no hand-written controller methods.

[Read documentation](https://kavo.js.org/getting-started)

## Getting started

**pnpm**

```bash
pnpm add @kavo/core @kavo/nest @kavo/typeorm
```

**npm**

```bash
npm install @kavo/core @kavo/nest @kavo/typeorm
```

**yarn**

```bash
yarn add @kavo/core @kavo/nest @kavo/typeorm
```

**bun**

```bash
bun add @kavo/core @kavo/nest @kavo/typeorm
```

`@kavo/nest` expects `@nestjs/common`, `@nestjs/core`, `reflect-metadata`, and
`rxjs` as peers, and `@kavo/typeorm` expects `typeorm` — a Nest app already has
the first four. Kavo needs Node 22+, an ESM app, and `emitDecoratorMetadata`;
see [Requirements](https://kavo.js.org/getting-started#requirements) and
[Peer dependencies](https://kavo.js.org/getting-started#peer-dependencies) for
the exact versions.

```ts
@Kavo(Book)…
