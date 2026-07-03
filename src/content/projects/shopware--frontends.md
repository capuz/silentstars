---
repo: "shopware/frontends"
name: "frontends"
description: "Shopware Frontends is a framework for building custom, headless storefronts with Shopware 6."
url: "https://github.com/shopware/frontends"
homepage: "https://frontends.shopware.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [59, 41]
topics: ["ecommerce", "headless", "javascript", "nuxt", "vue", "react", "tailwindcss", "unocss", "vitepress", "vuejs"]
stars: 226
forks: 85
openIssues: 31
closedIssues: 498
watchers: 26
contributors: 58
recentReleases: 0
createdAt: "2022-01-03T09:01:58Z"
lastCommitAt: "2026-07-03T12:40:13Z"
lastReleaseAt: "2023-06-27T17:36:53Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 97
undervaluedScore: 44
maintainers: ["mkucmus", "mdanilowicz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6164419b6e24ec7ac2bc44a041fdc3e84e9820b5dd48236932503599843a461f/shopware/frontends"
discussionCount: 34
---

</div>

 | <a href="https://github.com/shopware/frontends/discussions">💬 Discuss</a> | <a href="https://discord.com/channels/1308047705309708348/1405501315160739951/archives/C050L6NCMGQ" target="_blank"><img src="./.readme/discord.svg" alt="Join our Discord Channel" width="20" height="16"/> Discord Channel</a>
</p>

	Shopware Frontends is Shopware's Vue.js <strong>framework</strong> for building custom storefronts.
</p>

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
pnpm run dev --filter='docs'
```

## Architecture

Shopware Frontends is a framework which is divided into separate modules of which some can be used independently.

**API Client**

This package provides abstraction to Shopware's Store API and manages authentication state and request/response schemas.…
