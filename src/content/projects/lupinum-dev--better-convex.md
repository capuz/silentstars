---
repo: "lupinum-dev/better-convex"
name: "better-convex"
description: "Convex integration for Nuxt with SSR, real-time subscriptions, and authentication."
readmeQualityOk: true
url: "https://github.com/lupinum-dev/better-convex"
homepage: "https://better-convex.lupinum.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["authentication", "better-auth", "convex", "nuxt", "nuxt-module", "realtime", "ssr", "vue"]
stars: 35
forks: 1
openIssues: 1
closedIssues: 42
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-30T09:11:06Z"
lastCommitAt: "2026-11-07T10:37:31Z"
lastReleaseAt: "2026-01-14T14:31:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["Mat4m0", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/382e64ec8d315bc032c2c80e394a0d7a5e2ec63db37ce91aa054b20891e80436/lupinum-dev/better-convex"
---

> [!WARNING]
> These packages are prerelease software. Read the [changelog](https://github.com/lupinum-dev/better-convex/blob/HEAD/CHANGELOG.md) before every upgrade. The authentication component cannot reuse the database of another Better Auth integration. Start it with a fresh component.

## Why use Better Convex?

[Convex](https://convex.dev) is a backend with a realtime database. Its queries push new results to the browser when data changes. Better Convex connects Convex to Nuxt and Vue:

- `useConvexQuery` loads a query during server rendering, sends the result with the page, and keeps it live in the browser.
- `useConvexMutation`, `useConvexAction`, `useConvexForm`, and `useConvexFileUpload` return reactive `pending`, `error`, and `data` state.
- Writes, uploads, and `useConvexOperation` belong to the user who started them. When that user changes, no later request is sent, and the error tells whether the last one was sent.
- A failed call rejects with a `ConvexCallError` that has a `message`, a `code`, and the `functionName` that failed. `useConvexForm` reports validation and submission failures as `ConvexFormError`.
- `serverConvex(event)` calls Convex from a Nitro route as…
