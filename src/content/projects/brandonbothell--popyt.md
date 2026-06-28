---
repo: "brandonbothell/popyt"
name: "popyt"
description: "YouTube Data API v3 Node.JS library built in TypeScript with no dependencies."
url: "https://github.com/brandonbothell/popyt"
homepage: "https://popyt.brandonsbench.net/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["youtube", "youtube-api", "youtube-data-api", "simple-api", "typescript", "promise", "youtube-data", "video", "wrapper", "api-wrapper"]
stars: 45
forks: 12
openIssues: 9
closedIssues: 43
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2018-08-05T13:52:32Z"
lastCommitAt: "2026-06-28T01:35:23Z"
lastReleaseAt: "2019-12-23T07:18:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 58
maintainers: ["brandonbothell", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4b3558ea73712a0fe30b01df429e0ee26ca60e3500e019aa3d399657f89887b/brandonbothell/popyt"
fundingLinks: ["GITHUB:https://github.com/brandonbothell"]
discussionCount: 3
---

# Popyt
Want to access data from the YouTube Data v3 API? Want a Node.js YouTube API wrapper with typings, promises, and caching? No problem! We've got ya covered. `npm i popyt`

## Ask the AI assistant on the [documentation site](https://popyt.brandonsbench.net/docs/api), try out the [5-minute tutorial](https://popyt.brandonsbench.net/docs/tutorial/intro), or clone the [example project](https://github.com/brandonbothell/popyt-example).
### What you'll need

- A [YouTube Data v3](https://developers.google.com/youtube/v3/getting-started) API key:
  - Complete steps 1-4 on the page linked above and copy your API key.

### Here are some basic methods ([try it on CodeSandbox](https://codesandbox.io/p/sandbox/fetch-videos-from-youtube-jmqlfq)):

Instantiate the object:

```js
const { YouTube } = require('popyt')
const youtube = new YouTube(apiKey)
```

Instantiate the object without caching:

```js
const { YouTube } = require('popyt')
const youtube = new YouTube(apiKey, undefined, { cache: false })
```

Get a video by ID:

```js
const video = await youtube.getVideo('dQw4w9WgXcQ')
console.log(video)
```

You can do the same thing with playlists, channels, and comments by replacing…
