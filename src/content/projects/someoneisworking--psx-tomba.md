---
repo: "SomeoneIsWorking/psx-tomba"
name: "psx-tomba"
description: "Tomba!2 PC-native game engine (consumes psxport framework as a submodule)"
readmeQualityOk: true
url: "https://github.com/SomeoneIsWorking/psx-tomba"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-17T17:48:58Z"
lastCommitAt: "2026-11-12T05:42:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["SomeoneIsWorking"]
openGraphImageUrl: "https://opengraph.githubassets.com/81726926be8d2191ac1001629345229a7f9c7f84a4f981e29554de24adf0b4ad/SomeoneIsWorking/psx-tomba"
---

# Tomba Engine — Tomba! and Tomba! 2

This repository contains two isolated PlayStation-to-PC ports:

- **Tomba! 2: The Evil Swine Return** (`SCUS_944.54`) is the active title.
- **Tomba!** (`SCUS_942.36`) follows after Tomba! 2 completes its execution migration.

## Screenshots

Tomba! 2 running in this port at 16:9, captured from the product.

The attract demo's village, the same frames at the original 30 fps (left) and interpolated to 60 fps (right).

The same frame at 4:3 and 16:9: the widened view draws the catapult and the tower the original leaves out.

| | |
|---|---|
|  |  |
|  |  |

The intended product is a native/dynarec hybrid. Readable C++ subsystems and native overrides own
deliberately ported behavior; every remaining guest instruction is translated on demand from the
user's authenticated game image by the shared `psxport` Lightrec executor. The gameplay binary contains
no offline-emitted guest source. Lightrec is the default; `psxport` may use its bounded, reason-counted
interpreter fallback only for translation failure or unavailability, unsafe fetch, or a rare unsupported
block. Forced interpreter mode is diagnostic-only, and fallback-covered execution cannot…
