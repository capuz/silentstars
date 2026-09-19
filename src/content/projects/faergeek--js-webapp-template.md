---
repo: "faergeek/js-webapp-template"
name: "js-webapp-template"
description: "React + React-Router based template for developing apps with SSR support"
readmeQualityOk: true
url: "https://github.com/faergeek/js-webapp-template"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["nodejs", "react", "react-router", "server-side-rendering", "ssr", "webpack"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-05T18:37:22Z"
lastCommitAt: "2026-09-19T01:40:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 74
maintainers: ["faergeek", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03bc57686231908faec2074370568cabefee2df1f6b6bfbc37e5a7f78b109e7d/faergeek/js-webapp-template"
---

# js-webapp-template

## Setup

Install packages:

```sh
pnpm install
```

## Development

Launch app in dev mode:

```sh
pnpm run dev
```

## Production

Build assets for production:

```sh
pnpm run build
```

After that, you'll find all build artifacts in the `workspace/node/dist`,
`workspace/service-worker/dist` and `workspace/web-page/dist` directories.

Then you need to start the built server:

```sh
pnpm start
```

# Docker

You can also build a docker image:

```sh
docker build -t js-webapp-template .
```

And then run it:

```sh
docker run --rm -p 8080:8080 --env COOKIE_SIGNING_SECRET=this-is-supposed-to-be-a-secret js-webapp-template
```

Or most probably deploy it somewhere.

## Environment Variables

dotenv-flow reads files like `.env`, `env.local` to setup environment variables.
For details see [dotenv-flow docs](https://github.com/kerimdzhanov/dotenv-flow)
