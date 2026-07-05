---
repo: "frostney/GocciaScript"
name: "GocciaScript"
description: "A drop of JavaScript - A sandbox-first ECMAScript runtime implemented in Object Pascal"
readmeQualityOk: true
url: "https://github.com/frostney/GocciaScript"
homepage: "https://gocciascript.dev"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [74]
topics: ["ecmascript", "interpreter", "javascript", "pascal", "freepascal", "fpc", "object-pascal", "jsx", "typescript", "runtime"]
stars: 19
forks: 3
openIssues: 67
closedIssues: 243
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2025-05-25T20:21:09Z"
lastCommitAt: "2026-07-05T20:58:48Z"
lastReleaseAt: "2026-04-29T22:18:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 74
maintainers: ["frostney", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff0cd2a5fe8c4d4b0ed70afa1ae6f0ecad9414f63678226abadd6be6c960567/frostney/GocciaScript"
---

# GocciaScript

A drop of JavaScript — A sandbox-first ECMAScript runtime implemented in FreePascal

It's based on the thought "What if we implement ECMAScript today, but make the recommended defaults modern, explicit, and sandbox-first". Error-prone, redundant, or high-risk legacy forms are off by default, while the engine and runtime can opt into the compatibility behavior needed for ECMAScript conformance and legacy code. See [Language](https://github.com/frostney/GocciaScript/blob/HEAD/docs/language.md) for the full rationale.

## Features

GocciaScript implements modern ECMAScript: `let`/`const`, arrow functions, classes with private fields, `for...of`, async/await, ES modules, decorators, and TypeScript-style type annotations. Features that are error-prone, redundant, or security risks (`var`, `function` keyword, `==`/`!=`, `eval`, labels, traditional loops, `for...in`) are excluded by default; selected legacy forms are available through explicit conformance-focused compatibility flags.

Core ECMAScript compatibility is now a release-track objective. The default language remains curated and sandbox-first, but test262 runs on every PR and main commit so conformance work can…
