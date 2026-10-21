---
repo: "Metehan-Bicer/framelane"
name: "framelane"
description: "Design, localize and ship App Store screenshots and metadata from one self-hosted app."
readmeQualityOk: true
url: "https://github.com/Metehan-Bicer/framelane"
homepage: "https://framelane.metehanbicer.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["app-store", "app-store-connect", "aso", "fastlane", "nextjs", "screenshots", "self-hosted"]
stars: 7
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-20T21:35:33Z"
lastCommitAt: "2026-10-21T21:14:34Z"
lastReleaseAt: "2026-10-21T18:14:35Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 70
undervaluedScore: 27
maintainers: ["Metehan-Bicer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1427588366/636f5e4d-7e75-4698-8d6b-aed32f6fcd10"
---

---

Shipping an app update means framing screenshots for every device size, translating captions and store text for
every language, and uploading all of it to App Store Connect. That usually takes a design tool, a spreadsheet and
fastlane. Framelane does the whole flow in one place, runs on your own machine, and talks to App Store Connect with
your own API key.

## Features

**Screenshots**
- Drop in raw simulator captures, pick a template, and get store-ready frames: Headline, Footnote, Tilt and Full bleed.
- Device frames drawn in code (no Apple artwork), palettes, gradients and five caption fonts.
- Captions and screenshots per language. Wrap a word in `*asterisks*` to highlight it.
- Export every language at the exact sizes App Store Connect accepts, as a zip.

**Metadata**
- Name, subtitle, promotional text, description, keywords, release notes and URLs for every language, with the App
  Store character limits shown as you type.
- A keyword helper that removes spaces and duplicates and flags words your name and subtitle already cover.
- A product page preview built from your own frames.
- Import and export fastlane `metadata/` folders and EAS `store.config.json`, so it fits…
