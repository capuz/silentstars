---
repo: "SomeoneIsWorking/Tomba2Engine"
name: "Tomba2Engine"
description: "Tomba!2 PC-native game engine (consumes psxport framework as a submodule)"
readmeQualityOk: true
url: "https://github.com/SomeoneIsWorking/Tomba2Engine"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-17T17:48:58Z"
lastCommitAt: "2026-10-14T08:57:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["SomeoneIsWorking"]
openGraphImageUrl: "https://opengraph.githubassets.com/b86a07373f5798ccd40299a080f0835368aa17cfc671345ed6d2ebc996e6e545/SomeoneIsWorking/Tomba2Engine"
---

# Tomba Engine — Tomba! and Tomba! 2

This repository contains two isolated PlayStation-to-PC ports:

- **Tomba! 2: The Evil Swine Return** (`SCUS_944.54`) is the active title.
- **Tomba!** (`SCUS_942.36`) follows after Tomba! 2 completes its execution migration.

The intended product is a native/dynarec hybrid. Readable C++ subsystems and native overrides own
deliberately ported behavior; every remaining guest instruction is translated on demand from the
user's authenticated game image by the shared `psxport` Lightrec executor. The gameplay binary contains
no offline-emitted guest source. Lightrec is the default; `psxport` may use its bounded, reason-counted
interpreter fallback only for translation failure or unavailability, unsafe fetch, or a rare unsupported
block. Forced interpreter mode is diagnostic-only, and fallback-covered execution cannot establish
gameplay conformance or performance.

The repository is at the break-first migration gate described in
[`docs/migration.md`](https://github.com/SomeoneIsWorking/Tomba2Engine/blob/HEAD/docs/migration.md). Both offline guest-source products and their emission tooling are
already removed and must not be recreated. Tomba! 2 must…
