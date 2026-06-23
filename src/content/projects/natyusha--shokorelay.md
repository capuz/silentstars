---
repo: "natyusha/ShokoRelay"
name: "ShokoRelay"
description: "A custom Plex metadata provider and automation toolset for integrating Plex and AnimeThemes with Shoko Server."
url: "https://github.com/natyusha/ShokoRelay"
language: "C#"
languages: ["C#"]
languagePcts: [78]
topics: ["anime", "dotnet", "plex", "shoko", "animethemes", "vfs"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-02T21:35:57Z"
lastCommitAt: "2026-06-23T23:17:35Z"
lastReleaseAt: "2026-03-06T16:43:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 58
maintainers: ["natyusha", "github-actions[bot]", "revam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1148350936/bf942020-da05-488d-b032-80170c6e2fd2"
fundingLinks: ["GITHUB:https://github.com/natyusha", "CUSTOM:https://paypal.me/natyusha"]
---

![Shoko Relay Logo](https://raw.githubusercontent.com/natyusha/ShokoRelay/master/ShokoRelay/Assets/shoko-relay-logo-small.png "Shoko Relay")  
-

This is a plugin for [Shoko](https://shokoanime.com/) that acts as a [Custom Metadata Provider](https://forums.plex.tv/t/announcement-custom-metadata-providers/934384) for Plex. It is a successor to the [ShokoRelay.bundle](https://github.com/natyusha/ShokoRelay.bundle) legacy agent/scanner and mirrors all of its functionality (including the automation scripts). Scanning is much faster and there are many new features included as well. Just like the old bundle this is intended to work with series of all types within a single "TV Shows" library. All you need to get started is a populated [Shoko Server](https://shokoanime.com/downloads/shoko-server) (using a daily build) and [Plex Media Server](https://www.plex.tv/media-server-downloads/).

Due to the lack of a custom scanner this plugin leverages a VFS (Virtual File System) to ensure that varied folder structures are supported. This means that your anime can be organised with whatever file or folder structure you want. There is one caveat though. A folder cannot contain more than one AniDB…
