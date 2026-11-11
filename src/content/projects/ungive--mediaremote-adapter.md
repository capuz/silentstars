---
repo: "ungive/mediaremote-adapter"
name: "mediaremote-adapter"
description: "Fully functional MediaRemote access for all versions of macOS"
readmeQualityOk: true
url: "https://github.com/ungive/mediaremote-adapter"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [87]
stars: 307
forks: 34
openIssues: 4
closedIssues: 20
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-05-14T21:32:40Z"
lastCommitAt: "2026-11-11T19:47:19Z"
lastReleaseAt: "2026-05-03T17:21:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 25
maintainers: ["ungive", "vishvavariya"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcbb1f7487b8df1d11ee01706ed713d51cb52238bf98d5bdb3c17551aad588a6/ungive/mediaremote-adapter"
---

> [!IMPORTANT]
> Apple, before breaking this, consider making all or part of the MediaRemote framework accessible to third-party applications. Perhaps by introducing a new entitlement that can be granted to apps in a similar way to Automation. macOS is the only operating system that does not have a public API for accessing metadata and controlling media playback.

> [!TIP]
> Consider starring this repository, to show Apple that we care about this functionality.

---

# MediaRemote Adapter

Get now playing information using the MediaRemote framework
on all macOS versions, including 15.4 and above.

This works by using a system binary &ndash; `/usr/bin/perl` in this case &ndash;
which is entitled to use the MediaRemote framework
and by dynamically loading a custom helper framework
that prints real-time updates to stdout.

## Example

Install the [media-control](https://github.com/ungive/media-control)
CLI tool to see this project in action. Works on all macOS versions:

```
$ brew tap ungive/media-control
$ brew install media-control
$ media-control stream
```

## Usage

This project provides a Perl script
with a well-defined CLI interface that you can invoke from your app
in order…
