---
repo: "MobAI-App/mobai-dev"
name: "mobai-dev"
description: "Everything a coding agent needs to build iOS apps from a Linux sandbox"
readmeQualityOk: true
url: "https://github.com/MobAI-App/mobai-dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [68]
stars: 55
forks: 5
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-08-31T16:07:55Z"
lastCommitAt: "2026-10-04T10:02:36Z"
lastReleaseAt: "2026-10-04T10:00:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 24
maintainers: ["Interlap01"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd718e9c3dc9fd55ed40fc2ce68c6de66bebc9619dc3b8369869b25af457d21f/MobAI-App/mobai-dev"
---

# mobai-dev

Everything a coding agent needs to build iOS apps from a Linux sandbox.
`mobai-dev` is one binary that previews the app, builds it, runs it on
simulators, and drives a real phone, from the environments where cloud
agents live.

## What an agent can do

### 1. Preview SwiftUI, React Native and Flutter (free)

The preview runs the app's real code in a phone-sized viewport on plain
Linux: no device, no simulator, no Mac. The agent reads the screen as a
semantic tree, taps and types by label, screenshots, and hot reloads after
edits. Location, permissions, the camera, the network and the signed-in user
are all mockable, so unhappy paths are one line away. Packages that need real
hardware are repaired with small adapters; a catalogue of ready-made ones
lives in [adapters/](https://github.com/MobAI-App/mobai-dev/blob/HEAD/adapters/INDEX.md). The whole workflow is taught to the
agent by the previewing-mobile-apps skill, which `mobai-dev setup` installs
from inside the binary, so it always matches the CLI version.

### 2. Build apps on GitHub Actions (free)

A sandbox has no Xcode, so iOS builds run on a macOS runner in CI, driven by
the embedded…
