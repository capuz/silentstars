---
repo: "jcraigk/phishin"
name: "phishin"
description: "An archive of live Phish audience recordings"
readmeQualityOk: true
url: "https://github.com/jcraigk/phishin"
homepage: "http://phish.in"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [57]
topics: ["rails", "music-library", "phish", "soundmanager2"]
stars: 94
forks: 15
openIssues: 18
closedIssues: 237
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2013-11-12T07:55:10Z"
lastCommitAt: "2026-08-15T04:04:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 50
maintainers: ["jcraigk", "pete-builds"]
openGraphImageUrl: "https://opengraph.githubassets.com/53916e71ddb9f9ed47c315233b550fa87aae277e348112668f1564eaf0752035/jcraigk/phishin"
---

Phish.in is an open source archive of live Phish audience recordings.

Ruby on Rails and Grape API wrap a PostgreSQL database on the backend. There's a [web frontend](https://phish.in) written in React for browsing and playing audio content as well as a [JSON API](https://petstore.swagger.io/?url=https%3A%2F%2Fphish.in/api/v2/swagger_doc) for accessing content programmatically.

All audio is provided in MP3 format. More formats and sources may be made available at a later time. Assets including audio MP3s, waveform PNGs, and album art JPEGs are served directly from the web server and cached via CloudFlare CDN.

Join the [Discord](https://discord.gg/KZWFsNN) to discuss content and development or install the [Discord Bot](https://github.com/jcraigk/phishin-discord) to query setlists and play music in voice channels.

## Developer Setup

1. Install [Docker](https://www.docker.com/)

2. Clone the repo to your local machine
3. Create a `.env` file at the root of the repository (copy `.env.example` for the available settings)
4. Run `mise run services`

5. Download the [Development SQL…
