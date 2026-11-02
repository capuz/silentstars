---
repo: "Open-Industry-Project/Open-Industry-Project"
name: "Open-Industry-Project"
description: "Browser-based industrial automation simulator: conveyors, sensors, PLCs (TypeScript, three.js, Jolt)"
readmeQualityOk: true
url: "https://github.com/Open-Industry-Project/Open-Industry-Project"
homepage: "https://www.openindustryproject.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 28]
stars: 103
forks: 36
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-10-19T12:55:52Z"
lastCommitAt: "2026-11-02T17:56:25Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: ["ryevdokimov", "timpni", "Marcos-VM"]
openGraphImageUrl: "https://opengraph.githubassets.com/657cc61e82d199180e5e8b2e5fcac1a319db3b14decc5c8e3729a239a8a1c8fc/Open-Industry-Project/Open-Industry-Project"
---

Free and open-source warehouse/manufacturing simulator that runs in the browser.

The goal is to provide an open platform for people to test their ideas or educate themselves
using standard industrial equipment and PLC languages. It includes its own PLC, so no hardware
or PLC software is needed to get started.

The editor runs at [openindustryproject.org/app](https://www.openindustryproject.org/app/?scene=demo),
which opens a demo palletizing line.

A desktop app is needed to connect to an external PLC:

- Windows: signed [installer](https://downloads.openindustryproject.org/desktop/Open-Industry-Project-Setup.exe)
- Linux: [.deb](https://downloads.openindustryproject.org/desktop/open-industry-project_amd64.deb) (Ubuntu, Debian)
  or [AppImage](https://downloads.openindustryproject.org/desktop/Open-Industry-Project.AppImage) (needs libfuse2)

## Project Status

The project is in early development, and breaking changes can land in any update. In particular:

- **Projects and scenes.** Saved projects, `.oip` files and live-editing rooms are upgraded when
  they load wherever possible, but that isn't guaranteed. Keep a copy of any project you care about.
- **The [part…
