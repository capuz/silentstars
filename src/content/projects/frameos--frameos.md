---
repo: "FrameOS/frameos"
name: "frameos"
description: "Operating system for single function smart frames"
url: "https://github.com/FrameOS/frameos"
homepage: "https://frameos.net/"
language: "Python"
languages: ["Python", "Nim", "TypeScript"]
languagePcts: [28, 27, 25]
topics: ["framebuffer", "hdmi", "inky", "inkyimpression", "pimoroni", "raspberry-pi", "waveshare", "waveshare-epaper"]
stars: 440
forks: 13
openIssues: 6
closedIssues: 34
watchers: 4
contributors: 7
recentReleases: 10
createdAt: "2023-07-21T22:58:16Z"
lastCommitAt: "2026-06-28T01:36:35Z"
lastReleaseAt: "2026-05-21T23:38:36Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["mariusandra", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89e946416842ed630a2344d2808e0e3b285ab06a0e0c0cccb430a6324ee3864/FrameOS/frameos"
---

# FrameOS

FrameOS is an **operating system for single function smart frames**. 

It's meant to be deployed on a Raspberry Pi, and can be used with a variety of e-ink and traditional displays. It's designed for both screens that update **60 seconds per frame**, and for screens that update **60 frames per second**.

Think smart home calendars, meeting room displays, thermostats, industrial dashboards, public advertisement screens, and more.

To get started:

1. Install the [FrameOS backend](https://frameos.net/guide/backend), a dockerized python app, which is used to deploy apps onto individual frames via SSH.

2. Read the [device hardware guide](https://frameos.net/devices/) for your screen type. Typically you'll just need to connect the display to a Raspberry Pi, install the OS, and make sure it's reachable over the network. 

3. Once connected, deploy our prebuilt scenes, or code your own directly inside the backend.

4. Finally, for a professional look, 3d print a case around your frame.

## Development with Flox

If you use [Flox](https://flox.dev), this repo now ships a checked-in environment. Running `flox activate` bootstraps the core toolchains and installs the repo-local…
