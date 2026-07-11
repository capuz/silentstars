---
repo: "mitchivin/mipod"
name: "mipod"
description: "Click-wheel iPod-style music player for the web."
readmeQualityOk: true
url: "https://github.com/mitchivin/mipod"
homepage: "https://mitchivin.github.io/mipod/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [59, 32]
topics: ["ipod", "javascript", "music-player", "vanilla-js", "web-audio", "html5", "retro", "click-wheel"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-19T03:03:49Z"
lastCommitAt: "2026-07-11T05:58:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 17
maintainers: ["mitchivin"]
openGraphImageUrl: "https://opengraph.githubassets.com/848fb63dc09650c4af4ee4117e89eb6d8c49dbbbe864b0b8f217404b3ce88ee3/mitchivin/mipod"
---

# MiPod

A **click-wheel music player** for the web, styled like a classic iPod. Browse artists, albums, and songs, then hit Now Playing.

Live at [mitchivin.github.io/mipod](https://mitchivin.github.io/mipod/).

The shell was designed in **[DoodleDev](https://doodledev.app)** and mounts as a web component. No framework, no runtime deps.

  &nbsp;
</p>

## Features

- Click wheel navigation (scroll, menu, play/pause, forward/back)
- Browse by artist, album, or song with slide transitions
- Now Playing with artwork, scrolling titles, and a live progress bar
- Shuffle and repeat
- First visit opens a Language screen. Confirm English to unlock UI ticks and enter the main menu
- Plain static site. Serve the folder from anywhere

## Run locally

You need a static server for ES modules and `fetch` on the library file.

```bash
git clone https://github.com/mitchivin/mipod.git
cd ipod
npx serve .
```

Open whatever URL it prints (usually `http://localhost:3000`).

Optional checks:

```bash
npm install
npm run lint
npm run knip
```

## Add music

Edit `js/library.json` and put files under `public/`:

```json
{
  "id": 1,
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album…
