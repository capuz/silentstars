---
repo: "shopware/frontends"
name: "frontends"
description: "Shopware Frontends is a framework for building custom, headless storefronts with Shopware 6."
readmeQualityOk: true
url: "https://github.com/shopware/frontends"
homepage: "https://frontends.shopware.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [60, 39]
topics: ["ecommerce", "headless", "javascript", "nuxt", "vue", "react", "tailwindcss", "unocss", "vitepress", "vuejs"]
stars: 231
forks: 86
openIssues: 73
closedIssues: 573
watchers: 26
contributors: 62
recentReleases: 0
createdAt: "2022-01-03T09:01:58Z"
lastCommitAt: "2026-10-29T10:20:39Z"
lastReleaseAt: "2023-06-27T17:36:53Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 96
undervaluedScore: 43
maintainers: ["mdanilowicz", "mkucmus", "patzick"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2308f6a40cc52129af0c1aea9d575d0948b473a73b5d102ee1b0e9320a179a1/shopware/frontends"
discussionCount: 34
---

| <a href="https://github.com/shopware/frontends/discussions">💬 Discuss</a> | <a href="https://discord.com/channels/1308047705309708348/1405501315160739951" target="_blank"><img src="./.readme/discord.svg" alt="Join our Discord Channel" width="20" height="16"/> Discord Channel</a>

	Shopware Frontends is Shopware's Vue.js <strong>framework</strong> for building custom storefronts.

---

## Getting started (contribution)

Node.js (current LTS) and [pnpm](https://pnpm.io/installation#using-npm) are required to run the project.
To be sure about the version compatibility you can enable Node's [corepack](https://nodejs.org/api/corepack.html).

```sh
# Install dependencies
pnpm i

# Build packages
pnpm run build --filter='./packages/*'

# Run project base
pnpm run dev --filter=vue-starter-template
```

### Run and develop docs

```sh
pnpm run docs:env
pnpm run docs:link
pnpm run docs:preview
```

`docs:env` clones [developer-portal](https://github.com/shopware/developer-portal) next to this repo over SSH, so it needs a [GitHub SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). Without one, clone it yourself over HTTPS first and rerun the command:

```sh…
