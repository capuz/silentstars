---
repo: "Computershik73/megler-w10m"
name: "megler-w10m"
description: "Megler: Android apps on Windows 10 Mobile - native ARM code, Google Play, Chromium WebView and drawing on the GPU. Not an emulator."
readmeQualityOk: true
url: "https://github.com/Computershik73/megler-w10m"
language: "Java"
languages: ["Java", "C"]
languagePcts: [67, 24]
stars: 30
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-11-01T21:15:08Z"
lastCommitAt: "2026-11-05T08:05:09Z"
lastReleaseAt: "2026-11-03T00:45:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 35
maintainers: ["Computershik73"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2992a2c85c91e47915175e28c2291a2696645045a64092053f73d475b0a771d/Computershik73/megler-w10m"
---

# Megler

**Android apps on Windows 10 Mobile.** Megler runs an Android app's own code directly on
the phone's ARM processor, inside an ordinary Windows app. Nothing is emulated and no
Android system boots: Megler stands in for Android around the app -- its linker and C
library, its Java runtime and framework, its graphics, its sound, its Google services --
and answers each call with Windows' own.

It runs on the Windows 10 Mobile builds phones have today (1703, 10.0.15063, and later;
developed on an HP Elite x3, 10.0.15254). [docs/STATUS.md](https://github.com/Computershik73/megler-w10m/blob/HEAD/docs/STATUS.md) says exactly
what has been seen working and where; [docs/ARCHITECTURE.md](https://github.com/Computershik73/megler-w10m/blob/HEAD/docs/ARCHITECTURE.md) and
[docs/JAVA.md](https://github.com/Computershik73/megler-w10m/blob/HEAD/docs/JAVA.md) say how it works.

**Download: [the latest release](https://github.com/Computershik73/megler-w10m/releases/latest).**
Its `Megler_<version>_ARM.appx` has everything a phone needs, Google Play Store, Google
Play services and microG included; install `Megler.cer` from the same page first. The
release notes say how to install it.

## What…
