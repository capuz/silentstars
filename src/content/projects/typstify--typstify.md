---
repo: "typstify/typstify"
name: "typstify"
description: "A cross-platform Typst editor"
readmeQualityOk: true
url: "https://github.com/typstify/typstify"
homepage: "https://typstify.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 93
forks: 7
openIssues: 11
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T05:30:42Z"
lastCommitAt: "2026-08-24T04:21:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["oligo", "Just8it", "cheerioskun"]
openGraphImageUrl: "https://opengraph.githubassets.com/390eaee8c70a9d232ecd78c45fd3d4723b2205f24611fc90725d1c0872f9fe67/typstify/typstify"
discussionCount: 1
---

# Typstify

The cross-platform desktop editor for Typst. Unlock the power of Typst with Typstify. Get the professional power of LaTeX with a modern, intuitive editor designed for seamless typesetting and development.

## Run

```sh
git clone https://github.com/typstify/typstify.git
cd typstify
go run .
```

To run the app locally, you must 
* Place the executables `typst` and `tinymist` (or `tyspt.exe` and `tinymist.exe`) in the root folder, 
* Or set custom executable paths for Typst and Tinymist in the setting page.

## Build

This project uses [Gio](https://gioui.org/) to build the UI. To build a binary release, you have to install and use the gogio tool, please 
refer to [gio-cmd](https://git.sr.ht/~eliasnaur/gio-cmd) to learn more. Also CGO must be enabled to build it.

**Important:** The typstify project is distributed as source code only. For pre-compiled binary releases, please download from the [official website](https://typstify.com/download)

## Contribute

Please feel free to contribute by filing issues or creating pull requests. 

## Explore Further

-	[Official Website](https://typstify.com)

## License

This project is distributed under the [Apache License, Version…
