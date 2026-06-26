---
repo: "vercel-labs/next-beats"
name: "next-beats"
description: "A Next.js 16.3 music player demonstrating Instant Navigations with Cache Components, App Shells, and Partial Prefetching"
url: "https://github.com/vercel-labs/next-beats"
homepage: "https://next-beats.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["cache-components", "demo", "music-player", "nextjs", "prefetching", "react", "streaming", "tailwindcss", "typescript", "instant-navigation"]
stars: 26
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-27T21:32:27Z"
lastCommitAt: "2026-06-26T21:31:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["aurorascharff"]
openGraphImageUrl: "https://opengraph.githubassets.com/899078ad78a95d271f7fe7ef2dc7d5c3f6cc091581c1d16cd516caedd026f5d2/vercel-labs/next-beats"
---

# NextBeats

A Next.js 16.3 music player demonstrating [Instant Navigations](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/instant-navigation.mdx).

[**Live demo →**](https://next-beats.dev)

</div>

---

## Features

- [Cache Components](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) opt queries and components into the server cache with `'use cache'`, `cacheTag`, and `cacheLife`.
- [Partial Prefetching](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/adopting-partial-prefetching.mdx) (`partialPrefetching: true` in 16.3) prefetches each in-viewport link's App Shell so the click commits before per-request data lands.
- `<Link prefetch={true}>` adds the destination's cached page body on top of the shell.
- `export const prefetch = 'allow-runtime'` on the destination prerenders link-specific data (params, searchParams, cookies, headers, `'use cache: private'`) at prefetch time.
- [`updateTag`](https://nextjs.org/docs/app/api-reference/functions/updateTag) from [Server Functions](https://nextjs.org/docs/app/getting-started/mutating-data) invalidates only the surfaces a mutation actually touches.
- [View…
