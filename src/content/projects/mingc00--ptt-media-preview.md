---
repo: "mingc00/ptt-media-preview"
name: "ptt-media-preview"
description: "修正 Ptt 網頁版 imgur 圖片顯示"
readmeQualityOk: true
url: "https://github.com/mingc00/ptt-media-preview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["chrome-extension"]
stars: 31
forks: 2
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2021-08-11T13:21:03Z"
lastCommitAt: "2026-09-14T09:10:46Z"
lastReleaseAt: "2026-09-14T09:12:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 55
maintainers: ["mingc00"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f86db02378985e606663a42d6b1d360846b5b5608b55a16de4913830b429d97/mingc00/ptt-media-preview"
---

# Ptt Imgur fix

Imgur blocked requests from Ptt web. For fixing this issue, this extension removes referer header from requests.

## Installation

### Chromium

You can install the latest version from the [Chrome Web Store](https://chromewebstore.google.com/detail/ptt-media-preview/khanhghjfcpmgkomfomadomnckjakglm).

## Firefox

You can install the latest version from the [Add-ons for Firefox](https://addons.mozilla.org/zh-TW/firefox/addon/ptt-imgur-fix/).

## Development

Source files live in `src/`. Build the `dist/web.js` and `dist/term.js` content-script bundles with:

```sh
node --run build
```

Run `node --run build:package` to create the shared Chrome and Firefox release archive.

Store releases are submitted through GitHub Actions. See [Publishing releases](https://github.com/mingc00/ptt-media-preview/blob/HEAD/docs/releasing.md) for the
required GitHub environment, credentials, and release steps.

## [Changelog](https://github.com/mingc00/ptt-media-preview/blob/HEAD/CHANGELOG.md)
