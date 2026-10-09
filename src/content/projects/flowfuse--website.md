---
repo: "FlowFuse/website"
name: "website"
description: "The FlowFuse Website"
readmeQualityOk: true
url: "https://github.com/FlowFuse/website"
homepage: "https://flowfuse.com"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [56, 20]
stars: 23
forks: 19
openIssues: 145
closedIssues: 1052
watchers: 1
contributors: 49
recentReleases: 0
createdAt: "2021-04-01T20:43:31Z"
lastCommitAt: "2026-10-09T18:56:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["sumitshinde-84", "JoycePlaysFootball", "n-lark"]
openGraphImageUrl: "https://opengraph.githubassets.com/db7d754f07b1b2149d4ef5f5f34add36e8c94f83e9ede383201430e84b8ae98e/FlowFuse/website"
---

# FlowFuse Website

This repository contains the source of the FlowFuse website.

It is hosted on Netlify, which watches the `main` branch directly and deploys on every commit to it.
Netlify's own build resolves everything it needs at build time — product documentation from `main` of
[FlowFuse/flowfuse](https://github.com/FlowFuse/flowfuse), and blueprints from
[FlowFuse/blueprint-library](https://github.com/FlowFuse/blueprint-library) (see `npm run blueprints` /
`nuxt/lib/blueprints-sync.mjs`) — so nothing needs to be pre-fetched and committed to a separate branch first.

A commit to `flowfuse/flowfuse` or `blueprint-library` doesn't push anything to this repo, so it wouldn't otherwise
trigger a Netlify rebuild on its own. The [Build Site](https://github.com/FlowFuse/website/blob/HEAD/.github/workflows/build.yml) action covers that gap: it's
dispatched by `flowfuse/flowfuse`'s `Publish Documentation` workflow after a docs PR merges, and also runs on a
schedule to pick up blueprint-library changes — either way it just calls a Netlify build hook to rebuild `main`.

## Repository structure

This repository is an **npm workspace**. The whole site is one [Nuxt 4](https://nuxt.com/)…
