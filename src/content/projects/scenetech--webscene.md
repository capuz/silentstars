---
repo: "SceneTech/WebScene"
name: "WebScene"
description: "Web components. Native performance.  Run packaged React, TypeScript, and JavaScript components in native application frameworks through a high-performance scene pipeline—no WebView or embedded browser required."
readmeQualityOk: true
url: "https://github.com/SceneTech/WebScene"
homepage: "https://scenetech.github.io/WebScene/"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [54, 20]
topics: ["avalonia", "avaloniaui", "html", "xaml", "css", "javascript", "canvas", "cpp", "csharp", "dom"]
stars: 53
forks: 4
openIssues: 69
closedIssues: 169
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-07-24T18:56:16Z"
lastCommitAt: "2026-09-19T01:39:12Z"
lastReleaseAt: "2025-09-16T21:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 53
maintainers: ["wieslawsoltes", "danwalmsley"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfedbbc0d7875cd88a453b00d88d85dd1b31a1f2a4cd293e25b39921d2976b43/SceneTech/WebScene"
---

</p>

# WebScene

WebScene is a native web-UI runtime for trusted, packaged content in .NET applications.
It runs JavaScript in V8, implements a deliberately bounded DOM/CSS/layout/Canvas/SVG
platform, and publishes immutable scene updates to native host presenters.

It is not a browser, WebView, Chromium shell, or implementation of the full web platform.
YouTube embeds use a [thumbnail and external-browser fallback](https://github.com/SceneTech/WebScene/blob/HEAD/docs/embedded-media-fallback.md), not inline playback.
The intended use is controlled UI that an application owns, tests, and ships: charts,
dashboards, editors, diagramming surfaces, kiosks, and JavaScript UI plug-ins.

## Why WebScene

- Hot DOM, CSS, layout, Canvas, SVG, and JavaScript work stays inside one native runtime.
- The application UI thread consumes immutable scene state instead of servicing
  fine-grained JavaScript-to-.NET calls.
- Web-authored surfaces compose inside native application windows and lifecycle.
- Host capabilities are explicit and can be exposed through typed TypeScript-to-.NET
  interop rather than a browser-wide bridge.
- Dedicated native V8 isolates expose raw Inspector/CDP sessions and…
