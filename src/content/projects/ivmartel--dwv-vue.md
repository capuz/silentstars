---
repo: "ivmartel/dwv-vue"
name: "dwv-vue"
description: "Medical image viewer using DWV (DICOM Web Viewer) and Vue.js."
url: "https://github.com/ivmartel/dwv-vue"
homepage: "https://ivmartel.github.io/dwv-vue"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [59, 40]
topics: ["medical-imaging", "dicom-web-viewer", "dwv", "vuejs", "vue"]
stars: 107
forks: 39
openIssues: 3
closedIssues: 40
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2018-03-19T23:24:52Z"
lastCommitAt: "2026-06-29T07:23:25Z"
lastReleaseAt: "2024-11-25T11:49:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["dependabot[bot]", "github-actions[bot]", "ivmartel"]
openGraphImageUrl: "https://opengraph.githubassets.com/795d391dd91f9847d7b679589f6499ba3ed4da710da3e4a6fe79862e13c7e6e2/ivmartel/dwv-vue"
---

# dwv-vue

Medical viewer using [DWV](https://github.com/ivmartel/dwv) (DICOM Web Viewer) and [Vue.js](https://vuejs.org/).

All coding/implementation contributions and comments are welcome. Releases should be ready for deployment otherwise download the code and install dependencies with a `yarn` or `npm` `install`.

dwv-vue is not certified for diagnostic use. Released under GNU GPL-3.0 license (see [license.txt](license.txt)).

## Available Scripts

 - `ìnstall`: install dependencies
 - `dev`: serve with hot reload at localhost:5173
 - `lint`: run linting
 - `test`: run unit tests with hot reload
 - `build`: build for production

Unit tests use [Vitest](dev).

This project was generated with [vite](https://vitejs.dev) version 5.2.0.

For a detailed explanation on how things work, check out the [vite guide](https://vitejs.dev/guide/).

## Steps to run the viewer from scratch

```sh
# get the code
git clone https://github.com/ivmartel/dwv-vue.git

# move to its folder
cd dwv-vue

# install dependencies
yarn install

# call the start script to launch the viewer on a local server
yarn run dev
```

You can now open a browser at http://localhost:5173 and enjoy!

## DWVs' Web workers…
