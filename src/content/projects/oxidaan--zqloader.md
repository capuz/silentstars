---
repo: "oxidaan/zqloader"
name: "zqloader"
description: "A quick loader for the ZX Spectrum"
readmeQualityOk: true
url: "https://github.com/oxidaan/zqloader"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["z80", "zx-spectrum", "quickloader", "turboloader", "spectrum"]
stars: 24
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-02-16T21:11:09Z"
lastCommitAt: "2026-07-05T20:59:04Z"
lastReleaseAt: "2025-11-29T23:05:27Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 46
maintainers: ["oxidaan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2465afdf782145b75a6015e33536382a988cbd44323dd3134137c59e0ec467e/oxidaan/zqloader"
discussionCount: 1
---

ZQloader
====

This is a turbo loader used to load machine code games into a **real** unmodified ZX Spectrum at high speed.  

This loader is capable of loading a 48K game in about *25-30 seconds*. (Jetset Willy snapshot in 19 seconds!). This time includes the time of loading the loader itself (which uses traditional ROM loader/speed) plus a splash screen.  

See demo at https://www.youtube.com/watch?v=mMA2A-ZmxiA

The idea is that when using a computer to generate the loading-sounds a much higher speed can be achieved as compared to the old tapes. After all the accuracy when generating loading sounds from a computer is much higher than those old wobbly tape recorders.   

The loader is coded into a BASIC `REM` statement to have it loaded in one step, thus avoiding the need to load an additional machine code block (which would take extra time). At the ZX Spectrum all you have to type is `LOAD ""`.

To speed up even more data is compressed before loading.

The project code is portable and runs under both Windows and Linux.

Obviously this project has lots in common with [Otla](https://github.com/sweetlilmre/otla). Actually I was at 2/3 of developing this when I found out about…
