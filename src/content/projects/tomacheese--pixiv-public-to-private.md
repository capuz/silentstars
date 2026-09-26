---
repo: "tomacheese/pixiv-public-to-private"
name: "pixiv-public-to-private"
description: "🔏 Changes all illustrations and novels publicly bookmarked on pixiv to private bookmarks."
readmeQualityOk: true
url: "https://github.com/tomacheese/pixiv-public-to-private"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["pixiv"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-09-09T18:39:52Z"
lastCommitAt: "2026-09-26T08:46:28Z"
lastReleaseAt: "2023-01-29T06:01:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["renovate[bot]", "akubiusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3df2868b10fba47df8af51946a6aa9377f73c41f63813897f748d4d065e046f/tomacheese/pixiv-public-to-private"
---

# pixiv-public-to-private

Changes all illustrations and novels publicly bookmarked on pixiv to private bookmarks.

This application is intended to change the visibility of bookmarks on an ongoing schedule.  
If you expect to make temporary batch changes, you can use the following script created in the browser devtool.

- [toggleAllRestrict.js - Gist](https://gist.github.com/book000/f300385613d2d78125fa86fa78432828)

## Requirements

- Docker Compose
- Valid pixiv refresh token: Please refer to these to retrieve
  - [Retrieving Auth Token (with browser dev console) by ZipFile](https://gist.github.com/ZipFile/c9ebedb224406f4f11845ab700124362)
  - [Retrieving Auth Token (with Selenium) by upbit](https://gist.github.com/upbit/6edda27cb1644e94183291109b8a5fde)

## Installation

Works in Docker Compose environment.

### Docker Compose

If you want to use Docker Compose, write the following in `compose.yaml`:

```yaml
services:
  app:
    image: ghcr.io/tomacheese/pixiv-public-to-private
    volumes:
      - type: bind
        source: ./data
        target: /data/
    init: true
    restart: always
```

You can then refer to the [configuration section](#configuration) to create a…
