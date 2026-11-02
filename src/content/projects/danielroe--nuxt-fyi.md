---
repo: "danielroe/nuxt.fyi"
name: "nuxt.fyi"
description: "Celebrating sites built with Nuxt in the wild."
readmeQualityOk: true
url: "https://github.com/danielroe/nuxt.fyi"
homepage: "https://nuxt.fyi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["bluesky", "jetstream", "nuxt"]
stars: 55
forks: 4
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-27T19:27:27Z"
lastCommitAt: "2026-11-02T13:38:24Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 86
undervaluedScore: 32
maintainers: ["danielroe", "renovate[bot]", "trueberryless"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/nuxt.fyi"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# nuxt.fyi

> Spots Nuxt sites being shared on Bluesky and posts screenshots of them.

[👉 &nbsp;Check it out](https://nuxt.fyi/)

The aim of [nuxt.fyi](https://nuxt.fyi/) is to celebrate sites built with [Nuxt](https://nuxt.com/) in the wild.

It watches the Bluesky [Jetstream](https://github.com/bluesky-social/jetstream) firehose, pulls every link out of every post, and for each new domain asks: *is this built with Nuxt?* When the answer is yes, it posts a screenshot on [Bluesky](https://bsky.app/profile/nuxt.fyi).

The [public dashboard](https://nuxt.fyi/) shows everything that's been detected, broken down by version and recency.

## Features

- Detection signals across HTML and a Playwright runtime probe (`<div id="__nuxt">`, `__NUXT_DATA__`, `window.__NUXT__`, `meta[name=generator]`, `/_nuxt/` assets)
- Screenshots taken in a persistent Chromium context, with layered cookie-banner suppression (GTM consent cookie, CSS overlay, and a pinned [`I-Still-Dont-Care-About-Cookies`](https://github.com/OhMyGuus/I-Still-Dont-Care-About-Cookies) extension)
- Discord + Bluesky notifications with rate-limit-aware posting
- @-mention triggered replies: tag the bot on Bluesky with a URL and…
