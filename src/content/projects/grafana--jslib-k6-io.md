---
repo: "grafana/jslib.k6.io"
name: "jslib.k6.io"
description: "Repository of useful utility libs for k6 scripts"
readmeQualityOk: true
url: "https://github.com/grafana/jslib.k6.io"
homepage: "https://jslib.k6.io/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [52, 47]
stars: 61
forks: 22
openIssues: 23
closedIssues: 17
watchers: 135
contributors: 80
recentReleases: 0
createdAt: "2019-05-31T14:04:24Z"
lastCommitAt: "2026-10-14T08:58:30Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 79
undervaluedScore: 32
maintainers: ["renovate-sh-app[bot]", "dgzlopes", "mstoykov"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad794a28e0aec33619b52e195f32faf11d7f6370b63212adc62160067eccd67c/grafana/jslib.k6.io"
---

# jslib.k6.io

[jslib.k6.io](http://jslib.k6.io), hosted utility libs for k6 scripts.

To make life a little easier during development, make sure to install the following:

- node >= 11.2.0
- yarn >= 1.13.0

> [!IMPORTANT]  
> We don't accept external contributions containing minified code for this project. For such cases, we expect the maintainer who reviewed the source code to distribute the changes. The distribution should usually happen after merging the pull request in the sub-project. If that didn't happen, please open [a new issue](https://github.com/grafana/jslib.k6.io/issues).

## How to add a new JS package

1. Create a new branch from the `main` branch.
2. Create a new lib dir `/lib/{lib_name}`
3. Create a new version dir `/lib/{lib_name}/{desired_version}/`
4. Add an entry file `/lib/{lib_name}/{desired_version}/index.js`
5. Add the lib to `supported.json` (see example below):

```javascript
{
  "{lib_name}": {
    // Available package versions
    "versions": [
      "{desired_version}"
    ],

    // (optional) Documentation's or repository's URL
    "docs-url": "{documentation_or_repository_url}",

    // (optional) As a default, the homepage will point to
    // a…
