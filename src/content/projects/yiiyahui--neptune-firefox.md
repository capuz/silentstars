---
repo: "yiiyahui/Neptune-Firefox"
name: "Neptune-Firefox"
description: "A clean and compact Firefox theme."
readmeQualityOk: true
url: "https://github.com/yiiyahui/Neptune-Firefox"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
stars: 355
forks: 22
openIssues: 3
closedIssues: 65
watchers: 9
contributors: 1
recentReleases: 0
createdAt: "2024-07-18T13:58:51Z"
lastCommitAt: "2026-08-09T04:47:37Z"
lastReleaseAt: "2024-09-15T16:42:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 23
maintainers: ["yiiyahui"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d84ee45aa865e4af25bf651f5fd742c61b96b62e7afaf531714d5c04d2fa77/yiiyahui/Neptune-Firefox"
discussionCount: 8
---

<h1 align="center"><strong>Neptune Firefox</strong></h1>

**Instructions:** 
- This theme is compatible with the latest release of Firefox and works on both Windows and macOS.
- To enable adaptive colors, you need to install the **[Adaptive Tab Bar Color](https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour)** extension. If not, the tabs will appear transparent.

## Installation

- Download the theme file and unzip the `chrome` folder into your `profile` folder.
- You can modify the wallpaper in the `userContent.css`, and edit the file names for the light and dark modes

```css
body {
	background: url("neptune/image/RainbowLight.png") center/cover no-repeat fixed;

	@media (prefers-color-scheme: dark) {
		background: url("neptune/image/RainbowDark.png") center/cover no-repeat fixed;
	}
}
```

## Configuration

- **about:config**
    - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.
    - Set `svg.context-properties.content.enabled` to `true`.
    - Set `widget.non-native-theme.use-theme-accent` to `true`.

- **Required settings**
    - Move all toolbar buttons to the top, and the tab bar does not display any buttons.
    - If extension (Adaptive…
