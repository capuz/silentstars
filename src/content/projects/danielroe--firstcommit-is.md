---
repo: "danielroe/firstcommit.is"
name: "firstcommit.is"
description: "Find your first open-source commit on GitHub"
readmeQualityOk: true
url: "https://github.com/danielroe/firstcommit.is"
homepage: "https://firstcommit.is"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [72, 28]
topics: ["api", "commit", "github", "nuxt", "oauth"]
stars: 124
forks: 7
openIssues: 5
closedIssues: 8
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-08-23T15:16:55Z"
lastCommitAt: "2026-11-02T13:38:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 40
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/682162565/e3ede3a3-5561-4f5e-b029-7bc15b9d14f2"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# firstcommit.is

> Find your first open-source commit on GitHub

- [👉 &nbsp;Check it out](https://firstcommit.is/)

## Features

- Built on [Nuxt](https://nuxt.com/)
- [Nitro server API routes](https://nuxt.com/docs/guide/concepts/server-engine#server-engine)
- [GitHub API](https://docs.github.com/en/rest) and [OAuth](https://docs.github.com/en/apps/oauth-apps)
- [Cal Sans](https://github.com/calcom/font) font
- [Tailwind CSS](https://tailwindcss.com/)
- [nuxt-og-image](https://github.com/harlan-zw/nuxt-og-image), powered by [Satori](https://github.com/vercel/satori)
- Deployed on [Vercel](http://vercel.com), using ISR with [route rules](https://nitro.unjs.io/guide/cache#route-rules) to persist images, HTML and API requests permanently to a global CDN.

## Try it out locally

1. Generate a new GitHub token [here](https://github.com/settings/tokens).
2. Create an OAuth application and obtain a client secret and client ID [here](https://github.com/settings/developers).

Set your environment variables in a `.env` file:

```env
NUXT_GITHUB_TOKEN=<github token from step 1>
NUXT_GITHUB_CLIENT_SECRET=<oauth client secret from step 2>
NUXT_GITHUB_CLIENT_ID=<oauth client id from step 2>…
