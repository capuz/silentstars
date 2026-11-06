---
repo: "helalaou/AeroTizen"
name: "AeroTizen"
description: "A better user interface for Samsung TVs."
readmeQualityOk: true
url: "https://github.com/helalaou/AeroTizen"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [37, 31]
topics: ["debloat", "launcher", "samsung", "samsung-tv", "smart-tv", "tizen", "tizen-tv", "tizen-os"]
stars: 87
forks: 24
openIssues: 21
closedIssues: 31
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-10-19T21:42:44Z"
lastCommitAt: "2026-11-06T02:44:47Z"
lastReleaseAt: "2026-11-03T17:16:26Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 36
maintainers: ["metacurb", "helalaou", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cd834fd4aa8f89e34d98749f79a65825024fdc2e1821461b9b47c4e01a8bbea/helalaou/AeroTizen"
---

# AeroTizen

A simple home screen for Samsung TVs, and a command-line tool to clean the TV up from your computer.

Built with help from these contributors. [Join them](https://github.com/helalaou/AeroTizen/blob/HEAD/CONTRIBUTING.md): testing on your TV counts too.

Screenshots show the Glass appearance with five square app cards per row in the browser preview.
The apps and programmes are sample data.

## Motivation

The default home screen on recent Samsung TVs is mostly ads. The "Top Picks for You" row can't be
removed, Samsung TV Plus starts playing on its own at boot, and the TV tracks what you watch unless
you find the privacy settings to turn it off.

On Android TV you would install a different launcher and remove the junk over ADB. Tizen makes
this harder: developer access is limited, and the official developer tools are a large SDK that
doesn't run natively on Apple Silicon.

AeroTizen works around that. The launcher is a normal TV app that acts as the home screen: it opens
when the TV turns on and comes back when you press Home. The CLI handles the setup (certificates,
signing, installing) and shows which preinstalled apps can be removed. Tizen Studio and root
access…
