---
repo: "tellers-ai/tellers-timeline"
name: "tellers-timeline"
description: "Video editing timeline helper with bindings in javascript, python and dart"
readmeQualityOk: true
url: "https://github.com/tellers-ai/tellers-timeline"
homepage: "https://tellers.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["flutter", "otio", "python", "rust", "typescript", "video", "video-editing"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-08-09T01:03:52Z"
lastCommitAt: "2026-11-03T12:48:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 69
maintainers: ["bjay-wk", "yxdunc", "malamba-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/df663081e3971da4aaa2cb4c8b758e60df9c90af3019d3f2747931f6ff83bde7/tellers-ai/tellers-timeline"
---

# tellers-timeline

**The timeline engine for tools that make the cut.**

Read timelines. Make edits. Keep everything in sync.

[Install](#install) · [Try it](#make-your-first-edit) · [Features](#what-works-today) · [Standardization](#building-a-shared-language-for-editing) · [Contribute](https://github.com/tellers-ai/tellers-timeline/blob/HEAD/CONTRIBUTING.md)

`tellers-timeline` is an open-source timeline engine, written in Rust and available
in Python, built around [OpenTimelineIO](https://opentimelineio.readthedocs.io/).
Use it to build editors, automate cuts, and exchange timelines between tools.

Our ambition is **full OTIO coverage**, with an editing API that handles the work
around the format: insert and overlap policies, linked audio and video, stable
identity, media bounds, and document cleanup. We're also developing shared
conventions for effects and IDs so more of an edit can travel between applications.

## Install

**Python** — prebuilt wheels for Linux x86-64, macOS Intel and Apple Silicon, and Windows x86-64:

```sh
pip install tellers-timeline
```

**Rust** — add the library to your application:

```sh
cargo add tellers-timeline-core
```

Python imports…
