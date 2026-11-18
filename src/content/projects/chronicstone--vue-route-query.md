---
repo: "ChronicStone/vue-route-query"
name: "vue-route-query"
description: "A powerful Vue 3 composable for type-safe URL query parameter synchronization with Zod validation and automatic state management."
readmeQualityOk: true
url: "https://github.com/ChronicStone/vue-route-query"
homepage: "https://vue-route-query.vercel.app"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [51, 49]
stars: 36
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-24T09:08:25Z"
lastCommitAt: "2026-11-18T12:08:44Z"
lastReleaseAt: "2025-04-29T18:37:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 23
maintainers: ["github-actions[bot]", "ChronicStone"]
openGraphImageUrl: "https://opengraph.githubassets.com/078f2a660119dead37067d36f0072c1f88f6efd940ff8e9e7e24c6118526be5c/ChronicStone/vue-route-query"
---

# vue-route-query

Typed URL query state for Vue and vue-router. Like `ref()`, but stored in the query string.

**Documentation: https://vue-route-query.vercel.app**

```bash
npm install @chronicstone/vue-route-query
```

## Repository

| Path                               | What it is                                     |
| ---------------------------------- | ---------------------------------------------- |
| [`packages/core`](https://github.com/ChronicStone/vue-route-query/blob/HEAD/packages/core) | The `@chronicstone/vue-route-query` package    |
| [`apps/docs`](https://github.com/ChronicStone/vue-route-query/blob/HEAD/apps/docs)         | The documentation site (Nuxt, Docus, Twoslash) |

```bash
bun install
bun run docs:dev   # docs on http://localhost:3000
bun run check      # type-check, test, build every package
bun run test       # core tests only through turbo
```

Releases go through [changesets](https://github.com/changesets/changesets): add one with `bun run changeset` in the pull request.

## License

[MIT](https://github.com/ChronicStone/vue-route-query/blob/HEAD/LICENSE)
