---
repo: "Hugolify/hugolify-template"
name: "hugolify-template"
description: "Framework Hugo with Bootstrap and Headless CMS (Decap, Netlify, Pages, Static and Sveltia) – Github template"
readmeQualityOk: true
url: "https://github.com/Hugolify/hugolify-template"
homepage: "https://www.hugolify.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["hugo-template", "hugo-starter", "bootstrap", "netlify-cms", "hugo", "hugo-theme", "netlify", "hugolify", "jamstack", "decap-cms"]
stars: 42
forks: 7
openIssues: 1
closedIssues: 14
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-10-03T12:33:31Z"
lastCommitAt: "2026-11-23T10:20:59Z"
lastReleaseAt: "2024-10-25T10:59:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 41
maintainers: ["sebousan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/544899030/094a7920-5b97-4471-9f62-aa4c99114ec4"
fundingLinks: ["GITHUB:https://github.com/sebousan"]
---

# Hugolify template

> Is a Github template for build easily a fast, accessible friendly and low carbon website!

## Live demos

Each demo is a branch of this repository, deployed on Netlify.

https://www.hugolify.io/docs/showcase/

## Requirements

- [Hugo extended](https://gohugo.io/installation/) >= 0.158.0
- [Go](https://go.dev/doc/install)
- Node.js with yarn, npm or pnpm

## Installation

After cloning or updating Hugo modules, run:

```bash
yarn install:hugolify && yarn install
# or: npm run install:hugolify && npm install
# or: pnpm run install:hugolify && pnpm install
```

The `install:hugolify` script chains two steps:

1. `hugo mod get` downloads the Hugo modules declared in `config/_default/module.yaml`
2. `hugo mod npm pack` collects the npm dependencies of each module (PostCSS plugins, design tokens…) into the `packages/hugoautogen` workspace

The final install step installs the resulting npm packages.

> Run these commands whenever you add, remove, or update a Hugo module: the npm dependencies of a module are only available after this step.
