---
repo: "robertnisipeanu/mgu-store"
name: "mgu-store"
description: "App store for BMW iDrive 7 / iDrive 8 head units: install and update apps from GitHub repos, URLs and USB sticks"
readmeQualityOk: true
url: "https://github.com/robertnisipeanu/mgu-store"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
stars: 446
forks: 62
openIssues: 18
closedIssues: 13
watchers: 13
contributors: 6
recentReleases: 10
createdAt: "2026-10-27T06:44:26Z"
lastCommitAt: "2026-11-04T13:05:33Z"
lastReleaseAt: "2026-10-27T08:29:22Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 86
undervaluedScore: 25
maintainers: ["robertnisipeanu", "IterioDev", "JustAnotherPU"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ffc2bbb2a46d10f0e1c712278f8ae29752b16b4942d6dc4e637f64347f306b/robertnisipeanu/mgu-store"
---

# mgu-store

An app store for BMW iDrive 7 and iDrive 8 head units (MGU). Browse,
install, update and remove apps on the car's screen, from GitHub
repositories, web addresses or a USB stick.

It installs:

- the **Store** app;
- the **updater**, which downloads and installs what the Store asks for;
- the **deploy tool**, which performs and can roll back every install;
- **app privacy**, which keeps installed apps out of the head unit's reports to BMW;
- the **renderer**, which draws the Store and other apps' graphics;
- **Python**, for apps the head unit builds from source;
- the **internet uplink**, for internet through a USB adapter, an LTE stick, a tethered phone or Wi-Fi.

iDrive 8 is tested in an emulator only, not yet on a real car. On iDrive 8,
installs and removals take effect at the next head-unit restart.

## Screenshots

The Store: apps and head-unit tools from every source.

An app's page, with its source, version and Install.

Installed: the apps and tools on the head unit.

Settings: sources, Wi-Fi, accounts and phone access.

Adding a GitHub repository: pick its releases, tags or a branch.

## Requirements

- A computer (Windows 10/11, macOS or Linux, x64 or arm64)…
