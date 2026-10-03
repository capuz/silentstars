---
repo: "First-Order-RoboCup-SSL/Utama-Core"
name: "Utama-Core"
description: "First Order Robotics Core RoboCup SSL Software Stack"
readmeQualityOk: true
url: "https://github.com/First-Order-RoboCup-SSL/Utama-Core"
homepage: "https://ssl.robocup.org/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["football", "robocup", "robocup-ssl", "robotics", "robotics-competition", "imperial", "imperial-college", "imperial-college-london"]
stars: 10
forks: 1
openIssues: 8
closedIssues: 10
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2024-10-30T12:58:44Z"
lastCommitAt: "2026-10-03T09:22:12Z"
lastReleaseAt: "2025-11-05T13:08:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 72
maintainers: ["isaac0804", "utama-release-manager[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5644209d667191b2655442792fada5a3c48b6055fa17c82c4f1f80632ac619f9/First-Order-RoboCup-SSL/Utama-Core"
---

# Utama Core
First Order Robotics core software stack for [RoboCup SSL](https://ssl.robocup.org/), an international league where teams build autonomous robotic teams to play football competitively.

## Table of Contents
- [Setup Utama](#setup-utama)
- [Repository Guide](#repository-guide)
- [Setup grSim](#setup-grsim)
- [Setup AutoReferee](#setup-autoreferee)
- [Setup SSL Vision for Real Testing](#setup-ssl-vision-for-real-testing)
- [Field Guide](#field-guide)
- [System Design](#system-design)
- [Milestones](#milestones)

## Setup Utama

1. Install `pixi` package manager with `curl -fsSL https://pixi.sh/install.sh | sh` or click here for Windows installation [Pixi installation](https://pixi.sh/latest/#__tabbed_1_1) 
1. Restart or create a new terminal 
1. With pixi: just run `pixi install` in the base folder and you're all setup.
1. Note that this also installs all modules with `__init__.py` (so you need to run it again when you add an `__init__.py`)
1. In order to go into the `pixi` venv, run `pixi shell`. You can also run any of the tasks in the `pixi.toml` without first being in a pixi shell. See [Pixi Tasks](#pixi-tasks).
1. Finally, run `pixi run precommit-install`. This…
