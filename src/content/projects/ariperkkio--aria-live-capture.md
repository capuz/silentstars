---
repo: "AriPerkkio/aria-live-capture"
name: "aria-live-capture"
description: "Capture announcements of ARIA live regions"
readmeQualityOk: true
url: "https://github.com/AriPerkkio/aria-live-capture"
homepage: "https://ariperkkio.github.io/aria-live-capture/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["accessibility", "a11y", "aria-live", "testing", "developer-experience"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-06-19T09:39:08Z"
lastCommitAt: "2026-09-07T08:35:01Z"
lastReleaseAt: "2024-05-12T12:57:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 56
maintainers: ["renovate[bot]", "AriPerkkio"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c93c24998c8ccaf432ae61fe8d4fe39f85a2bb03383344978ed2004c2cf66d7/AriPerkkio/aria-live-capture"
---

# aria-live-capture

</a>

[Installation](#installation) | [Usage](#usage) | [Announcement detection examples](#announcement-detection-examples) | [Support](#support)

> Capture announcements of [ARIA live regions](https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region).

`aria-live-capture` is an utility tool for inspecting announcements of ARIA live regions.
When developing an application which utilizes ARIA live announcements it is often frustrating to toggle screen readers and other assistive technologies constantly on/off during development.
This tool aims to help developers easily see announcements without having to use actual screen readers.
However final assertion should always be made with the actual target assistive technology.

For online demo see [Storybook playground](https://ariperkkio.github.io/aria-live-capture).

For validating ARIA live regions in tests see [`extend-to-be-announced`](https://github.com/AriPerkkio/extend-to-be-announced).

For Storybook integration see [`storybook-addon-aria-live`](https://github.com/AriPerkkio/storybook-addon-aria-live).

## Installation

`aria-live-capture` should be included in development dependencies.

```bash
npm install…
