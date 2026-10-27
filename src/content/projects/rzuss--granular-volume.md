---
repo: "Rzuss/granular-volume"
name: "granular-volume"
description: "Quiet Dial (Volume Control: Quiet Dial on Google Play): volume below Android's minimum, and an on-screen volume control for broken volume buttons. Six quiet steps under the hardware floor, down to -30 dB. No ads, no tracking, no internet permission. GPL-3.0."
readmeQualityOk: true
url: "https://github.com/Rzuss/granular-volume"
homepage: "https://granularvolume.com/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "audio", "foreground-service", "kotlin", "overlay", "volume-control", "foss", "no-ads", "open-source", "android-tablet"]
stars: 41
forks: 3
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-26T04:16:48Z"
lastCommitAt: "2026-10-27T12:40:14Z"
lastReleaseAt: "2026-10-22T12:34:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 40
maintainers: ["Rzuss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1280924523/d86490e3-e757-41f2-a9da-7f3320aa9088"
discussionCount: 1
---

# Quiet Dial

**Volume below Android's minimum. A floating control that stays above any app.**

*It also stands in for broken volume buttons: the slider drives normal system volume above the
device-minimum line, in even steps, and keeps going below it.*

*Volume Control: Quiet Dial, an app by Granular Volume.*

**[Get it on Google Play](https://play.google.com/store/apps/details?id=granularvolume.com&referrer=utm_source%3Dgithub%26utm_medium%3Dreadme%26utm_campaign%3Dinstall)**

---

## The problem

On a lot of phones and tablets, the lowest non-mute volume step is still too loud. Not "a little loud": genuinely uncomfortable, next to a sleeping baby, through sensitive in-ear monitors, or in a quiet room at night. Android's own Settings app has no control for this. The volume slider stops where it stops, and there is nothing below it.

This isn't a bug. It's a structural limit in how Android's volume system is built, and it means the fix has to live outside the volume slider entirely, which is what this app does.

### A second problem, same control

Volume keys are among the most-used moving parts on a phone, and they wear out, stiffen, or get held down by a case. Android's…
