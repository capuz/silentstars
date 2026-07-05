---
repo: "swyxio/swyxdotio"
name: "swyxdotio"
description: "This is the repo for swyx's blog - Blog content is created in github issues, then posted on swyx.io as blog pages! Comment/watch to follow along my blog within GitHub"
readmeQualityOk: true
url: "https://github.com/swyxio/swyxdotio"
homepage: "https://swyx.io"
language: "JavaScript"
languages: ["JavaScript", "Svelte"]
languagePcts: [54, 38]
topics: ["jamstack", "netlify", "static-site", "svelte", "sveltekit", "tailwindcss"]
stars: 413
forks: 49
openIssues: 42
closedIssues: 455
watchers: 14
contributors: 31
recentReleases: 0
createdAt: "2017-10-22T06:35:18Z"
lastCommitAt: "2026-07-05T06:33:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 37
maintainers: ["swyxio", "zmeyer44"]
openGraphImageUrl: "https://opengraph.githubassets.com/f11d173c269bd8cdca2f5889e638dbaa88a7a7e905098dd0ca94220bcb533dd4/swyxio/swyxdotio"
discussionCount: 3
---

# swyx's personal site

swyx's personal site, using:

- SvelteKit 2 + Svelte 5
- Tailwind 3 + Tailwind Typography
- `marked` + `shiki` for markdown rendering (replaced mdsvex/remark)
- Cloudflare Workers with Static Assets (hybrid: prerendered static pages + on-demand SSR posts, edge-cached)
- GitHub Issues as CMS

If you want to make a site based on this, see https://github.com/swyxio/swyxkit for a cleaner starter template

## Architecture / rendering

- **Static (prerendered at build):** `/about`, `/portfolio`, `/subscribe`.
- **Dynamic + edge-cached:** `/`, `/ideas`, `/[slug]`, `/rss.xml`, `/sitemap.xml`, and `/api/*`.
  Rendered on demand on Cloudflare Workers and stored in the Cache API via `src/hooks.server.js`
  until `s-maxage` expires, so new posts appear without a rebuild and serving is O(1).
- **Durable content manifest:** the Worker reads the parsed GitHub Issues CMS data from the
  `CONTENT_MANIFEST` KV namespace. GitHub is only queried to bootstrap an empty namespace or
  refresh it after a webhook, so ordinary cache misses do not depend on GitHub availability.
- **Compact ideas list:** `/api/listContent.json` omits article bodies for the default `/ideas`,
  RSS, and…
