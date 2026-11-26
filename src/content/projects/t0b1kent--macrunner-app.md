---
repo: "t0b1kent/macrunner-app"
name: "macrunner-app"
description: "MacRunner 1.1.5 for Apple Silicon: signed and notarized Mac app, with HyperBridge/FEX, Wine and Metal. Experimental Windows-game compatibility; source and releases available."
readmeQualityOk: true
url: "https://github.com/t0b1kent/macrunner-app"
homepage: "https://macrunner.app"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [75, 24]
topics: ["apple-silicon", "compatibility", "macos", "metal", "swiftui", "windows-apps", "wine", "arm64", "binary-translation", "hyperbridge"]
stars: 8
forks: 0
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-23T00:56:52Z"
lastCommitAt: "2026-11-26T23:37:47Z"
lastReleaseAt: "2026-11-16T01:36:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 67
undervaluedScore: 42
maintainers: ["t0b1kent"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdd3368b341ce46b41db89186be61c77299ebc87037660e3252fb3b9f38c7d4b/t0b1kent/macrunner-app"
---

---

MacRunner is built around a simple idea: **choose an app or game, add it to your library, and launch it from one familiar Mac interface.** The application brings together the runtime, graphics components, settings, and diagnostics needed to make that experience possible.

**HyperBridge is MacRunner's CPU engine:** an **x86-64 / x86 → ARM64 engine for Windows software on Apple Silicon**, built on [FEX-Emu](https://github.com/FEX-Emu/FEX) with MacRunner's own patch series. Its source is public under MIT at [t0b1kent/hyperbridge](https://github.com/t0b1kent/hyperbridge). Wine provides Windows API compatibility, and Metal handles graphics through the relevant translation components. [Explore the engine, its current scope and roadmap →](https://github.com/t0b1kent/macrunner-app/blob/HEAD/HYPERBRIDGE.md)

**Current release: [MacRunner 1.1.5](https://github.com/t0b1kent/macrunner-app/releases/tag/v1.1.5), build 125, November 26, 2026.** Apple Silicon, macOS 26.5 or later. Signed with Developer ID and notarized by Apple. [Release notes and known issues](https://github.com/t0b1kent/macrunner-app/blob/HEAD/docs/RELEASE-1.1.5-EN.md).
