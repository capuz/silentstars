---
repo: "tomacheese/pixiv-public-to-private"
name: "pixiv-public-to-private"
description: "🔏 Changes all illustrations and novels publicly bookmarked on pixiv to private bookmarks."
url: "https://github.com/tomacheese/pixiv-public-to-private"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["pixiv"]
stars: 18
forks: 3
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-09-09T18:39:52Z"
lastCommitAt: "2026-07-03T12:22:53Z"
lastReleaseAt: "2023-01-29T06:01:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["renovate[bot]", "akubiusa", "book000"]
openGraphImageUrl: "https://opengraph.githubassets.com/20a006e43fb1a7801660d337b0b7607dbffe192ba0dc993277089cdb3820d0aa/tomacheese/pixiv-public-to-private"
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
