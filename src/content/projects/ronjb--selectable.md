---
repo: "ronjb/selectable"
name: "selectable"
description: "A Flutter widget that enables text selection over all the text widgets it contains"
readmeQualityOk: true
url: "https://github.com/ronjb/selectable"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["flutter", "widget", "selection"]
stars: 18
forks: 21
openIssues: 3
closedIssues: 21
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-09-16T17:26:26Z"
lastCommitAt: "2026-08-28T13:54:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 57
maintainers: ["ronjb", "madoka3530"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ee8527cf794ed9dac48db1e20c29057b48018e8d0be640c181e9c6048b5a52/ronjb/selectable"
---

# selectable

A Flutter widget that enables text selection over all the text widgets it
contains — with platform-adaptive selection handles and popup menu, a
controller for listening to and programmatically changing the selection, and
customizable menu items, selection color, and selection rendering.

Try it out at: [https://ronjb.github.io/selectable](https://ronjb.github.io/selectable)

> **Note:** This library predates Flutter's
> [`SelectableRegion`](https://api.flutter.dev/flutter/widgets/SelectableRegion-class.html)
> and related classes. It continues to be maintained because it is used in
> production apps, but if Flutter's native selection support meets your
> needs, consider using it instead.

## Features

* Selection across **all** the text widgets contained in a `Selectable` —
  multiple `Text` and `RichText` widgets, spanning paragraphs.
* Long-press (and optionally double-tap) a word to select it, then drag the
  selection handles to adjust the selection, with autoscroll when dragging
  near the top or bottom of a scrollable viewport.
* Platform-adaptive selection controls and popup menu: Cupertino style on
  iOS and macOS, Material style elsewhere.
* A default popup…
