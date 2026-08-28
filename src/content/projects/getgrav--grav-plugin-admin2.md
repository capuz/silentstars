---
repo: "getgrav/grav-plugin-admin2"
name: "grav-plugin-admin2"
description: "Admin2 - Modern administration panel for Grav CMS"
readmeQualityOk: true
url: "https://github.com/getgrav/grav-plugin-admin2"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [66, 21]
stars: 17
forks: 3
openIssues: 2
closedIssues: 161
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-14T14:06:14Z"
lastCommitAt: "2026-08-28T15:32:05Z"
lastReleaseAt: "2026-04-21T18:23:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["rhukster", "grav-translations-prod[bot]", "mirkotomasek"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c2c9e7a6261984573cb5af2eaf08e4583ddd7342836d9b694c122ce2a19ef16/getgrav/grav-plugin-admin2"
---

# Grav Admin2 Plugin

**Admin2** is a modern, redesigned administration panel for [Grav CMS](https://github.com/getgrav/grav). It is a ground-up rewrite of the classic admin plugin, built as a [SvelteKit](https://svelte.dev/docs/kit/introduction) single-page application that communicates with Grav exclusively through the [Grav API plugin](https://github.com/getgrav/grav-plugin-api).

> **Status: Alpha.** Admin2 is under active development. It is not yet a drop-in replacement for the standard admin plugin and is intended for evaluation and contributor use.

## Architecture

Admin2 is intentionally decoupled from Grav's PHP render pipeline:

- **This plugin (`grav-plugin-admin2`)** — a thin PHP wrapper that detects the configured route, serves static SPA assets (with appropriate cache headers), and returns the SPA shell for all other sub-routes. It injects a small `window.__GRAV_CONFIG__` object so the SPA knows the server URL, API prefix, and base path.
- **Grav API plugin (`grav-plugin-api`)** — provides the JSON HTTP API that the SPA consumes for every data operation (pages, config, users, media, plugins, themes, tools, etc.).
- **SvelteKit source (`grav-admin-next`)** — the SPA…
