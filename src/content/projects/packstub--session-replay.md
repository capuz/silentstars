---
repo: "packstub/session-replay"
name: "session-replay"
description: "Session replay for Laravel, built on rrweb: a recorder with privacy defaults, token-signed ingest, recordings on your own disk and database, a player with errors, failed requests and rage clicks on the timeline, behind a gate you define. The engine behind Filament Session Replay; runs without Filament."
readmeQualityOk: true
url: "https://github.com/packstub/session-replay"
homepage: "https://packstub.dev/plugins/session-replay"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [58, 37]
topics: ["debugging", "error-tracking", "laravel", "laravel-package", "observability", "packstub", "privacy", "rrweb", "session-recording", "session-replay"]
stars: 26
forks: 2
openIssues: 9
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-09-18T11:05:47Z"
lastCommitAt: "2026-10-28T09:56:52Z"
lastReleaseAt: "2026-10-22T18:02:17Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 48
maintainers: ["icaliman", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d9fb05f38c52101a87252b13ef0fe3fd551274f5fea32649bbe491ff19e533a/packstub/session-replay"
fundingLinks: ["GITHUB:https://github.com/icaliman"]
---

# Session Replay for Laravel

Record what a person did in the browser, keep the recording on your own disk and database, and watch it inside your own app, behind a gate you define. Built on [rrweb](https://github.com/rrweb-io/rrweb). Free and open source (MIT).

"The form did nothing when I clicked save" becomes a 40-second replay with the console error and the failed Livewire request marked on the timeline.

- Docs: [docs/](https://github.com/packstub/session-replay/tree/main/docs)
- Support: [GitHub issues](https://github.com/packstub/session-replay/issues)
- Demo app: [packstub/session-replay-demo](https://github.com/packstub/session-replay-demo), a small Laravel shop with recordings to watch, ready to run locally

## Features

- **[One Blade directive](#quick-start)**: `@sessionReplay` before `</body>` records the page, with nothing to build or publish.
- **[Private by default](#privacy-defaults)**: every input masked, no IP address stored, an anonymous mode, sensitive pages left out.
- **[Recordings stay with you](https://github.com/packstub/session-replay/blob/HEAD/docs/storage.md)**: gzip chunks on any Laravel disk, the index in five tables on your connection.
- **[Markers…
