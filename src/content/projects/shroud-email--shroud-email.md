---
repo: "Shroud-email/shroud.email"
name: "shroud.email"
description: "Email protection service"
readmeQualityOk: true
url: "https://github.com/Shroud-email/shroud.email"
homepage: "https://shroud.email/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [63]
topics: ["email", "privacy"]
stars: 36
forks: 3
openIssues: 6
closedIssues: 15
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-06-21T20:04:10Z"
lastCommitAt: "2026-09-30T09:56:49Z"
lastReleaseAt: "2023-07-01T11:42:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 52
maintainers: ["taobojlen", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/505987755/20cc500b-06bd-4b7a-b745-c8dd0c6d763f"
fundingLinks: ["GITHUB:https://github.com/Shroud-email"]
discussionCount: 6
---

# [Shroud.email](https://shroud.email/)

Shroud protects your email address with aliases that remove trackers and forward
messages to your inbox. This monorepo contains the application and its supporting
projects.

| Project | Contents | Local verification |
| --- | --- | --- |
| [shroud.email](https://github.com/Shroud-email/shroud.email/blob/HEAD/shroud.email/) | Elixir/Phoenix application | `mise exec -- mix test` |
| [website](https://github.com/Shroud-email/shroud.email/blob/HEAD/website/) | Astro site and Bunny edge script | `mise exec -- pnpm run build` |
| [hosting](https://github.com/Shroud-email/shroud.email/blob/HEAD/hosting/) | Self-hosting Docker Compose stack | `docker compose config --quiet` |
| [email-trackers](https://github.com/Shroud-email/shroud.email/blob/HEAD/email-trackers/) | Tracker list and publishing script | `node --check scripts/deploy-bunny.mjs` |
| [caddy-permissive-file-storage](https://github.com/Shroud-email/shroud.email/blob/HEAD/caddy-permissive-file-storage/) | Caddy storage module | `bash test/e2e.sh` (requires xcaddy) |

Run project commands from their respective directories. Each project keeps its
own runtime configuration and dependencies;…
