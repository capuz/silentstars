---
repo: "oscartbeaumont/spotistats"
name: "spotistats"
description: "Spotistats is a tool designed to analyse and backup your music on Spotify!"
readmeQualityOk: true
url: "https://github.com/oscartbeaumont/spotistats"
homepage: "https://spotistats.js.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["spotify", "spotify-api", "spotify-stats", "spotify-backup"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 32
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-30T14:50:34Z"
lastCommitAt: "2026-11-02T11:36:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 74
maintainers: ["oscartbeaumont", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a025487fc5162e01f1a9bc798cab1cccd2bfff5c3a5eb8dbf1db97362a8f548/oscartbeaumont/spotistats"
---

Spotistats is a tool designed to analyse and backup your music on Spotify!

Previously [https://spotistats.js.org].

# Stack

- [SolidJS 2](https://www.solidjs.com) with [`@solidjs/router`](https://docs.solidjs.com/solid-router) for the browser app.
- [`@solidjs/vite-plugin`](https://www.npmjs.com/package/@solidjs/vite-plugin) start mode for the entries, the document shell and server rendering. SolidStart is no longer used.
- [Effect 4](https://effect.website) for the worker. The API contract (`src/api`) is shared by both sides.
- [Vite](https://vite.dev) with the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/) for building and local development.
- [Cloudflare CLI (`cf`)](https://developers.cloudflare.com/cf/) with [`cloudflare.config.ts`](https://developers.cloudflare.com/cf/projects/cloudflare-config/) for dev, build and deploy.
- [TailwindCSS](https://tailwindcss.com) for styling.
- [Cloudflare Workers](https://workers.cloudflare.com) for hosting, with D1, Queues and Cron Triggers.

# How it is put together

Start mode generates the client entry and the server entry from `src/App.tsx`
and `src/Document.tsx`. There is no `index.html` and no mount…
