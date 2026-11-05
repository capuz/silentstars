---
repo: "akkva/GWfox-T"
name: "GWfox-T"
description: "A macOS 27 Golden Gate style Firefox theme."
readmeQualityOk: true
url: "https://github.com/akkva/GWfox-T"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
topics: ["firefox-theme"]
stars: 109
forks: 4
openIssues: 0
closedIssues: 10
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-12-26T06:02:23Z"
lastCommitAt: "2026-11-05T08:05:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 40
maintainers: ["akkva", "xiehuc"]
openGraphImageUrl: "https://opengraph.githubassets.com/678300a48d719f7e2a56e3924b5a8cf3c65505f18994cf99ff3617fdeeb90a80/akkva/GWfox-T"
---

## Installation

1. Move the theme files into your profile's `chrome` folder.
2. Configure `about:config` with these preferences:

| Preference Name | Value |
| :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | `true` |
| `svg.context-properties.content.enabled` | `true` |
| `browser.nova.enabled` |`true` |
| `browser.newtabpage.activity-stream.nova.enabled` |`true` |

3. Restart Firefox.

## Customization

Create these **Boolean** preferences in `about:config` to customize:

| Preference Name | Description |
| :--- | :--- |
| `gwt.oneliner` | Enable Compact layout. |
| `gwt.toolbar` | Auto-hide bookmarks toolbar. |
| `gwt.toolbox` | Auto-hide navigator toolbox in "Expand sidebar on hover" mode. |
| `gwt.atbc` | Enable compatibility with the Adaptive Tab Bar Colour extension. |

---

> [!NOTE]
> The sidebar is hidden by default when collapsed. Add `gwt.sidebar` as a boolean in `about:config` to keep it visible.
