---
repo: "kyrielie/honeycrisp"
name: "honeycrisp"
description: "native macos epub reader"
readmeQualityOk: true
url: "https://github.com/kyrielie/honeycrisp"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["epub", "epub-reader", "macos", "macos-swift", "paged-media", "reader", "reading", "scrollview", "swift", "swift-native"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-26T18:53:09Z"
lastCommitAt: "2026-10-18T08:16:16Z"
lastReleaseAt: "2026-10-18T07:53:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 44
maintainers: ["kyrielie"]
openGraphImageUrl: "https://opengraph.githubassets.com/7452939d24e6f105a31b17f79727581e2cb951fe7d941c6d697cabbcde7deca8/kyrielie/honeycrisp"
---

# Honeycrisp Reader

A native macOS EPUB standalone reader, inspired by this [EPUBQuickLook plugin](https://github.com/arytek/epub-quicklook-extension).

Built using claude and gemini and codex because I hate swift. 

Check out https://github.com/kyrielie/ambrosia, a macos library and reader for massive fanfiction libraries. 
Also https://github.com/kyrielie/nectar its ios app companion reader.

## Screenshots

### Reader

### Settings

## Installation

### Homebrew

This personal tap installs Honeycrisp's published macOS release:

```bash
brew tap kyrielie/yggdrasil
brew install --cask honeycrisp
```

To update it after a tap update has been merged:

```bash
brew upgrade --cask honeycrisp
```

The current builds are ad-hoc signed and not notarized. macOS may ask you to
approve opening Honeycrisp the first time. See the [Yggdrasil tap](https://github.com/kyrielie/homebrew-yggdrasil)
for the cask and release details.

### Manual download

Download release to try, try to open then click open anyways in Settings / Privacy & Security

Or bypass macos gatekeeper.

```bash
xattr -d com.apple.quarantine /path/to/app
```

## Features

- **Persistent windows** — stays open, unlike Quick…
