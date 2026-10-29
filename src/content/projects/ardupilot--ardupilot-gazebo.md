---
repo: "ArduPilot/ardupilot_gazebo"
name: "ardupilot_gazebo"
description: "Plugins and models for vehicle simulation in Gazebo Sim with ArduPilot SITL controllers"
readmeQualityOk: true
url: "https://github.com/ArduPilot/ardupilot_gazebo"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["ardupilot", "gazebo", "simulation", "sitl"]
stars: 238
forks: 260
openIssues: 17
closedIssues: 34
watchers: 14
contributors: 40
recentReleases: 0
createdAt: "2021-10-03T13:49:16Z"
lastCommitAt: "2026-10-29T12:26:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 30
maintainers: ["khancyr", "yesseecity", "vdoom"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dbd57cda2c72c574831028d4554c3077bca4f1dafad42350d813c277d2de320/ArduPilot/ardupilot_gazebo"
---

# ArduPilot Gazebo Plugin

This is the official ArduPilot plugin for [Gazebo](https://gazebosim.org/home).
It replaces the previous
[`ardupilot_gazebo`](https://github.com/khancyr/ardupilot_gazebo)
plugin and provides support for the recent releases of the Gazebo simulator:
[Gazebo Garden](https://gazebosim.org/docs/garden/install), [Gazebo Harmonic (LTS)](https://gazebosim.org/docs/harmonic/install), [Gazebo Ionic](https://gazebosim.org/docs/ionic/install) and [Gazebo Jetty (LTS)](https://gazebosim.org/docs/jetty/install).

It also adds the following features:

- More flexible data exchange between SITL and Gazebo using JSON.
- Additional sensors supported.
- True simulation lockstepping. It is now possible to use GDB to stop
  the Gazebo time for debugging.
- Improved 3D rendering using the `ogre2` rendering engine.

The project comprises a Gazebo plugin to connect to ArduPilot SITL
(Software In The Loop) and some example models and worlds.

## Prerequisites

Gazebo Garden or Harmonic is supported on Ubuntu 22.04 (Jammy).
Harmonic is recommended.
If you are running Ubuntu as a virtual machine you will need at least
Ubuntu 20.04 in order to have the OpenGL support required for…
