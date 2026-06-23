---
repo: "simondlevy/Hackflight"
name: "Hackflight"
description: "Minimalist flight-control toolkit for makers"
url: "https://github.com/simondlevy/Hackflight"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 328
forks: 84
openIssues: 0
closedIssues: 194
watchers: 30
contributors: 20
recentReleases: 0
createdAt: "2015-12-31T02:19:56Z"
lastCommitAt: "2026-06-23T23:29:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 39
maintainers: ["simondlevy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b3f5d265aba46c9f0d095d4a0f5aea178c9cfa1449cf47c1196420a34920cd4/simondlevy/Hackflight"
---

</p>

# Intro

Hackflight is a minimalist software toolkit for building multirotor flight
controllers and simulators.  It is geared toward people like me who want to
tinker with flight-control firmware, and use it to teach students about ideas
like
[state estimation](https://simondlevy.github.io/ekf-tutorial)
and
[PID control](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller).
<b>If you are in the 99% percent of
users who just want to get your vehicle flying without getting into firmware
hacking, I recommend [Betaflight](http://betaflight.com/)</b> (great for
getting started when you're on a budget)
<b>the [Ardupilot](http://copter.ardupilot.org) system</b> (for
sophisticated mission planning with waypoint navigation and the like), or
the <b>[Crazyflie](https://www.bitcraze.io/products/old-products/crazyflie-2-1/)</b>
platform, for a safe, inexpensive introduction to quadcopters as a research
platform.   In addition to big user communities and loads of great features,
these platforms have safety mechanisms that Hackflight lacks, which will help
avoid injury to you and damage to your vehicle.

# Design principles

Hackflight attempts to…
