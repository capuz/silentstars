---
repo: "arleypadua/PKHeX.Everywhere"
name: "PKHeX.Everywhere"
description: "Cross platform tools for interacting with Pokemon save files. The web version runs everywhere and the CLI works with Mac OS, Linux and Windows"
readmeQualityOk: true
url: "https://github.com/arleypadua/PKHeX.Everywhere"
homepage: "https://pkhex-web.github.io"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [63, 31]
topics: ["linux", "pkhex", "windows", "android", "ios"]
stars: 291
forks: 35
openIssues: 3
closedIssues: 211
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2024-05-01T15:18:10Z"
lastCommitAt: "2026-10-03T22:03:21Z"
lastReleaseAt: "2024-06-12T15:28:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 41
maintainers: ["arleypadua", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14c23148e86d3e1f511df5a104a2f665ed1b8da25c0094cc7f07ad557079c734/arleypadua/PKHeX.Everywhere"
discussionCount: 1
---

# PKHeX Everywhere

This repository offers 2 different ways of accessing PKHex features in any operating system: a web-based version and a terminal-based version compiled to all major operating systems (macOS, Linux and Windows).

## PKHeX.Web
The PKHeX Web version ([pkhex-web.github.io](https://pkhex-web.github.io)) provides a user-friendly interface accessible via any web browser.

This version allows you to manage your party, pokemon box, items, and custom actions through plug-ins, like auto-legality mode, helpers for nuzlocking or live running your save file in a browser-based emulator fully integrated with the app. To learn more check the [wiki](https://github.com/arleypadua/PKHeX.Everywhere/wiki).

The app is a React app ([src/PKHeX.Web.React](https://github.com/arleypadua/PKHeX.Everywhere/blob/HEAD/src/PKHeX.Web.React)) over a .NET WebAssembly engine ([src/PKHeX.Everywhere.Engine.Host](https://github.com/arleypadua/PKHeX.Everywhere/blob/HEAD/src/PKHeX.Everywhere.Engine.Host)). Run `npm run dev` in `src/PKHeX.Web.React` to start it locally, and `npm run build` to write the site to `dist`.

## npm packages
The engine that powers PKHeX.Web is published to npm, so you can build…
