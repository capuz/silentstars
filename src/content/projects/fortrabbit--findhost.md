---
repo: "fortrabbit/findhost"
name: "findhost"
description: "An openly-licensed, ratings-free register of web hosting providers, described by attributes rather than scores. Published by fortrabbit, the managed PHP hosting platform, which is listed in it too."
readmeQualityOk: true
url: "https://github.com/fortrabbit/findhost"
homepage: "https://findhost.app"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [64, 20]
topics: ["astro", "cc-by", "dataset", "fortrabbit", "hosting", "hosting-providers", "open-data", "php-hosting", "web-hosting"]
stars: 7
forks: 6
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-31T06:23:32Z"
lastCommitAt: "2026-11-09T11:59:09Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 69
maintainers: ["claude", "frank-laemmer", "weby-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b3b010befafc0cbe1982919b9761c8d8fe5a08582140785c1eb846de7840ce5/fortrabbit/findhost"
---

# FindHost

An openly-licensed register of web hosting providers, opinionated, described by attributes. Published by fortrabbit, who are in the register too.

## Run locally

```sh
pnpm install
pnpm dev                    # localhost:4321
pnpm build                  # astro build, then the search index
pnpm run check              # types
pnpm run test               # unit tests
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # internal links and the sitemap
pnpm run test:e2e           # Playwright, with and without JavaScript
```

Copy `.env.example` to `.env`; nothing in it is needed to develop. Astro 7, static output, no database, deployed to fortrabbit.

| | |
| --- | --- |
| `src/content/providers/` | one markdown file per provider |
| `src/data/fields.yml` | the field dictionary — every field, value and facet |
| `src/content/notes/` | one paragraph introducing a facet or one of its values |
| `src/content.config.ts` | the schema, and where "no scores" becomes a build failure |
| `scripts/validate.ts` | the guards zod cannot express |
| `src/pages/og/` | share cards, one per record and per facet |

Four fields are required of a listed…
