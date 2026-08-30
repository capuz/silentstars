---
repo: "chrispurusha/G2-Edit"
name: "G2-Edit"
description: "Editor for the Nord G2 modular synthesiser"
readmeQualityOk: true
url: "https://github.com/chrispurusha/G2-Edit"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 18
forks: 4
openIssues: 1
closedIssues: 4
watchers: 10
contributors: 4
recentReleases: 5
createdAt: "2024-11-04T14:48:37Z"
lastCommitAt: "2026-08-30T09:24:59Z"
lastReleaseAt: "2026-08-24T14:21:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 67
maintainers: ["chrispurusha"]
openGraphImageUrl: "https://opengraph.githubassets.com/209faf4eb13d26664e11c6fbb24a7c30c20bd8a22ac46b00f1cf04afb85a4a40/chrispurusha/G2-Edit"
---

# G2-Edit

A macOS GUI editor for the Nord G2 modular synthesizer. Work in progress.

Binary beta releases: https://github.com/chrispurusha/G2-Edit/releases

If anyone is interested in helping, please drop me a line.

Since I'm now incurring costs (I recently started using LLMs) which would be good to at least cover, I now have a Buy Me a Coffee page:

https://buymeacoffee.com/chrispurusha

Thanks for any donations!

## Installing a release

Download the `.dmg` from the [releases page](https://github.com/chrispurusha/G2-Edit/releases). It
contains two things: the editor, and an optional VST3 plug-in. The same instructions travel inside
the `.dmg` as `Read Me First.txt`.

Requirements: macOS 11.5 or later, Apple Silicon or Intel.

### The editor

1. Drag `G2 Editor.app` onto the Applications folder shown in the disk image window.
2. Clear the quarantine flag — **do this after step 1**, because the command refers to the app in
   Applications:

```
xattr -dr com.apple.quarantine "/Applications/G2 Editor.app"
```

There is no paid Apple Developer membership behind this project, so the app is **not notarized**.
macOS blocks the first launch and may claim the app is damaged — it isn't;…
