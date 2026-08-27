---
repo: "skylartaylor/cros-updates"
name: "cros-updates"
description: "A modern, fast, and accessible website for tracking Chrome OS version updates, recovery images, and device information."
readmeQualityOk: true
url: "https://github.com/skylartaylor/cros-updates"
homepage: "https://cros.tech"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [63, 34]
topics: ["chromebooks"]
stars: 70
forks: 15
openIssues: 11
closedIssues: 26
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2019-09-14T05:06:38Z"
lastCommitAt: "2026-08-27T14:27:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbe27866708c366bd3dac4497ad695ed8291b17a507ffde47b8547f33bd37e50/skylartaylor/cros-updates"
---

# Chrome OS Updates

A modern, fast, and accessible website for tracking Chrome OS version updates, recovery images, and device information.

**Live Site:** https://cros.tech

## About

Chrome OS Updates provides up-to-date information about Chrome OS versions across all devices and boards, including:
- Current stable, beta, dev, and canary versions for every device
- Recovery image downloads for all channels and versions
- Device specifications including architecture, kernel versions, and capabilities
- Chrome OS Flex update information
- Historical version data

This site was orignally built to provide a more user-friendly and performant alternative to the now-defunct [cros-updates-serving](https://cros-updates-serving.appspot.com) appspot app.

## Data Sources

All Chrome OS version and device data is sourced directly from Google's official APIs and community-maintained repositories:
- **Version Data:** [Chromium Dashboard API](https://chromiumdash.appspot.com/cros/fetch_serving_builds)
- **Recovery Images:** [Google Chrome OS Recovery](https://dl.google.com/dl/edgedl/chromeos/recovery/)
- **Chrome OS Flex:** [Flex Recovery…
