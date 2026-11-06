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
lastCommitAt: "2026-11-06T11:23:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 55
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1115695562bf123edcea22f148e9551246d7d2fa64aa50ec752c0ff2c25c812b/md81544/latheControl"
---

# latheControl
Code for controlling a lathe's lead screw (Z-axis) with a stepper motor.

Now also will control the X-axis (cross-slide).

Allows for cutting threads, tapers, and general automated operations.

Intended to be an aid for manual machining, rather than full CNC operation.

## Getting the Code

Just `git clone <repo URL>`. The stepper motor code lives in a separate repository, [stepperControl](https://github.com/md81544/stepperControl), which CMake downloads automatically when you first build (so the first build needs network access). The version used is pinned by `GIT_TAG` in `CMakeLists.txt`.

If you're changing stepperControl at the same time, clone it alongside and build against your local copy instead:

    make STEPPERCONTROL_DIR=../stepperControl

(or `export STEPPERCONTROL_DIR=../stepperControl` in your shell profile on a development machine).

## Dependencies

You'll need to do the following (on deb-based systems) to install required packages:

    sudo apt install cmake libfmt-dev qt6-base-dev

on a Mac, you can use homebrew (if you've got it installed):

    brew install cmake fmt qt

The user interface uses Qt 6 (Widgets), which is available from the…
