---
repo: "nethesis/ns8-nethvoice"
name: "ns8-nethvoice"
description: "NethVoice: an Asterisk based PBX"
readmeQualityOk: true
url: "https://github.com/nethesis/ns8-nethvoice"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [42, 26]
stars: 9
forks: 10
openIssues: 0
closedIssues: 105
watchers: 8
contributors: 25
recentReleases: 0
createdAt: "2022-02-14T15:17:45Z"
lastCommitAt: "2026-10-21T23:36:29Z"
lastReleaseAt: "2024-02-21T17:06:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 80
maintainers: ["Stell0", "renovate[bot]", "edospadoni"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d68cdceb30e129a68c9c285fa2f47077cd55f325c14cd3a59c7d3da55ebd0d4/nethesis/ns8-nethvoice"
---

# NethVoice

NethVoice porting to NethServer 8

## Install

Instantiate the module with:

    add-module ghcr.io/nethesis/nethvoice:latest 1

The output of the command will return the instance name.
Output example:

    {"module_id": "nethvoice1", "image_name": "nethvoice", "image_url": "ghcr.io/nethserver/nethvoice:latest"}

## Proxy 

This module is intended to be used with the ns8-nethvoice-proxy module as SIP proxy

## Configure

Module can be configured from cluster-admin NethServer 8 interface.

### Reports rebranding

Reports UI rebranding is managed from the cluster-admin `Rebranding` page. The selected values are propagated through the `get-rebranding` and `set-rebranding` tasks into the `REPORTS_UI_*` environment variables, then exposed to the `reports-ui` container and finally rendered into runtime configuration by `reports/ui/config-gen.sh`.

The current report branding fields are:

- `REPORTS_UI_BRAND_NAME`
- `REPORTS_UI_LOGIN_LOGO_URL`
- `REPORTS_UI_FAVICON_URL`
- `REPORTS_UI_LOGIN_BACKGROUND_URL`
- `REPORTS_UI_LOGIN_BACKGROUND_COLOR`

To make also provisioniong RPS work with Falconieri, you need to manualy set `SUBSCRIPTION_SECRET` and `SUBSCRIPTION_SYSTEMID` into…
