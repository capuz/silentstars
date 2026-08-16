---
repo: "isaaclins/spotiglass"
name: "spotiglass"
description: "Native macOS Spotify client built with SwiftUI, OAuth PKCE, Spotify Web API, and Web Playback SDK."
readmeQualityOk: true
url: "https://github.com/isaaclins/spotiglass"
homepage: "http://isaaclins.com/spotiglass/"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["mac-native", "macos", "macos-app", "macos26", "macos27", "native", "spotify", "spotify-client"]
stars: 6
forks: 1
openIssues: 47
closedIssues: 82
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-04-28T07:22:39Z"
lastCommitAt: "2026-08-16T04:09:23Z"
lastReleaseAt: "2026-08-12T13:04:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 63
maintainers: ["isaaclins"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ab3069bd5b80e37cae0556417d0cc1f25f2794510c349ab62e9609e003cef9/isaaclins/spotiglass"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/isaaclins", "CUSTOM:https://isaaclins.com"]
---

</p>

<h1 align="center">Spotiglass</h1>

  Native macOS Spotify client with OAuth PKCE, the Spotify Web API, and Web Playback SDK playback in a glass-style SwiftUI shell.
</p>

  ·
  ·
  ·
</p>

## What you get

- Signed-in playlist and track browsing with sidebar pins, queue, artist pages, and command palette search.
- In-app playback through the Spotify Web Playback SDK in a hidden `WKWebView`.
- Appearance controls for System, Light, or Dark, plus command palette backdrop blur.
- Keychain-backed refresh tokens, local playlist cache, and keyboard shortcuts you can remap in Settings.

## Requirements

- macOS **26** or newer with Xcode that matches the project deployment target.
- A [Spotify Developer](https://developer.spotify.com/dashboard) app client ID (PKCE public client; no client secret).
- **Spotify Premium** for Web Playback SDK streaming.

See [Limitations](https://github.com/isaaclins/spotiglass/blob/HEAD/docs/limitations.md) for unsigned local builds, Gatekeeper, and operational constraints.

## Quick start

1. Create a Spotify app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Enable Web Playback SDK and set redirect URI to…
