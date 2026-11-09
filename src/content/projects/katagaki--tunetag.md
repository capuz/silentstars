---
repo: "katagaki/Tunetag"
name: "Tunetag"
description: "Batch MP3 (ID3) tag editor for iOS."
readmeQualityOk: true
url: "https://github.com/katagaki/Tunetag"
homepage: "https://apps.apple.com/app/id6464678747"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ios", "mp3-tags", "swift", "swiftui", "id3v2"]
stars: 20
forks: 1
openIssues: 4
closedIssues: 25
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-09-07T14:55:37Z"
lastCommitAt: "2026-11-09T04:35:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 44
maintainers: ["katagaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7600ae5054bdc9a3d657f10b5e52a84ec4a9db74098543b99968fc83b0f18b/katagaki/Tunetag"
---

# Tunetag

A batch audio tag editor built for iOS.

## Repository layout

| Path | Contents |
|---|---|
| `App/` | The Tunetag app. Open `App/Tunetag.xcodeproj`. |
| `Prelude/` | The tag reading and writing engine, built on [TagLib](https://taglib.org) through [CXXTagLib](https://github.com/sbooth/CXXTagLib). |
| `Package.swift` | Swift package manifest for Prelude and PreludeLookup. |

## Prelude

Prelude reads and writes tags in MP3, M4A, FLAC, Ogg Vorbis, Opus, WAV, AIFF and the other formats TagLib supports.

Add it to another project as a Swift package:

```swift
.package(url: "https://github.com/katagaki/Tunetag", branch: "main")
```

Then depend on the `Prelude` product:

```swift
import Prelude

// Read
guard let file = TagLibFile(path: path) else { return }
let snapshot = TagSnapshot(file)
print(snapshot.title, snapshot.track, snapshot.trackTotal)

// Write: nil leaves a field unchanged, and an empty string removes it
var tag = Tag()
tag.title = "New Title"
tag.comment = ""
TagWriter.apply(tag, to: file)
file.save()

// Every field, including custom ones
file.setValues(["Happy"], forProperty: "MOOD")
file.save()
```

## PreludeLookup

PreludeLookup finds the album that…
