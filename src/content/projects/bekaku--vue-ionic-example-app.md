---
repo: "bekaku/vue-ionic-example-app"
name: "vue-ionic-example-app"
description: "Vue JS 3 + Typescript + Ionic 8"
readmeQualityOk: true
url: "https://github.com/bekaku/vue-ionic-example-app"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [51, 39]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-17T10:10:24Z"
lastCommitAt: "2026-10-05T10:47:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 52
maintainers: ["bekaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/c72c9b2543b275d8095bb0a79b6a4b1c57c706b45e545dec0bb7fd915c2959a3/bekaku/vue-ionic-example-app"
---

# Vue Ionic mobile

# Backend Rest Api

1 Java Springboot [java-spring-boot-starter](https://github.com/bekaku/java-spring-boot-starter)

## Setup

Make sure to install the dependencies (this repo uses **pnpm**):

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3004

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build:vite
```

or (needs the global Ionic CLI):

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Sync code to Android studio and Xcode:

```bash
npx cap sync
```

Sync code to Android studio:

```bash
npx cap sync android
```

Sync code to xCode:

```bash
npx cap sync ios
```
