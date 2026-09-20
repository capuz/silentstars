---
repo: "millicast/millicast-sdk"
name: "millicast-sdk"
description: "SDK for building a realtime broadcaster using the Millicast platform."
readmeQualityOk: true
url: "https://github.com/millicast/millicast-sdk"
homepage: "https://millicast.github.io/millicast-sdk/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["dolby", "sdk", "webrtc", "optiview"]
stars: 49
forks: 35
openIssues: 6
closedIssues: 44
watchers: 17
contributors: 33
recentReleases: 0
createdAt: "2021-02-25T23:21:29Z"
lastCommitAt: "2026-09-20T08:47:00Z"
lastReleaseAt: "2021-05-27T17:59:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 58
maintainers: ["nicholi", "dependabot[bot]", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/955cc225408e05339d0a1625a5c37647a261896bcdac46664fc69546b8df4189/millicast/millicast-sdk"
---

# Millicast SDK for JavaScript

This Software Development Kit (SDK) for JavaScript allows developers to simplify Millicast services integration into their own web apps.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Publisher app](#publisher-app)
  - [Viewer app](#viewer-app)
- [Documentation](#documentation)
- [Samples](#samples)
- [JS Frameworks](#js-frameworks)
  - [React Native](#react-native)
- [SDK developer information](#sdk-developer-information)
- [License](#license)

## Installation
You can use the CDN version of the SDK adding this tag to your document's `<head>`. Then `millicast` global variable will be available to use it.
```html
<script src='https://cdn.jsdelivr.net/npm/@millicast/sdk@latest/dist/millicast.umd.js'></script>
```

Or if you are building an application with Node.js, you can install the SDK package to your dependencies.

```sh
npm i --save @millicast/sdk
```

## Basic Usage

The following examples demonstrate how to broadcast with the Publisher app capturing the user's camera and microphone. You can then view the stream using the Viewer app.

You will need to use a [Dolby Millicast…
