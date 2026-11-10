---
repo: "vickeykumar/openrepl"
name: "openrepl"
description: "OpenREPL server"
readmeQualityOk: true
url: "https://github.com/vickeykumar/openrepl"
homepage: "http://openrepl.com"
language: "Go"
languages: ["Go"]
languagePcts: [68]
topics: ["gotty", "replserver", "openrepl", "gorepl"]
stars: 47
forks: 4
openIssues: 2
closedIssues: 5
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2018-01-31T17:24:20Z"
lastCommitAt: "2026-11-10T11:37:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 54
maintainers: ["vickeykumar"]
openGraphImageUrl: "https://opengraph.githubassets.com/6988f88f3aff1b08c10867bc52d40c0915d837d6748134f909c1fe9ec023e4f3/vickeykumar/openrepl"
fundingLinks: ["GITHUB:https://github.com/vickeykumar"]
discussionCount: 0
---

#  OpenREPL

    

[docker-image]: https://github.com/vickeykumar/openrepl/actions/workflows/docker-image.yml
[license]: https://github.com/vickeykumar/openrepl/blob/master/LICENSE

OpenREPL initially Forked from [gotty](https://github.com/yudai/gotty.git). GoTTY is a simple command line tool that turns your CLI tools into web applications. 

 This Fork is intended to create web based REPL services for various programming languages using gotty and containers.
You can checkout on our website for more info on REPL playgrounds and try them as well: [openrepl.com](http://openrepl.com) (earlier [gorepl.com](http://gorepl.com))

> **Run it locally:** see [Run locally on macOS (Colima)](#run-locally-on-macos-colima).
>
> **Design docs:** see [Architecture (High-Level Design)](#architecture-high-level-design) below and the low-level designs in [`docs/`](https://github.com/vickeykumar/openrepl/blob/HEAD/docs/README.md).

# Installation

Fork openrepl to start the REPL servers in your local system, Please make sure all pre-requisites are installed.

(Files named with `darwin_amd64` are for Mac OS X users)

You can install GoTTY REPL server as shown below:

## Non-debian:
```sh
$ cd src
$…
