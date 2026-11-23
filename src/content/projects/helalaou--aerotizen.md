---
repo: "helalaou/AeroTizen"
name: "AeroTizen"
description: "A streamlined launcher/user interface for Samsung TVs + debloat tools "
readmeQualityOk: true
url: "https://github.com/helalaou/AeroTizen"
homepage: "https://helalaou.github.io/AeroTizen"
language: "TypeScript"
languages: ["TypeScript", "Python", "JavaScript"]
languagePcts: [31, 25, 23]
topics: ["debloat", "launcher", "samsung", "samsung-tv", "smart-tv", "tizen", "tizen-tv", "tizen-os"]
stars: 119
forks: 44
openIssues: 26
closedIssues: 49
watchers: 1
contributors: 14
recentReleases: 10
createdAt: "2026-10-19T21:42:44Z"
lastCommitAt: "2026-11-23T12:21:20Z"
lastReleaseAt: "2026-11-03T17:16:26Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 92
undervaluedScore: 38
maintainers: ["metacurb", "DmzTheo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56684cc4c5a6bf4e3fca1ce09047d5385102359e813c1f1885936f21d1343b0/helalaou/AeroTizen"
---

# AeroTizen

AeroTizen is a home screen for Samsung TVs. It puts your favourite apps and HDMI
inputs in one place. The `aerotizen` command-line tool installs it from your computer.

[Try the live demo](https://helalaou.github.io/AeroTizen/) in your browser. Use the
arrow keys, Enter and Escape as the remote. The demo uses sample apps, inputs and
programmes; it cannot control a TV.

*Browser preview with sample apps and programmes.*

## Quick Start

The launcher requires a Samsung TV with **Tizen 5.0 or later**. Check the
[TV compatibility table](https://github.com/helalaou/AeroTizen/blob/HEAD/docs/tv-compatibility.md) for your model's Home and startup results.

This guide uses CLI 3.0.0 and launcher 2.7.0. You need a Samsung account and a
computer on the same network as the TV. The CLI includes its dependencies.
Developer Mode is sufficient for setup.

1. **Download the CLI.** Open [GitHub Releases](https://github.com/helalaou/AeroTizen/releases).
   Select the latest stable release whose tag starts with `cli-v`. Extract the archive
   for macOS (Apple silicon or Intel), Windows x64, or Linux x64. Open a terminal in
   the extracted folder.
