---
repo: "jMonkeyEngine/jmonkeyengine-website"
name: "jmonkeyengine-website"
description: "jmonkeyengine.org website"
readmeQualityOk: true
url: "https://github.com/jMonkeyEngine/jmonkeyengine-website"
homepage: "https://jmonkeyengine.org"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [31, 27]
stars: 28
forks: 10
openIssues: 0
closedIssues: 7
watchers: 17
contributors: 17
recentReleases: 0
createdAt: "2016-05-25T16:14:00Z"
lastCommitAt: "2026-10-11T10:14:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["riccardobl", "github-actions[bot]", "quazi-irfan"]
openGraphImageUrl: "https://opengraph.githubassets.com/978bfb4d50812b904deec5d98d2a24a599ff8d60060ce9c530d8f2d32515fa42/jMonkeyEngine/jmonkeyengine-website"
---

# jMonkeyEngine Website

This is the Hugo source for the jMonkeyEngine website.

## Requirements

- Hugo extended. The repo includes a Linux `./hugo` binary; otherwise install `hugo` on your PATH.
- `lessc`
- `python3`
- Python modules: `numpy`, `yaml`
- `ffmpeg`

## Build

```sh
./make.sh
```

The build refreshes homepage community data, regenerates the showcase mashup image,
compiles `static/css/style.less` to `static/css/style.css`, then runs Hugo.

Useful switches:

```sh
SKIP_COMMUNITY_DATA=1 ./make.sh
SKIP_SHOWCASE_MASHUP=1 ./make.sh
DONT_COMPILE_LESS=1 ./make.sh
```

## Local Server

```sh
./make.sh server
```

The server binds to `0.0.0.0` and uses Hugo's default port, `1313`.
