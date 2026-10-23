---
repo: "drewsilcock/silcock-dev"
name: "silcock-dev"
description: "Drew's Dev Blog"
readmeQualityOk: true
url: "https://github.com/drewsilcock/silcock-dev"
homepage: "https://drew.silcock.dev"
language: "MDX"
languages: ["MDX"]
languagePcts: [55]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-10-24T20:36:27Z"
lastCommitAt: "2026-10-23T09:32:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 44
maintainers: ["drewsilcock"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c5d943369538b33effdacd9142578ae3687c8d6300a5b8087cb858fe84e710/drewsilcock/silcock-dev"
discussionCount: 5
---

# Drew's Dev Blog

This is the code for my dev blog.

It was originally based on [Astro Micro](https://astro.build/themes/details/astro-micro/) but I've made some fairly significant changes since then.

## Getting started

Install the latest Node LTS (e.g. via nvm). Then:

```shell
# To run dev environment
pnpm dev

# To build site to static 'dist' folder.
pnpm build

# To format code
pnpm format

# To check / lint code
pnpm run check
pnpm run lint

# Run this before committing
pnpm precommit
```

## Deployment

Everything deploys from Cloudflare off the Git repo — there are no Cloudflare
credentials stored in GitHub:

- **The site** (Astro → static `dist/`) is deployed by the [Cloudflare Pages Git
  integration](https://developers.cloudflare.com/pages/get-started/git-integration/).
  Connect the repo once in the Cloudflare dashboard with build command
  `pnpm build` and output directory `dist`; every push to `main` then builds and
  deploys automatically (and each PR gets a preview).
- **The Worker** (`worker/`) is deployed by [Cloudflare Workers
  Builds](https://developers.cloudflare.com/workers/ci-cd/builds/). Connect the
  repo with root directory `worker/`, deploy command…
