---
repo: "edbfi/obzorarr"
name: "obzorarr"
description: "Obzorarr is a \"Wrapped for Plex\" application that syncs viewing history from your Plex Media Server and generates yearly statistics with an animated slideshow presentation - similar to Spotify Wrapped."
readmeQualityOk: true
url: "https://github.com/edbfi/obzorarr"
homepage: "https://web.edb.fi/containers/obzorarr/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 38
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-20T00:37:27Z"
lastCommitAt: "2026-11-09T04:34:14Z"
lastReleaseAt: "2026-02-23T17:54:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["edbfi", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/709a93ac7b3ee76fd97e03e5f4a129c7c541049cd95ea174ee74f4d3f89d2a0d/edbfi/obzorarr"
---

> [!IMPORTANT]
> **Rewrite in progress.** Obzorarr is being rebuilt from scratch, and `main` is now the
> starting point for the new version. The previous version is preserved on the
> [`legacy-old/v1`](https://github.com/edbfi/obzorarr/tree/legacy-old/v1) branch.
> Published releases up to 0.1.11 and their tags are unchanged.

## Tech stack

| Concern | Choice |
| --- | --- |
| Language | TypeScript 6, strict type checking |
| Framework | Svelte 5 and SvelteKit 3, server rendering on one origin |
| Runtime and packages | Bun for development, CI and production |
| Database | Embedded Turso through Drizzle, on a persistent data volume |
| Styling and primitives | Panda CSS 2 and Ark UI for Svelte |
| HTTP API clients | `@hey-api/openapi-ts`, generated from the app's OpenAPI document |
| Plex | `@ctrl/plex`, with focused `fetch` methods for missing endpoints |
| Deployment | `@sveltejs/adapter-bun`: one container, one process, one HTTP port |

## Master key

Obzorarr encrypts the secrets it stores with a master key you keep, and won't start without a
valid one. Which key you set depends on one question: has Obzorarr run here before?

- **First install:** generate a key with `openssl…
