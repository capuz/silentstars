---
repo: "Rzuss/granular-volume"
name: "granular-volume"
description: "Volume below Android's minimum. A floating overlay for finer attenuation than the hardware allows. Free, no ads, no tracking, GPL-3.0."
readmeQualityOk: true
url: "https://github.com/Rzuss/granular-volume"
homepage: "https://rzuss.github.io/granular-volume/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "audio", "foreground-service", "kotlin", "overlay", "volume-control", "f-droid", "foss", "no-ads", "open-source"]
stars: 22
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-06-26T04:16:48Z"
lastCommitAt: "2026-08-04T06:10:59Z"
lastReleaseAt: "2026-07-31T06:22:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 49
maintainers: ["Rzuss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1280924523/d86490e3-e757-41f2-a9da-7f3320aa9088?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061339Z&X-Amz-Expires=300&X-Amz-Signature=6bcc076a72663922e9220356944dbc9d383416dfb9d9ccaeb0a1942a5f132d45&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxOSwibmJmIjoxNzg1ODI0MDE5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.MgEjIZIyG7pi8mVqyFj7Z2nFp-KTsU3IxZeZyJ9BGLM"
discussionCount: 1
---

# Granular Volume

**Volume below Android's minimum. A floating control that stays above any app.**

*Listed on Google Play as "Volume Control: Quiet Dial". Same app, same developer.*

</div>

---

## The problem

On a lot of phones and tablets, the lowest non-mute volume step is still too loud. Not "a little loud": genuinely uncomfortable, next to a sleeping baby, through sensitive in-ear monitors, or in a quiet room at night. Android's own Settings app has no control for this. The volume slider stops where it stops, and there is nothing below it.

This isn't a bug. It's a structural limit in how Android's volume system is built, and it means the fix has to live outside the volume slider entirely, which is what this app does.

## How Android volume actually works

Android does not represent volume as a continuous, calibrated loudness scale. Each audio stream (`STREAM_MUSIC`, `STREAM_RING`, `STREAM_NOTIFICATION`, and so on) has a fixed number of discrete steps, set by `AudioManager.getStreamMaxVolume()`, commonly somewhere around 15 steps for media, though this varies by OEM and device. The physical volume buttons and the on-screen slider move you between these steps by calling…
