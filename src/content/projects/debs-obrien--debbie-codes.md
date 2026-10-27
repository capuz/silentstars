---
repo: "debs-obrien/debbie.codes"
name: "debbie.codes"
description: "My website built in Nuxt and using Nuxt Content. Feel free to clone it and play around with it."
readmeQualityOk: true
url: "https://github.com/debs-obrien/debbie.codes"
homepage: "https://debbie.codes"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [43, 36]
topics: ["nuxt", "vuejs", "vue"]
stars: 143
forks: 47
openIssues: 1
closedIssues: 16
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2019-08-07T18:19:18Z"
lastCommitAt: "2026-10-27T12:40:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 48
maintainers: ["debs-obrien", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/201104957/5b59762c-dc04-495c-988a-3dbd729cd8ce"
---

# Debbie O'Brien

This is my website which I built in Nuxt 3. I use it as my playground for trying out new stuff and having fun. Feel free to have a look around and copy whatever you like as the code is open source so if it helps you then great. All content is written in markdown using Nuxt Content v2 and makes it very easy to add new posts, videos etc. Site is a static site meaning it can be hosted for free on any hosting service such as Netlify.

After cloning it make sure you run yarn or npm install to install everything and then start the dev servers.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://127.0.0.1:8000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Agent review loop (pstack)

Install [pstack](https://cursor.com/marketplace/cursor/pstack) in Cursor before asking an agent to babysit or merge Wave A PRs:

1. In Cursor chat, run `/add-plugin pstack`
2. Run `/setup-pstack` and pick models
3.…
