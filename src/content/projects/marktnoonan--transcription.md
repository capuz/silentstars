---
repo: "marktnoonan/transcription"
name: "transcription"
description: "Live Transcription based on Speech Recognition API"
readmeQualityOk: true
url: "https://github.com/marktnoonan/transcription"
homepage: "https://freelivetranscript.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [53, 39]
stars: 45
forks: 24
openIssues: 8
closedIssues: 4
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2018-01-15T17:01:26Z"
lastCommitAt: "2026-10-19T09:14:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 55
maintainers: ["dstrube1", "dependabot[bot]", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5517b75080b4fa987414b1792ea14023d5d52fb3328973f2d7d4b08f68a7ab/marktnoonan/transcription"
---

# Live Transcript

A small application to use computer speech to text to show translation online and live. This makes sense for scenarios such as hearing impaired or recording something to be more machine readable. 

NOTE: This requires the Chrome browser for the transcription to work. It uses a built in feature in Chrome for text to speech. It's text-to-speech feature only works when the page is running on a server (localhost is fine), and the device has an internet connection.

# Live Version

[freelivetranscript.com](https://freelivetranscript.com/)

# Prerequisites to Implement Locally

1. node.js
2. git
3. parcel.js bundler
4. Chrome browser

# Getting started

Clone this repo:

```

git clone https://github.com/marktnoonan/transcription.git

```

In the root directory of the project on your computer, run the following commands:

```

npm install

npx parcel index.html

```

The first command will install any dependencies listed in the package.json file, and the second will use parcel open a port on localhost and serve index.html there.

Point your Chrome browser to `localhost:1234`.

This should get you up and running. Please report failures/problems with the build process…
