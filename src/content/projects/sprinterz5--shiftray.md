---
repo: "sprinterz5/shiftray"
name: "shiftray"
description: "Shiftray: asusctl and Cardwire in one small app. Power modes, GPU switching, fans, lighting and battery for ASUS laptops on Linux, with G-Helper's design. Formerly asus-tso-helper."
readmeQualityOk: true
url: "https://github.com/sprinterz5/shiftray"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-10-16T13:16:25Z"
lastCommitAt: "2026-10-20T08:50:02Z"
lastReleaseAt: "2026-10-19T22:53:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["sprinterz5"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1422186504/d55f3c84-03e1-4bd2-ba51-67be032f0a30"
---

Shiftray

  battery and the Fn keys for ASUS laptops on Linux. Its windows follow <a href="https://github.com/seerge/g-helper">G-Helper</a>'s design.

  &nbsp;·&nbsp; <a href="#install">Fedora and Arch packages</a>
  &nbsp;·&nbsp; <a href="#troubleshooting">Troubleshooting</a>
  &nbsp;·&nbsp; <a href="ROADMAP.md">Roadmap</a>

> [!NOTE]
> **Formerly asus-tso-helper.** Same app, new name since 0.7.0; installs update and keep their settings.
>
> **Early release.** Built and tested every day on an ASUS TUF Gaming A15 (FA507NV), Fedora 44,
> KDE Plasma 6 on Wayland. Other ASUS laptops supported by asusctl should work, but nobody has
> confirmed them yet. If you try one, a [report](#reporting-a-problem) helps a lot.

## Why

- **On the official stack.** asusd (asusctl) and Cardwire do all the hardware work; the app is a
  window for them. It writes no hardware files itself, and its settings stay in asusd, so they
  keep working with the app closed and never fight other asusd tools.
- **Nothing hidden, everything undoable.** Before any password prompt the app lists what it will
  change and why. Extra → System changes shows every change it made with an Undo button…
