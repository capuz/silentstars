---
repo: "cutzenfriend/docker-absautoconverter"
name: "docker-absautoconverter"
description: "A Docker to automatically convert all your current and future Audiobooks within Audiobookshelf to the single file .m4b format."
readmeQualityOk: true
url: "https://github.com/cutzenfriend/docker-absautoconverter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 78
forks: 10
openIssues: 1
closedIssues: 16
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2023-12-26T10:09:47Z"
lastCommitAt: "2026-07-13T06:37:56Z"
lastReleaseAt: "2026-06-18T10:53:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/057104b7f728e0e01587ba4b3e905e30112218bef649aff8014413cff00b77e5/cutzenfriend/docker-absautoconverter"
---

<br/>
  <h3 align="center"><a href="https://www.audiobookshelf.org" target="_blank">Audiobookshelf</a> - Autoconverter .m4b</h3>

    A Docker to automatically convert all your current and future Audiobooks within Audiobookshelf to the single file .m4b format.
Your need (of cause) a running instance of Audiobookshelf for this Docker to work with!
(It can run on a different host than audiobookshelf if necessary)
    <br/>
    <br/>
  </p>
</p>

## About The Project

I had a huge library of Audiobooks. Some of them were already .m4b but most of them were multiple mp3's.

I wanted to archive 3 things:
1. Convert all my mp3 only Audiobooks to .m4b but a maximum of X in parallel (to not stress the server CPU too much).
2. Automatic convert of newly added Audiobooks if they are not single file .m4b and let it check in cron style within a container.
3. Don't use 3rd party software and use the built in converter of Audiobookshelf instead. So the API of Audiobookshelf was the way to go.

https://hub.docker.com/r/cutzenfriend/abs-autoconverter

## How it works

1. Check for active `.m4b` conversion tasks on the server and calculate available slots (`MAX_PARALLEL_CONVERSIONS` minus active…
