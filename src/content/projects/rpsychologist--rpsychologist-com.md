---
repo: "rpsychologist/rpsychologist-com"
name: "rpsychologist-com"
description: "Source code for https://rpsychologist.com"
readmeQualityOk: true
url: "https://github.com/rpsychologist/rpsychologist-com"
homepage: "https://rpsychologist.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [61]
topics: ["research", "blog", "statistics", "psychology", "r", "vizualisation"]
stars: 73
forks: 27
openIssues: 18
closedIssues: 15
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2020-03-30T18:29:00Z"
lastCommitAt: "2026-10-25T08:41:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 47
maintainers: ["rpsychologist"]
openGraphImageUrl: "https://opengraph.githubassets.com/12633168abc9e0f7fda28ea44f9fb4eb4291bcb3fda5e54baad5ef2b3854b73e/rpsychologist/rpsychologist-com"
fundingLinks: ["CUSTOM:https://www.buymeacoffee.com/krstoffr", "CUSTOM:https://www.paypal.me/krstoffr"]
discussionCount: 2
---

# Source code for https://rpsychologist.com

The blog and its interactive visualizations, built with SvelteKit and prerendered to static files.

## Development

Requires Node ≥ 22.17 (see `.nvmrc`) and pnpm.

```sh
pnpm install
pnpm build     # prerender the site into build/ and index it for search
pnpm preview   # serve build/ at http://localhost:4173
```

`pnpm dev` is faster for editing, but it does not serve the search index or the older apps kept under `static/`; check those with `pnpm preview`.

```sh
pnpm check     # type and Svelte diagnostics, formatting
pnpm lint      # ESLint
pnpm test      # unit tests
pnpm test:e2e  # browser tests against the built site
```

## Layout

- `content/blog/` holds the posts, one folder per post.
- `src/lib/viz/` holds the interactive visualizations; each has its own version and changelog (see `RELEASING.md`).
- `static/` also contains older apps served as-is: the D3 visualizations (`/d3/…`), slides, the thesis, and copies of the previous site's p-value and therapist-effects pages until they are rewritten.

## Contributions are welcome

Open an issue if you want to discuss potential contributions.

The Cohen's _d_ page is translated; how…
