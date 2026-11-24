---
repo: "beorn/terminfo.dev"
name: "terminfo.dev"
description: "Can your terminal do that? — caniuse.com for terminal emulators. 250+ pages, 133 features, 19 terminals. CC BY 4.0."
readmeQualityOk: true
url: "https://github.com/beorn/terminfo.dev"
homepage: "https://terminfo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ansi", "caniuse", "terminal", "terminal-emulator", "vt100", "cli", "compatibility", "escape-sequences", "feature-detection", "open-data"]
stars: 6
forks: 0
openIssues: 21
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T19:30:09Z"
lastCommitAt: "2026-11-24T01:54:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 79
undervaluedScore: 57
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3021100b9040516c17ba93d12e35194653f2dc3e7c54849d5e73ba81fe35e867/beorn/terminfo.dev"
---

# terminfo.dev

[terminfo.dev](https://terminfo.dev) records what particular terminal implementations did under particular tests. Its feature descriptions, protocol references and measurements answer different questions. A reply to a cursor query, for example, cannot establish that truecolor text rendered correctly.

Run `npx terminfo.dev test` to record available observations from your terminal. In an ordinary terminal, state-changing tests are recorded as inconclusive unless a verified disposable test environment is available. The [contribution guide](https://github.com/beorn/terminfo.dev/blob/HEAD/docs/contribute.md) explains the methods, limits and submission flow. The published npm CLI and website may use older probe suites than this checkout; record the CLI version and suite identity with a result.
