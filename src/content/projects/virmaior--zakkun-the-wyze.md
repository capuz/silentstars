---
repo: "virmaior/zakkun-the-wyze"
name: "zakkun-the-wyze"
description: " Zakkun (Zaccheus) is our flying squirrel, and Wyze is the camera that watches him. Zakkun-the-wyze is a set of utilities I made for working with the SD card on the Wyze v3 ."
url: "https://github.com/virmaior/zakkun-the-wyze"
language: "JavaScript"
languages: ["JavaScript", "Python", "Shell"]
languagePcts: [47, 23, 22]
topics: ["wyze"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-05-14T02:01:47Z"
lastCommitAt: "2026-05-02T22:29:13Z"
status: "quiet"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 52
undervaluedScore: 38
maintainers: ["virmaior"]
openGraphImageUrl: "https://opengraph.githubassets.com/166c817852618ba5cc65cbc38155bd921c24f10fe9477af28bf9e636b60d7935/virmaior/zakkun-the-wyze"
---

# zakkun-the-wyze

This project has scripts that I've been using to automate video archiving on my wyze v3 camera. 

My wife and I bought a Wyze v3 to figure out what our flying squirrel (Zaccheus) is doing at night and just to keep records of him. The starlight sensor and night vision combined are some awesome features, but the ability to playback video in the application is dismal. Moreover, without subscribing, you're limited to rather short clips. (I haven't used the app in years because I look at the JPEG feeds on page).

# Project Goal

On its simplest level my goal is to automate the process of archiving footage by putting as many steps as possible into automation.

# Prerequisites

This assumes you either have any of the following:
1. wyzehacks running on your WyzeCam [wyzeHacks](https://github.com/HclX/WyzeHacks) and boa for file download.
2. wz_mini_hacks [https://github.com/gtxaspec/wz_mini_hacks/] running
3. Atomcam_tools [https://github.com/mnakada/atomcam_tools] running
4. thingino [https://thingino.com] running

This primarily impacts the downloading of images from the cameras. Processing assumes minutewise files.

# Current Features

As of 2026-04-13, it has the…
