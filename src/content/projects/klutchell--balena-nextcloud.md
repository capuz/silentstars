---
repo: "klutchell/balena-nextcloud"
name: "balena-nextcloud"
description: "Nextcloud is a safe home for all your data"
readmeQualityOk: true
url: "https://github.com/klutchell/balena-nextcloud"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [52, 48]
stars: 48
forks: 16
openIssues: 4
closedIssues: 13
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-07-27T20:24:18Z"
lastCommitAt: "2026-07-11T05:58:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 55
maintainers: ["klutchell-renovate[bot]", "klutchell"]
openGraphImageUrl: "https://opengraph.githubassets.com/13c7af92ad39a33210a6923b13972fdb8c07b6b98a4ec552988dd2a9294843b1/klutchell/balena-nextcloud"
---

# balena-nextcloud

[Nextcloud](https://nextcloud.com/) is a safe home for all your data.
Access & share your files, calendars, contacts, mail & more from any device, on your terms.

## Getting Started

You can one-click-deploy this project to balena using the button below:

## Manual Deployment

Alternatively, deployment can be carried out by manually creating a [balenaCloud account](https://dashboard.balena-cloud.com) and application, flashing a device, downloading the project and pushing it via the [balena CLI](https://github.com/balena-io/balena-cli).

### Application Environment Variables

Application envionment variables apply to all services within the application, and can be applied fleet-wide to apply to multiple devices.

| Name           | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `TZ`           | Inform services of the [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) in your location. |
| `SET_HOSTNAME` | Set a custom hostname on…
