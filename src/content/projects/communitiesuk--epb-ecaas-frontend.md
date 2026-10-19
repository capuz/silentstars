---
repo: "communitiesuk/epb-ecaas-frontend"
name: "epb-ecaas-frontend"
description: "Check Part L web app for ECaaS in Nuxt"
readmeQualityOk: true
url: "https://github.com/communitiesuk/epb-ecaas-frontend"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [72, 28]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2024-11-22T15:53:15Z"
lastCommitAt: "2026-10-19T09:14:11Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 84
maintainers: ["katehjd21", "shieldo", "jameswainwright-mt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7b8a843404bd3827f6eae9fd208d5b81931ba74a6dfe64257f29119e1f106db/communitiesuk/epb-ecaas-frontend"
---

# EPB ECaaS Front-end

This is the codebase for the ECaaS front-end which acts as a user-interface for the ECaaS API to check part L building compliance.

The project is built using a combination of Nuxt, VueJS, FormKit (for forms) and TypeScript. This is to leverage the server-side rendering capabilities of Nuxt, whilst providing responsive UI components.

[Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)\
[VueJS documentation](https://vuejs.org/guide/introduction)\
[FormKit documentation](https://formkit.com/getting-started/what-is-formkit)

## Getting Started

### Prerequisites

- Node.js - 22.x or newer (but we recommend the active LTS release)
- One of these JavaScript package managers: `npm`, `yarn`, `bun` or `pnpm`
- See an up-to-date list of [Nuxt prerequisites](https://nuxt.com/docs/getting-started/installation#prerequisites)

### Setup

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Environment Variables

The following environment variables are required to perform a calculation. These can be set locally using a .env file in the project root.

| Environment Variable  |…
