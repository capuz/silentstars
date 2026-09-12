---
repo: "mataku/SunsetScrob"
name: "SunsetScrob"
description: "Last.fm Android client app"
readmeQualityOk: true
url: "https://github.com/mataku/SunsetScrob"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "kotlin", "lastfm", "jetpack-compose"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2017-08-10T13:50:44Z"
lastCommitAt: "2026-09-12T08:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 65
maintainers: ["mataku", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ace4c8d0d95c22fb1d55a7e8f909873af9a426b607237349dbc7858a59e30463/mataku/SunsetScrob"
---

## SunsetScrob

Last.fm client on Android (mainly for my portfolio)

- - -

See more: [screenshots](https://github.com/mataku/SunsetScrob/blob/HEAD/screenshot/README.md)

## Features

- Show latest scrobbles
- Show top albums
- Show track content details
- Show album content details
- Filter top albums by time range
- Show top artists
- Filter top artists by time range
- Discover charts (top artists / tracks / tags)
- Sign in with Last.fm web auth (the app never sees the password)
- Two-pane list-detail layout on tablets
- Update NowPlaying and Scrobbling (for Apple Music, Spotify, and YouTube Music only)
- Switch themes
- Autofill
- Themed icon

## How to try

Prepare local.properties and run `./gradlew installDebug`

```
API_KEY=YOUR LAST.FM API KEY
SHARED_SECRET=YOUR LAST.FM SHARED SECRET
```

- - -

or try via Google Play

## Libraries and tools

- Compose Multiplatform (android + jvm targets)
- Kotlin Coroutines
- Ktor client
- Coil
- Gradle version catalog
- Gradle convention plugin
- fastlane
- Kotest

## Quality

Conventions are encoded as executable specs and enforced at the CI boundary, so any change is verified the same way before it lands.

| Category     | Tool /…
