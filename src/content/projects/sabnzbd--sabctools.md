---
repo: "sabnzbd/sabctools"
name: "sabctools"
description: "C implementations of functions for use within SABnzbd"
readmeQualityOk: true
url: "https://github.com/sabnzbd/sabctools"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 25
forks: 13
openIssues: 1
closedIssues: 58
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2016-10-02T10:07:34Z"
lastCommitAt: "2026-08-03T06:44:40Z"
lastReleaseAt: "2023-02-18T14:16:30Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 63
maintainers: ["Safihre", "dependabot[bot]", "mnightingale"]
openGraphImageUrl: "https://opengraph.githubassets.com/f35a2f6211ff9eb7636a4d4dac26a1599309e1bd5261cff5d8f5748364ec9bae/sabnzbd/sabctools"
---

SABCTools - C implementations of functions for use within SABnzbd
===============================

This module implements three main sets of C implementations that are used within SABnzbd: 
* yEnc decoding and encoding using SIMD routines
* CRC32 calculations
* Non-blocking SSL-socket reading
* Marking files as sparse

Of course, they can also be used in any other application.

## yEnc decoding and encoding using SIMD routines
yEnc decoding and encoding performed by using [yencode](https://github.com/animetosho/node-yencode) from animetosho, 
which utilizes x86/ARM SIMD optimised routines if such CPU features are available.

## CRC32 calculations
We used the `crcutil` library for very fast CRC calculations.

## Non-blocking SSL-socket reading
When Python reads data from a non-blocking SSL socket, it is limited to receiving 16K data at once. This module implements a patched version that can read as much data is available at once.
For more details, see the [cpython pull request](https://github.com/python/cpython/pull/31492).

## Marking files as sparse
Uses Windows specific system calls to mark files as sparse and set the desired size.
On other platforms the same is achieved by…
