---
repo: "te9c/jellyfin-plugin-shikimori"
name: "jellyfin-plugin-shikimori"
description: "Jellyfin metadata provider for anime from shikimori.io"
originalDescription: "Jellyfin metadata provider for anime from shikimori.io"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/te9c/jellyfin-plugin-shikimori"
language: "C#"
languages: ["C#"]
languagePcts: [84]
topics: ["jellyfin", "jellyfin-metadata-provider", "jellyfin-plugin", "shikimori"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-05-18T17:23:27Z"
lastCommitAt: "2026-11-03T19:03:12Z"
lastReleaseAt: "2025-01-10T21:36:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["te9c", "queukat"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d5c46ec2cdd4f4ee402daa1c8abdbc753fcd5b4079147bc3183e535da41eba/te9c/jellyfin-plugin-shikimori"
---

[ENG](https://github.com/te9c/jellyfin-plugin-shikimori/blob/HEAD/README_ENG.md)

# About the plugin

This plugin downloads metadata from the [Shikimori](https://shikimori.io) website.

The plugin supports downloading metadata for anime movies and series. It downloads ratings, descriptions, posters, genres, and studios.

For better search results, you can add a tag in the form `[shikimori-12345]` to the media file name or root folder name, where the number is the id from the Shikimori website.

# Installation

1. Go to Administration -> Dashboard -> Plugins -> Repositories -> New Repository.
2. Enter a name, and in the "Repository URL" field enter:
```
https://raw.githubusercontent.com/te9c/jellyfin-plugin-shikimori/main/manifest.json
```
3. Install the plugin from the catalog.

# Building

1. Install the [.NET10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)
2. Clone this repository
3. Build the plugin with the following command:
```bash
dotnet publish --configuration Release --output bin
```
4. Create a `shikimori` directory in the Jellyfin plugins folder (it is located in the [main Jellyfin…
