---
repo: "richardwilkes/toolbox"
name: "toolbox"
description: "Toolbox for Go"
readmeQualityOk: true
url: "https://github.com/richardwilkes/toolbox"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 45
forks: 8
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2017-10-31T00:37:53Z"
lastCommitAt: "2026-08-30T00:44:18Z"
lastReleaseAt: "2019-02-07T18:07:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 56
maintainers: ["richardwilkes"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e03db2e19764766582d998640d2142b36f7092518d3e78133b0271e11b86e97/richardwilkes/toolbox"
fundingLinks: ["GITHUB:https://github.com/richardwilkes"]
---

# toolbox

Toolbox for Go.

Contains a wide variety of code I've found useful in my own projects over the years. For cases where code exists to help
use standard library code, the package has been named the same as the standard library one, but with a preceeding "x"
(for extended). This allows both to be used in the same file without having to do import renaming.

## Package Overview

### Core Utilities

- **`check`** - Enhanced testing utilities that wrap Go's standard testing interface with more informative error
  messages and convenient assertion methods.

- **`errs`** - Structured error handling with stack traces, error chaining, and detailed error objects that provide
  source locations and nested causes for better debugging.

- **`i18n`** - Internationalization support for applications, providing localization capabilities for user-facing text
  and messages.

- **`notifier`** - Event notification system for implementing the observer pattern, allowing objects to register for and
  receive notifications about events.

- **`tid`** - Thread-safe unique identifier generation using cryptographically secure random values encoded in base64.

- **`uti`** - Uniform Type Identifiers…
