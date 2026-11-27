---
repo: "TheFab21/ha-samsungtv-smart"
name: "ha-samsungtv-smart"
description: "Home Assistant custom integration for Samsung Smart TVs (Tizen) and The Frame — Art Mode, local IP Control, SmartThings/OAuth2. A maintained fork of ollo69/ha-samsungtv-smart."
readmeQualityOk: true
url: "https://github.com/TheFab21/ha-samsungtv-smart"
homepage: "https://github.com/TheFab21/ha-samsungtv-smart"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["hacs", "home-assistant", "homeassistant", "samsung-smart-tv", "art-mode", "custom-component", "custom-integration", "frame-tv", "media-player", "samsung"]
stars: 157
forks: 35
openIssues: 2
closedIssues: 93
watchers: 2
contributors: 37
recentReleases: 0
createdAt: "2026-03-30T16:02:37Z"
lastCommitAt: "2026-11-27T16:26:48Z"
lastReleaseAt: "2026-03-31T11:31:34Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["claude", "TheFab21", "rudizl"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f8f0e5571e67f98fd913975adedb268a9be8386d080535aa42129b736dbcbed/TheFab21/ha-samsungtv-smart"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/thefab21"]
discussionCount: 1
---

# SamsungTV Smart and Art Mode

A custom integration for Home Assistant to control Samsung Smart TVs (Tizen OS), based on the excellent work of [ollo69/ha-samsungtv-smart](https://github.com/ollo69/ha-samsungtv-smart).

Installed through the Home Assistant **Marketplace** as a **custom repository** (it is not in the default catalogue) — see [Installation](#installation) for the setup, or use this button:

(The Marketplace replaced HACS in Home Assistant 2026.11; on older versions it is still HACS.)

> **Warning**
>
> **9.6.0 — breaking change for Frame owners.** Frame Art pictures moved out of
> `/config/www/frame_art/`, which Home Assistant served to anyone without login.
> Cameras, cards, `folder` sensors or automations you set up on the old path or
> on `/local/frame_art/...` must be updated. See
> [RELEASE_NOTES_9.6.0.md](https://github.com/TheFab21/ha-samsungtv-smart/blob/HEAD/RELEASE_NOTES_9.6.0.md) for the checklist.

If this project is useful to you, you can support its development:
