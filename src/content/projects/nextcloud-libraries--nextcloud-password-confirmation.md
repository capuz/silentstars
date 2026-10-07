---
repo: "nextcloud-libraries/nextcloud-password-confirmation"
name: "nextcloud-password-confirmation"
description: "Promise-based password confirmation wrapper for Nextcloud https://npmjs.org/@nextcloud/password-confirmation"
readmeQualityOk: true
url: "https://github.com/nextcloud-libraries/nextcloud-password-confirmation"
homepage: "https://nextcloud-libraries.github.io/nextcloud-password-confirmation/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["nextcloud-plugin"]
stars: 6
forks: 8
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2018-09-11T07:41:33Z"
lastCommitAt: "2026-10-07T10:31:22Z"
lastReleaseAt: "2024-12-17T13:42:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 96
maintainers: ["dependabot[bot]", "susnux", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b79256994a695b8f980bbc99cef0e1b4810f321b527f52cf9549605fd8867224/nextcloud-libraries/nextcloud-password-confirmation"
---

# @nextcloud/password-confirmation

Promise-based password confirmation for Nextcloud.

This library exports a function that displays a password confirmation dialog when called and returns a promise. This makes it easier to integrate with other asynchronous operations.

## Versions compatibility

| `@nextcloud/password-confirmation` | Maintained | Nextcloud   | `@nextcloud/vue` |
| ---------------------------------- | ---------- | ----------- | ---------------- |
| 6.x                                | ✅         | 31+         | *9.x (Vue 3)* ¹  |
| 5.x                                | ✅         | 28-32       | 8.x              |
| 2.x - 4.x                          | ❌         | 25-27       | 7.x              |
| 1.x                                | ❌         | < 25        | -                |

¹: In version 6.x the `@nextcloud/vue` dependency is moved to `dependencies` so you can also use this library
with an old version of `@nextcloud/vue` in your app dependencies if your app still uses Vue 2.
Note that this might increase the bundled app size.
If your app also already uses `@nextcloud/vue` version 9.x and Vue 3 then the bundle size will not increase.

## Installation
```sh
npm…
