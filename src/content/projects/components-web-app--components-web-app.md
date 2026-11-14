---
repo: "components-web-app/components-web-app"
name: "components-web-app"
description: "An open-source, self-hosted CMS for Symfony and Nuxt. Editors change content on the live page, every page is served from cache, and publishing purges only the pages that changed."
readmeQualityOk: true
url: "https://github.com/components-web-app/components-web-app"
homepage: "https://cwa.rocks"
language: "PHP"
languages: ["PHP", "Shell"]
languagePcts: [42, 36]
topics: ["nuxt", "php", "symfony", "api", "api-platform", "vue3", "vuejs", "cms", "frankenphp", "headless-cms"]
stars: 18
forks: 3
openIssues: 6
closedIssues: 172
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2020-05-15T14:07:25Z"
lastCommitAt: "2026-11-14T21:58:46Z"
lastReleaseAt: "2026-10-08T07:51:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 98
undervaluedScore: 77
maintainers: ["silverbackdan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c36540f477b260bf3da81b69e573c61b5511bd038d2b41623c1872b8ac0ac3a0/components-web-app/components-web-app"
---

# Components Web App

**An open-source, self-hosted CMS for Symfony and Nuxt. Editors change content on the live page, every page is served from cache, and publishing purges only the pages that changed.**

This repository is the CWA template: the project that `create-cwa` generates. It puts a Symfony + API Platform API (with [api-components-bundle](https://github.com/components-web-app/api-components-bundle)) and a Nuxt front end (with [`@cwa/nuxt`](https://github.com/components-web-app/cwa-nuxt-module)) behind FrankenPHP, with the caching, real-time updates and deploy pipelines already wired. A developer builds each site's components; editors then manage the content on the page itself.

## Try it live

**[preview.cwa.rocks](https://preview.cwa.rocks)** is a public demo of this template. Sign in at [/login](https://preview.cwa.rocks/login) as `admin` / `admin` and press **Edit**. It's a throwaway site: anyone can change it, and it's reset to the sample content every day at 05:30 (London time).

## Status

CWA 2 is a **prerelease** (`2.0.0-alpha`), heading for a beta. It runs production sites, but configuration and behaviour can still change between releases: every change a project…
