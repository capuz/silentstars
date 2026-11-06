---
repo: "Automattic/jetpack-search"
name: "jetpack-search"
description: "[READ ONLY] Tools to assist with enabling cloud search for Jetpack sites. This repository is a mirror, for issue tracking and development head to: https://github.com/automattic/jetpack"
readmeQualityOk: true
url: "https://github.com/Automattic/jetpack-search"
homepage: "https://github.com/Automattic/Jetpack/"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
topics: ["jetpack", "search"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 247
recentReleases: 0
createdAt: "2021-08-25T10:40:29Z"
lastCommitAt: "2026-11-06T12:17:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 76
maintainers: ["tbradsha", "anomiex", "coder-karen"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d9220c91feea6d4ebd8c97bcd7bcb5139686589bda0360c70576bc4363081cd/Automattic/jetpack-search"
---

# Search

Tools to assist with enabling cloud search for Jetpack sites. The search package provides a search interface for the [Elasticsearch](https://www.elastic.co/elasticsearch/) search engine.

This package currently supports three modes:

- Classic Search – Uses the 1.0 API and will be gradually deprecated. It integrates via standard WordPress hooks, replacing the backend search logic while preserving the theme’s existing search display.
- Inline Search – Uses the 1.3 API. Like Classic Search, it integrates via standard hooks to replace the backend logic without altering the theme’s front-end output.
- Instant Search – Uses the 1.3 API and provides a dynamic, standalone UI with search-as-you-type functionality.

## Using this package in your WordPress plugin

If you plan on using this package in your WordPress plugin, we would recommend that you use [Jetpack Autoloader](https://packagist.org/packages/automattic/jetpack-autoloader) as your autoloader. This will allow for maximum interoperability with other plugins that use this package as well.

## Security

Need to report a security vulnerability? Go to [https://automattic.com/security/](https://automattic.com/security/) or…
