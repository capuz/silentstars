---
repo: "zumerlab/zumly"
name: "zumly"
description: "Zoom-based navigation for the web. Turn any site into a spatial zoom interface with just HTML"
readmeQualityOk: true
url: "https://github.com/zumerlab/zumly"
homepage: "https://zumerlab.com/zumly/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["ui", "zoomable", "javascript-library", "zui", "zooming", "user-interface"]
stars: 214
forks: 13
openIssues: 0
closedIssues: 8
watchers: 4
contributors: 8
recentReleases: 6
createdAt: "2020-07-12T00:14:36Z"
lastCommitAt: "2026-10-30T11:02:32Z"
lastReleaseAt: "2026-10-27T22:09:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 47
maintainers: ["tinchox5"]
openGraphImageUrl: "https://opengraph.githubassets.com/aebadc6b2adb0f54daecbc06a3610396fdf3a89e946d515b3cbdca0b638b14bd/zumerlab/zumly"
fundingLinks: ["GITHUB:https://github.com/tinchox5"]
discussionCount: 1
---

Zumly is a JavaScript library for **hierarchical zoom navigation**. Your interface is a set of screens called **views**. Clicking an element in one view zooms into it, and the next view grows out of that element. Zooming out returns along the same path. Moving between sibling views at the same level slides sideways.

Zumly is not an infinite pan-and-zoom canvas. Movement happens in discrete steps, through elements you mark as triggers. You write the HTML and CSS, Zumly computes and animates the transforms. It works with plain HTML, React, Vue, Svelte and Angular, and pairs with [Orbit](https://zumerlab.com/orbit/) for radial layouts.

## Why Zumly

- **Zoom from the element.** The next screen grows out of what you clicked and shrinks back into it, so you always know where you came from.
- **Context stays.** The screens you came from wait behind the current one, dimmed. Click one, scroll, swipe or press ← to go back.
- **Depth and siblings.** A back button at every level (it can show the parent's name or jump several levels), arrows and swipe between siblings, and browser history with the router.
- **Gestures.** Pinch, swipe or the trackpad drive the zoom-out as you move. Let go…
