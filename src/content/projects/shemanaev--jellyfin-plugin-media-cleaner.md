---
repo: "shemanaev/jellyfin-plugin-media-cleaner"
name: "jellyfin-plugin-media-cleaner"
description: "Automatically delete media according to configurable rules."
readmeQualityOk: true
url: "https://github.com/shemanaev/jellyfin-plugin-media-cleaner"
language: "C#"
languages: ["C#"]
languagePcts: [74]
topics: ["jellyfin", "jellyfin-plugin"]
stars: 261
forks: 14
openIssues: 18
closedIssues: 77
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2021-07-18T09:21:46Z"
lastCommitAt: "2026-09-26T08:47:28Z"
lastReleaseAt: "2022-12-12T18:55:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 32
maintainers: ["shemanaev", "drakhart"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f5c456d445425fb03d46875f8e25eeeddf90a8012e9b699d69c7ffd3a33790/shemanaev/jellyfin-plugin-media-cleaner"
---

# Media Cleaner for Jellyfin

Automatically delete media according to configurable rules. Works with any media types.

## Installation

Add repository with my plugins from [jellyfin-plugin-repo](https://github.com/shemanaev/jellyfin-plugin-repo).

## Configuration

Media Cleaner is configured via the rules.

### Rules

Rules are split into cleanup rules and protection rules.

* Cleanup rules delete media after it matches their trigger and filters.
* Protection rules never delete media. They exclude matching media from deletion by any cleanup rule.
* Cleanup rules are additive: if several cleanup rules match the same item, the item is planned once.
* Protection rules win regardless of rule order. A protected item suppresses direct deletion, and protected children block season or series deletion cascades.

Each rule has:

* a trigger: played before cutoff, not played since added, or age since added regardless of playback;
* a media scope: one media type or all media;
* optional filters for playback users, favorite state, favorite users, library locations and tags;
* an action: delete or protect.

For episode cleanup rules, the deletion scope controls whether Media Cleaner deletes…
