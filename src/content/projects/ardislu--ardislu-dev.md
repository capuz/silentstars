---
repo: "ardislu/ardislu.dev"
name: "ardislu.dev"
description: "My technical blog: notes on web development, crypto, self-hosting, and tech in general."
readmeQualityOk: true
url: "https://github.com/ardislu/ardislu.dev"
homepage: "https://ardislu.dev"
language: "JavaScript"
languages: ["JavaScript", "HTML", "CSS"]
languagePcts: [57, 23, 20]
topics: ["portfolio", "webapp", "jamstack", "api", "blog"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-02-27T07:28:32Z"
lastCommitAt: "2026-08-01T06:13:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 61
maintainers: ["ardislu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d629aaa3637a618885932be7279b558393001da65b121550fb71669d145da3c4/ardislu/ardislu.dev"
---

# ardislu.dev

This repo contains both the frontend and the backend for [my personal blog](https://ardislu.dev): a blog about web development, crypto, self-hosting, and tech in general.

Also check out my [main website](https://ardis.lu)!

## Google Sheets and Google Docs as a Content Management System (CMS)

I'm using Google Sheets and Google Docs as the CMS for this website. A Google Sheet stores the content for the cards on the homepage. Then, each blog post is contained in its own separate Google Doc. Both the Google Sheet and the Google Docs are queried through a Cloudflare Worker proxy (`/functions/api`). The proxy inserts service account credentials so the Google Sheets/Docs APIs can be called (Google APIs require OAuth 2.0 authorization, even for publicly available documents).

## Google Doc -> markdown -> HTML

Once I fetch an article from the Google Docs API, the article is converted into markdown then converted into HTML using [marked](https://marked.js.org).

## Local development

Use the `wrangler` CLI to serve the static frontend and the [Cloudflare Workers](https://workers.cloudflare.com/) backend API at the same time.

1. Copy `.dev.vars.example` and rename it to…
