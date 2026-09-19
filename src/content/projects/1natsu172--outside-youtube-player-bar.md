---
repo: "1natsu172/Outside-YouTube-Player-Bar"
name: "Outside-YouTube-Player-Bar"
description: "Display YouTube's player bar outside the video."
readmeQualityOk: true
url: "https://github.com/1natsu172/Outside-YouTube-Player-Bar"
homepage: "https://chrome.google.com/webstore/detail/outside-youtube-player-ba/gmlbhbdkhnfhhmhdjopdbcfliajcafde/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["youtube-player", "chrome-extension"]
stars: 28
forks: 1
openIssues: 4
closedIssues: 54
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-01-12T15:51:24Z"
lastCommitAt: "2026-09-19T01:37:49Z"
lastReleaseAt: "2018-09-15T00:55:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 53
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c4282569ed91d9c8340fb21de0bdbdaafeb1bc8b9102338efbfd479fb4e644/1natsu172/Outside-YouTube-Player-Bar"
---

# Outside YouTube Player Bar

Display YouTube's player bar outside the video.

## DOWNLOAD ON THE 

### Chrome

### Mozilla Firefox

### Microsoft Edge

***

# FOR DEVELOPER GUIDE

## Requirements

- Node.js
  - Version info in `./.tool-versions`
- pnpm
  - Version info in `packageManager` field of `./package.json`

## Setup

You must use pnpm. At the first, `corepack enable`.

Ready for use the pnpm, then install dependencies.

```
pnpm install
```

## Start development

```
pnpm run dev
```

Default dev browser is chrome. You can change other browser.

- `pnpm run dev:firefox`
- `pnpm run dev:edge`
- `pnpm run dev:chrome`
- `pnpm run dev:arc`

## Create release build and zip

- `pnpm run build`
  - Builds for all browsers. Outputs to the `.output` dir.
- `pnpm run zip`
  - Zips for all browsers. Outputs to the `.output` dir.

### Specific browser target

You can add `:<browser>` suffix to the script commands.

- `pnpm run build:firefox`
- `pnpm run zip:firefox`
- …… other browsers

## About the storage

### If add new defined value to storage item

If the unreleased versioning schema is changed during development, the option must be discarded once (reset to defaultValue).

If…
