---
repo: "fonttools/fontspector"
name: "fontspector"
description: "Skrifa/Read-Fonts-based font QA tool (successor to fontbakery)"
readmeQualityOk: true
url: "https://github.com/fonttools/fontspector"
homepage: "https://fonttools.github.io/fontspector/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 112
forks: 21
openIssues: 136
closedIssues: 138
watchers: 15
contributors: 19
recentReleases: 0
createdAt: "2023-12-15T11:06:53Z"
lastCommitAt: "2026-09-22T08:33:29Z"
lastReleaseAt: "2025-07-11T15:10:12Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 44
maintainers: ["renovate[bot]", "simoncozens", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1316a7672ce226f72982a30265ffe06026cae667879aea0672f8fa38d28bdc5f/fonttools/fontspector"
discussionCount: 4
---

# Fontspector

Fontspector is a command-line tool for checking the quality of font projects.
It is a Rust port of [fontbakery](http://github.com/fonttools/fontbakery).

## Installation

Please see the [installation guide](https://github.com/fonttools/fontspector/blob/HEAD/INSTALLATION.md) for downloading and installing Fontspector.

## Components

Fontspector is made up of multiple crates:

- `fontbakery-bridge`: Allows Python fontbakery checks to run inside fontspector
- `fontspector-checkapi`: Defines the API and utility functions for check implementations
- `fontspector-checkhelper`: Procedural macros to facilitate check implementations
- `fontspector-cli`: The main fontspector executable
- `fontspector-py`: A Python module exposing fontspector (for which see below)
- `fontspector-web`: A WASM implementation of fontspector (for which see below)
- `profile-testplugin`: An example of a runtime-loadable test profile
- `profile-googlefonts`, `profile-opentype`, `profile-universal`: Built in profiles and their check implementations
- `profile-microsoft`, `profile-adobe`, ...: Additional profiles which are loaded at runtime (see below)

## Building the web version

Fontspector also…
