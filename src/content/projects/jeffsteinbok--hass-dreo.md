---
repo: "JeffSteinbok/hass-dreo"
name: "hass-dreo"
description: "Dreo Smart Device Integration for Home Assistant"
url: "https://github.com/JeffSteinbok/hass-dreo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "python", "dreo"]
stars: 344
forks: 82
openIssues: 2
closedIssues: 411
watchers: 4
contributors: 44
recentReleases: 0
createdAt: "2023-06-22T04:48:38Z"
lastCommitAt: "2026-06-26T23:41:32Z"
lastReleaseAt: "2023-07-19T19:00:06Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 99
undervaluedScore: 39
maintainers: ["Copilot", "JeffSteinbok", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6b7d3152e6531fe360b868b6c0c2cc00a1182961b3de92f8b9a2b8cd96875c6/JeffSteinbok/hass-dreo"
discussionCount: 23
---

# Dreo Smart Device Integration for Home Assistant (Community)

</p>

> [!NOTE]
> As of v1.8.4, the underlying Python library is now available as a standalone package on PyPI: [`pydreo-community`](https://pypi.org/project/pydreo-community/). You can install it with `pip install pydreo-community` to use the Dreo API independently of Home Assistant.

Community HomeAssistant integration for Dreo brand smart devices.Currently supports most models of Fans, Air Conditioners, Humidifiers, Dehumidifiers and Space Heaters as well as ChefMaker. I do not work for Dreo; just something I'm doing for fun.

> [!IMPORTANT]
> I only personally own 2 Dreo devices; a tower fan and an air circulator. You'll notice that this project supports way more devices than that. The only way I can continue to do that is if people provide logs and diagnostics when they report issues. Please do your best to fill out the issue template so I can debug.

## hass-dreo vs. the Official Dreo Integration (hass-dreoverse)

Dreo also maintains an [official Home Assistant integration](https://github.com/dreo-team/hass-dreoverse). Here's the short version of how they differ:

| | **hass-dreo** (this project) |…
