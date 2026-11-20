---
repo: "ChronicStone/vue-route-query"
name: "vue-route-query"
description: "A powerful Vue 3 composable for type-safe URL query parameter synchronization with Zod validation and automatic state management."
readmeQualityOk: true
url: "https://github.com/ChronicStone/vue-route-query"
homepage: "https://vue-route-query.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [57, 41]
stars: 36
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-04-24T09:08:25Z"
lastCommitAt: "2026-11-19T11:52:14Z"
lastReleaseAt: "2026-11-18T12:10:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 38
maintainers: ["ChronicStone", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff6ee9f2612b0335dd9be9daf312067435cc4e9d40a288dd3328eceaa7cc288b/ChronicStone/vue-route-query"
---

# vue-route-query

Typed URL query state for Vue and vue-router. Like `ref()`, but stored in the query string.

**Documentation: https://vue-route-query.chronicstone.dev**

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
