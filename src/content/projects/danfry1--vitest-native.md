---
repo: "danfry1/vitest-native"
name: "vitest-native"
description: "Test React Native with Vitest - against real React Native, or a fast mock. One plugin, zero config."
readmeQualityOk: true
url: "https://github.com/danfry1/vitest-native"
homepage: "https://danfry1.github.io/vitest-native/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [72, 28]
topics: ["expo", "jest", "mocking", "react", "react-native", "react-native-testing-library", "testing", "testing-library", "typescript", "unit-testing"]
stars: 57
forks: 4
openIssues: 4
closedIssues: 28
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-03-07T20:54:06Z"
lastCommitAt: "2026-11-03T19:05:18Z"
lastReleaseAt: "2026-06-21T20:02:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 42
maintainers: ["danfry1", "dependabot[bot]", "OpenDeernet"]
openGraphImageUrl: "https://opengraph.githubassets.com/b977843962d724180b13a7778ff141b429588c3bf837ba5dd5163fe9e16698fa/danfry1/vitest-native"
discussionCount: 0
---

# vitest-native

Run your React Native tests under Vitest, against **real React Native** — the same JavaScript
that ships in your app, mocking only the native-module boundary. That's the zero-config default.
A fast pure-JS **mock** engine is available as an opt-in for RN-free unit tests. One plugin.

Bare React Native and **Expo** apps alike: coming from `jest-expo`, `npx vitest-native migrate --write`
translates the preset, and expo-router's own testing library runs as written — see the
[Expo guide](https://danfry1.github.io/vitest-native/guide/expo).

**📖 Documentation: [danfry1.github.io/vitest-native](https://danfry1.github.io/vitest-native/)**

> **Beta.** The reproducible guarantee is a CI-gated behavioral cross-check that runs the same
> assertions under the mock engine **and** real React Native across RN 0.81–0.88, failing the build
> on any divergence. Pinned external apps are also run as non-authoritative integration
> observations; their custom migration setup and Jest-era shims do not define package support.
> See the [validation model](https://danfry1.github.io/vitest-native/guide/validation-model).
> Some APIs may still shift before 1.0 — what is covered, what is…
