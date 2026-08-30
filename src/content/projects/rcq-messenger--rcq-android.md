---
repo: "rcq-messenger/rcq-android"
name: "rcq-android"
description: "Android client for RCQ — privacy-first messenger. 9-digit IDs, no phone, no email. End-to-end encrypted via libsignal, with censorship circumvention built in. Open beta."
readmeQualityOk: true
url: "https://github.com/rcq-messenger/rcq-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 27
forks: 2
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-24T18:00:38Z"
lastCommitAt: "2026-08-30T00:44:53Z"
lastReleaseAt: "2026-06-14T01:18:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/fc16e4e21b17cd9fad087fe738ba6ab332187d7f5e4ee58e52d297be49dfea42/rcq-messenger/rcq-android"
---

# RCQ Android

Android client for **RCQ**, an end-to-end encrypted messenger whose identity is
a number the network issues you. No phone number, no email, no name, no ads.
Censorship circumvention is built into the app rather than left to the user.

- Site and downloads: <https://rcq.app>
- Latest release: [the releases page](https://github.com/rcq-messenger/rcq-android/blob/HEAD/../../releases/latest) (`rcq-universal.apk`
  plus per-ABI builds; the same files are mirrored at <https://rcq.app/android/>
  for networks where GitHub is throttled).
- Protocol spec: <https://github.com/rcq-messenger/rcq-spec>
- Reference server: <https://github.com/rcq-messenger/rcq-server-ref>
- iOS client: <https://github.com/rcq-messenger/rcq-ios>

**Status: open beta.** Published outside Google Play by sideloading; the app
self-updates from a manifest, trying `dl.rcq.app/android/latest.json` first and
`rcq.app/android/latest.json` after it. Messages, groups, calls and media are
cross-platform with the iOS and web clients.

## What is in here

| Path | What it is |
|---|---|
| `app/src/main/java/app/rcq/android/crypto` | libsignal-android integration, sealed sender, sender keys |
|…
