---
repo: "jpmorganchase/mosaic"
name: "mosaic"
description: "https://mosaic-mosaic-dev-team.vercel.app"
readmeQualityOk: true
url: "https://github.com/jpmorganchase/mosaic"
homepage: "https://mosaic-mosaic-dev-team.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [64, 33]
topics: ["jpmorgan"]
stars: 26
forks: 20
openIssues: 24
closedIssues: 35
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2022-09-07T09:17:59Z"
lastCommitAt: "2026-09-17T08:52:08Z"
lastReleaseAt: "2022-10-12T17:24:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 58
maintainers: ["dependabot[bot]", "joshwooding"]
openGraphImageUrl: "https://opengraph.githubassets.com/737ad043e9524ee4c56950b76e7b95229312de2bfb7389e623e1123d83b64918/jpmorganchase/mosaic"
discussionCount: 1
---

# Mosaic

Mosaic is a **content aggregating, headless CMS solution** which can be ran with server side rendering (SSR) or as a statically generated site (SGS).

- Running with SSR enables you to publish updates in realtime, just by updating the originating source.
- Running as a SGS enables you to create an immutable snapshot of your content which will not update in realtime.

## How To Create Your Own Mosaic Site

You can copy the `site` directory from this repository into your project. The site directory is a standard Next.js app that loads the packages created by this repo, with an additional `mosaic-config.mjs` file to configure sources and other settings.

## Serving A Dynamic, Server Side Rendered Site

To serve your site, pulling dynamic content in realtime and rendering with SSR

Create the required environment variables

```
> export MOSAIC_DOCS_CLONE_CREDENTIALS="<git user>:<git PAT token>"
> yarn serve
```

## Serving a Statically Generated Site

A snapshot is an immutable copy of the content pulled from your configured data sources.

To create a snapshot of your content for serving as a SGS, you have 2 modes.

- `snapshot-file` mode, creates and stores snapshots as…
