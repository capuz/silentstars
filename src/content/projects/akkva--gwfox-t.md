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
stars: 100
forks: 2
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-26T06:02:23Z"
lastCommitAt: "2026-08-22T04:07:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 28
maintainers: ["akkva"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f19de1829d9bd7fd55ab043180c8e70447b74ad06573598974cb068cd2e9fb8/akkva/GWfox-T"
---

<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/425be890-554e-4d88-b6dd-5e357fbf4ebc">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/f3fbf34d-392f-4e89-9bd1-1ed36f4ca275">
</picture><br><br>
</div>

## Installation
1. Create a `chrome` folder in your Firefox profile directory and move the theme files into it.
2. In `about:config` configure the following preferences:
    * Set to true:
        * `toolkit.legacyUserProfileCustomizations.stylesheets`
        * `svg.context-properties.content.enabled`
    * Set to false:
        * `browser.nova.enabled`
        * `browser.newtabpage.activity-stream.nova.enabled`
3. Restart Firefox.

## Customization
Create these Boolean preferences in `about:config` to customize:
* `gwt.oneliner`: Enable Compact layout.
* `gwt.atbc`: Enable compatibility with the Adaptive Tab Bar Colour extension.
* `gwt.ac`: Manually Specify Accent Color (*Edit `--bg0` in `.css` files to customize*).
