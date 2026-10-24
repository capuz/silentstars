---
repo: "Josh-Archer/terraform-provider-seerr"
name: "terraform-provider-seerr"
description: "terraform module to manage your seerr instance"
readmeQualityOk: true
url: "https://github.com/Josh-Archer/terraform-provider-seerr"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["arrstack", "seerr"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 123
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-03-05T02:04:04Z"
lastCommitAt: "2026-10-24T00:16:05Z"
lastReleaseAt: "2026-03-06T13:20:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Josh-Archer", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/22ab4ee7592ad35f87f2757c24058a09168c968e937c8a5f5c1be117dcc1ea03/Josh-Archer/terraform-provider-seerr"
discussionCount: 1
---

# OpenTofu & Terraform Provider for Seerr

`seerr` is a feature-complete OpenTofu and Terraform provider for managing [Overseerr](https://overseerr.dev) and [Jellyseerr](https://github.com/Fallenbagel/jellyseerr) instances via their REST APIs as Infrastructure as Code. Track ongoing milestones in the [roadmap](#roadmap) or join the conversation in [GitHub Discussion #161](https://github.com/Josh-Archer/terraform-provider-seerr/discussions/161).

---

## Capabilities & Highlights

- **Complete API Coverage**: 50 managed resources and 69 data sources covering 100% of applicable Seerr OpenAPI configuration endpoints (see [OpenAPI Coverage](https://github.com/Josh-Archer/terraform-provider-seerr/blob/HEAD/docs/openapi-coverage.md)).
- **Typed Notification Integrations**: First-class support for 11 notification agents (Discord, Email, Gotify, LunaSea, Ntfy, Pushbullet, Pushover, Slack, Telegram, Webhook, Webpush) with live test triggers (`seerr_notification_agent_test`).
- **Dynamic Servarr Resolvers**: Real-time lookups for Radarr & Sonarr quality profiles, root folders, tags, and language profiles (`seerr_radarr_quality_profile`, `seerr_sonarr_quality_profile`,…
