---
repo: "soulteary/flare"
name: "flare"
description: "Lightweight self-hosted bookmark dashboard and start page in Go, with no database dependency and optional offline mode, weather, editor, and login."
readmeQualityOk: true
url: "https://github.com/soulteary/flare"
homepage: "https://soulteary.com/2022/02/23/building-a-personal-bookmark-navigation-app-from-scratch-flare.html"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["self-hosted", "bookmarks", "start-page", "dashboard", "docker", "golang"]
stars: 172
forks: 52
openIssues: 9
closedIssues: 14
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2022-02-18T16:11:56Z"
lastCommitAt: "2026-10-27T12:38:58Z"
lastReleaseAt: "2026-10-25T07:56:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 48
maintainers: ["soulteary", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a79ba9b3f0e410fa76e7630cb7ec36b0157ea6f8b6aafec040bbca30dfd70e/soulteary/flare"
---

# Flare

A lightweight self-hosted bookmark dashboard and start page, written in Go.

The latest stable release is [**0.6.8**](https://github.com/soulteary/flare/releases/tag/0.6.8),
including persistent administrator accounts, revocable sessions, resource privacy
and navigation caching. Read the [upgrade requirements](https://github.com/soulteary/flare/blob/HEAD/docs/release-0.6.8.md) before updating.
See the [documentation index](https://github.com/soulteary/flare/blob/HEAD/docs/README.md) for version scope and usage.

## Features

**Simple**, **Fast**, **Lightweight** and super **Easy** to install and use.

- Written in Go (Golang) and a little Modern vanilla Javascript only.
- HTTP stack: native [Fiber](https://gofiber.io/) v3 with a 64 KiB request reader.
- Doesn't depend on any database or any complicated framework.
- Single executable, no dependencies required, good docker support.
- You can choose whether to enable various functions according to your needs: offline mode, weather, editor, account, and so on.

### Bookmark import and export

The editor includes browser HTML and native Flare YAML import/export, with
preview, duplicate handling, conflict detection, and…
