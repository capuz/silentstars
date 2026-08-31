---
repo: "Infineon/lin"
name: "lin"
description: "The LIN middleware implements a LIN 2.2 and ISO 17987 compliance slave node."
readmeQualityOk: true
url: "https://github.com/Infineon/lin"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 17
forks: 6
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 5
recentReleases: 0
createdAt: "2021-05-21T08:08:03Z"
lastCommitAt: "2026-08-31T09:44:14Z"
lastReleaseAt: "2021-12-10T13:47:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 30
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a8f05a9c94b46ccaa71afc6d212db0105b0becda07d6d444687ebbb67b0e61c4/Infineon/lin"
---

# LIN Middleware Library

## Overview

The LIN middleware implements a slave node for the PSOC 4000S, PSOC 4100S,
PSOC 4100S Plus, PSOC 4500S, PSOC 4100S Max, and PSOC 4000T devices.

## Features

- Full LIN 2.2 Slave Node implementation
- Compliance with ISO 17987 specification
- Full transport layer support
- Automatic baud rate synchronization
- Automatic detection of bus inactivity
- Fully implements a Diagnostic Class I Slave Node
- Supports implementation of Diagnostic Class II and III Slave Node
- Full error detection
- Automatic configuration services

## Quick Start

Refer to the [API Reference Quick Start Guide](https://infineon.github.io/lin/html/index.html) section for step-by-step instruction on how to enable the LIN Middleware Library.

## Known issues/limitations
An event-triggered frame reports incorrect data when such a frame is associated with the unconditional frame where the response error signal is placed. To get the correct data, read an unconditional frame instead of an event-triggered frame.

## More information

For more information, refer to the following documents:

- [LIN Middleware RELEASE.md](https://github.com/Infineon/lin/blob/HEAD/RELEASE.md)
-…
