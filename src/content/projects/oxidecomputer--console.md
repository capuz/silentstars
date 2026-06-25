---
repo: "oxidecomputer/console"
name: "console"
description: "Oxide Web Console"
url: "https://github.com/oxidecomputer/console"
homepage: "https://console-preview.oxide.computer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 222
forks: 22
openIssues: 231
closedIssues: 944
watchers: 18
contributors: 125
recentReleases: 0
createdAt: "2020-03-23T23:59:58Z"
lastCommitAt: "2026-06-25T02:08:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 41
maintainers: ["david-crespo", "charliepark", "benjaminleonard"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fe53849201fb77760b59028868eca748095a20808841e7ac9c8e0959492e388/oxidecomputer/console"
discussionCount: 0
---

# Oxide Web Console

Web client to the [Oxide API](https://github.com/oxidecomputer/omicron).

## [Live demo](https://console-preview.oxide.computer)

At https://console-preview.oxide.computer, the console is deployed as a static site with a mock API running in a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). You can create mock resources and they will persist across client-side navigations, but they exist only in the browser: nobody else can see them and the mock "DB" is reset on pageload. Request and response bodies in the mock API match the Oxide API's [OpenAPI spec](https://github.com/oxidecomputer/omicron/blob/main/openapi/nexus.json), but behavior is only mocked in as much detail as is required for development and testing of the console and is not fully representative of the real API.

## Goals and principles

- The console is not an application, it is a _client_ to the application (the Oxide API) — minimize client-side state
- Be a transparent view onto the API — teach API concepts and avoid making the user learn anything console-specific
- Simple, predictable, and broadly functional everywhere is better than deeply polished in a few…
