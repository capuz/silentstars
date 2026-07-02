---
repo: "electron/chromedriver"
name: "chromedriver"
description: "Download ChromeDriver for Electron"
url: "https://github.com/electron/chromedriver"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 143
forks: 62
openIssues: 0
closedIssues: 44
watchers: 16
contributors: 27
recentReleases: 0
createdAt: "2015-10-11T18:52:47Z"
lastCommitAt: "2026-07-02T06:33:14Z"
lastReleaseAt: "2019-07-29T22:25:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 29
maintainers: ["dependabot[bot]", "MarshallOfSound", "dsanders11"]
openGraphImageUrl: "https://opengraph.githubassets.com/193d486994049634057bae537b3aa76982520f915ea9f1d416783c4c0d92baba/electron/chromedriver"
---

# Electron ChromeDriver

<br>
<br>

Simple node module to download the [ChromeDriver](https://sites.google.com/corp/chromium.org/driver/)
version for [Electron](https://electronjs.org).

The major version of this library tracks the major version of the Electron
versions released. So if you are using Electron `2.0.x` you would want to use
an `electron-chromedriver` dependency of `~2.0.0` in your `package.json` file.

This library is used by [spectron](https://github.com/electron/spectron).

## Using

```sh
npm install --save-dev electron-chromedriver
chromedriver -h
```

## Custom Mirror

You can set the `ELECTRON_MIRROR` or [`NPM_CONFIG_ELECTRON_MIRROR`](https://docs.npmjs.com/misc/config#environment-variables)
environment variables to use a custom base URL for downloading ChromeDriver zips.

```sh
# Electron mirror for China
ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

# Local mirror
# Example of requested URL: http://localhost:8080/1.2.0/chromedriver-v2.21-darwin-x64.zip
ELECTRON_MIRROR="http://localhost:8080/"
```

## Overriding the version downloaded

The version downloaded can be overriden by setting the `ELECTRON_CUSTOM_VERSION` environment variable.
