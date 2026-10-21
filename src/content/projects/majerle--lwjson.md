---
repo: "MaJerle/lwjson"
name: "lwjson"
description: "Lightweight JSON parser for embedded systems"
readmeQualityOk: true
url: "https://github.com/MaJerle/lwjson"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["json", "javascript-object-notation", "javascript", "embedded", "systems", "microcontroller", "lightweight", "optimization", "parser", "reader"]
stars: 274
forks: 64
openIssues: 5
closedIssues: 10
watchers: 11
contributors: 12
recentReleases: 1
createdAt: "2020-11-30T22:14:06Z"
lastCommitAt: "2026-10-21T08:48:45Z"
lastReleaseAt: "2026-07-29T10:45:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 37
maintainers: ["MaJerle", "Firat17aze", "dervomsee"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ba49b6e39664f920882ae29c34151c0ab2cb12c41b0dcdfff107ae581abceb4/MaJerle/lwjson"
fundingLinks: ["CUSTOM:paypal.me/tilz0R"]
discussionCount: 4
---

# Lightweight JSON text parser

LwJSON is a generic JSON parser library optimized for embedded systems.
Supports `streaming` parsing or classic parsing with full JSON data available in one big linear memory.
The first is optimized for ultra-small microcontrollers, while the second is better suited for PC applications, or simply when several kB of RAM are available.

[Open documentation](https://docs.majerle.eu/projects/lwjson/)

## Features

* Written in C (C11), compatible with `stdint.h` data types
* RFC 4627 and RFC 8259 compliant
* Based on static token allocation with optional application dynamic pre-allocation
* No recursion during parse operation
* Re-entrant functions
* Zero-copy, no `malloc` or `free` functions used
* Supports streaming parsing as secondary option
* Optional support for inline comments with `/* comment... */` syntax between any *blank* region of input string
* JSON serializer separate module, with fixed-buffer or callback-driven chunked output
* Optional 64-bit integer serialization
* Stream parser stack-sequence helper macros for matching nested structures
* Distinct integer and real number token types
* Dedicated string escape/unescape utility API
*…
