---
repo: "Joel2B/Custom-Video-Player"
name: "Custom-Video-Player"
description: "HTML5 Video Player, based on Fluid Player v3.0.4"
url: "https://github.com/Joel2B/Custom-Video-Player"
homepage: "https://player-demo.tinyapps.download"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [61, 25]
topics: ["video", "html5", "hls", "html5-video", "dash", "video-player", "player", "video-streaming", "player-video", "html5-player"]
stars: 15
forks: 10
openIssues: 0
closedIssues: 13
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2021-07-01T03:56:00Z"
lastCommitAt: "2026-06-30T06:50:13Z"
lastReleaseAt: "2021-08-03T02:47:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 70
undervaluedScore: 53
maintainers: ["Joel2B"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0033fd2e9a486208bc1ab2f024ab95bc04a515e39494667854f19f94128d4d5/Joel2B/Custom-Video-Player"
---

# Custom Video Player

HTML5 Video Player, based on Fluid Player v3.0.4

Desktop

Mobile

## Difference with fluid player

- Some errors fixed
- No ads support (VAST/VPAID)
- Smooth animations
- Customized timeline
- Customized thumbnails
- A main menu
  - Autoplay
  - Loop
  - Speed
  - Quality
  - Audio
  - Subtitles
- Forward and backward one frame

## Demo

[Custom Video Player](https://player-demo.tinyapps.download/)

[E2E cases](https://player.tinyapps.download/)

## Setup

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <title>Player</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <video id="player">
      <source src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type="application/x-mpegURL" />
    </video>
    <script…
