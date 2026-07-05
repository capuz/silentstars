---
repo: "AlexAsplund/Vanchor"
name: "Vanchor"
description: "An open source trolling motor. Features Hold heading, Hold Position, AutoPilot (NMEA APB & GPX). It still needs a lot of work but it's functional."
readmeQualityOk: true
url: "https://github.com/AlexAsplund/Vanchor"
homepage: "https://vanchor.org"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 20]
topics: ["marine", "fishing", "nmea", "autopilot", "navigation"]
stars: 107
forks: 25
openIssues: 2
closedIssues: 13
watchers: 23
contributors: 3
recentReleases: 6
createdAt: "2021-09-16T06:31:37Z"
lastCommitAt: "2026-07-05T20:12:10Z"
lastReleaseAt: "2026-07-05T18:54:18Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/407049102/6de2fadc-5c1e-4290-9ece-a1d7d38eba1a"
discussionCount: 12
---

# Vanchor-NG

> **v1.0-alpha** — the start of a new major version. Vanchor-NG is a ground-up,
> software-first rewrite that **replaces the original [Vanchor](https://github.com/AlexAsplund/Vanchor) (0.1-alpha)**.

## What it is

Vanchor-NG turns a cheap **trolling motor** into a GPS-guided autopilot and
anchor system. Drop a **virtual anchor** to hold a spot, **hold a heading** like
a real autopilot, or tap the map and say **"take me here"** — the boat plans a
water-only route around islands and steers itself there, correcting for wind and
current drift along the way.

The headline is that **it runs entirely in simulation, with no hardware at all.**
A built-in physics simulator and simulated NMEA sensors close the control loop on
your laptop, so the whole navigation/control stack can be developed and tested
without a boat, a Pi, or a single wire. When you do have hardware, the same code
drives it — only the device construction changes.

It is a **PWA** (Progressive Web App): installable, works offline, and served by
the boat's own Raspberry Pi.

> **This is 1.0-alpha** — a from-scratch rewrite that supersedes the 0.1-alpha project.
> See…
