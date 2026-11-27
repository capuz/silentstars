---
repo: "wibus-wee/see"
name: "see"
description: "See the code. Follow the idea."
readmeQualityOk: true
url: "https://github.com/wibus-wee/see"
homepage: "https://see.wibus.ren/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 123
forks: 7
openIssues: 3
closedIssues: 18
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-28T08:31:26Z"
lastCommitAt: "2026-11-27T12:53:01Z"
lastReleaseAt: "2026-10-29T14:36:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["wibus-wee", "devin-ai-integration[bot]", "QuentinHsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c596dc6bdc565cfa07d53fe797ef72288863a5577d7813d113bffa7fe63e59/wibus-wee/see"
---

# See

**See the code. Follow the idea.**

See is a desktop app for reading source code. Open a folder and you get its tree, tabs, search, symbols, diffs, and a terminal in one window — written in Go and built with [MyGo](https://github.com/egoist/mygo), drawn natively, with no web view in the stack.

## Install

Download the latest build from [Releases](https://github.com/wibus-wee/see/releases/latest).

| Platform | Package |
| --- | --- |
| macOS | `.dmg` for Apple silicon and Intel |
| Windows | `-setup-.exe` for x64 and arm64 |
| Linux | `.deb` or `.tar.gz` for amd64 and arm64 |

The macOS builds are ad hoc signed and not notarized, so Gatekeeper may block them on other Macs. The Windows installers are unsigned and may trigger SmartScreen.

Release builds check for updates in the background and offer to install them; use **See → Check for Updates…** to check manually. Development builds, and installations the current user cannot write to — including Debian package installations — cannot update themselves.

### Build from source

You'll need Go 1.27.3 or later and a graphical desktop environment. From the project directory, start the development app with live reload:
