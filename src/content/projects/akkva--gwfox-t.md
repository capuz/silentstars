---
repo: "akkva/GWfox-T"
name: "GWfox-T"
description: "A macOS 27-style Firefox Theme"
readmeQualityOk: true
url: "https://github.com/akkva/GWfox-T"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
topics: ["firefox-css", "firefox-theme"]
stars: 113
forks: 4
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-12-26T06:02:23Z"
lastCommitAt: "2026-11-27T16:25:09Z"
lastReleaseAt: "2026-11-25T11:42:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 43
maintainers: ["akkva", "xiehuc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7de252e4c1b6896cd5f680ae158188910f3c53908117bfbadc4984d0e4966fb/akkva/GWfox-T"
---

## Installation

1. Move the theme files into your profile's `chrome` folder.
2. Set the following preferences in `about:config`:

| Preference | Value |
| :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | `true` |
| `svg.context-properties.content.enabled` | `true` |
| `browser.nova.enabled` | `true` |
| `browser.newtabpage.activity-stream.nova.enabled` | `true` |

3. Restart Firefox.

## Customization

Create these Boolean preferences in `about:config` to modify the UI:

| Preference | Description |
| :--- | :--- |
| `gwt.oneliner` | Enable compact layout |
| `gwt.toolbar` | Auto-hide the bookmarks toolbar |
| `gwt.toolbox` | Auto-hide the navigator toolbox in "Expand sidebar on hover" mode |
| `gwt.atbc` | Enable compatibility with the Adaptive Tab Bar Colour extension |

---

> **Note**
>
> The sidebar is hidden by default when collapsed. In "Expand sidebar on hover" mode, the sidebar can still be expanded by hovering over its left edge. To keep the sidebar visible when collapsed, add `gwt.sidebar` as a Boolean preference in `about:config`.
