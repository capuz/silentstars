---
repo: "md81544/latheControl"
name: "latheControl"
description: "Code for controlling a lathe with stepper motors as an aid to manual machining, as opposed to full CNC"
readmeQualityOk: true
url: "https://github.com/md81544/latheControl"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-07-15T08:07:36Z"
lastCommitAt: "2026-11-13T11:28:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 76
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/99e44aa12b49ea816e2c498931d6c796eb6e27c55bf71bfcda39186274a469a4/md81544/latheControl"
---

# latheControl
Code for controlling a lathe's lead screw (Z-axis) with a stepper motor.

Now also will control the X-axis (cross-slide).

Allows for cutting threads, tapers, and general automated operations.

Intended to be an aid for manual machining, rather than full CNC operation.

## Getting the Code

Just `git clone <repo URL>`. Everything is in this repository: the stepper motor code (`steppermotor.*`, and the GPIO in `igpio.h`, `gpio.*` and `mockgpio.h`) used to be a separate library, [stepperControl](https://github.com/md81544/stepperControl), which was moved in at its v1.5.1, once the electronicRotaryTable program (its only other user) was replaced by gear cutting mode. That repository is kept for its history.

## Dependencies

You'll need to do the following (on deb-based systems) to install required packages:

    sudo apt install cmake libfmt-dev qt6-base-dev

on a Mac, you can use homebrew (if you've got it installed):

    brew install cmake fmt qt

The user interface uses Qt 6 (Widgets), which is available from the standard repositories on Raspberry Pi OS Bookworm or later.

## Building

To make a binary to run on non-Pi hardware, just type `make`. This mocks out…
