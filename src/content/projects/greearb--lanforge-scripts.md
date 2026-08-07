---
repo: "greearb/lanforge-scripts"
name: "lanforge-scripts"
description: "Scripts and other open-source tools to be used with the LANforge software suite."
readmeQualityOk: true
url: "https://github.com/greearb/lanforge-scripts"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 24
forks: 40
openIssues: 0
closedIssues: 5
watchers: 10
contributors: 57
recentReleases: 0
createdAt: "2017-10-06T20:28:37Z"
lastCommitAt: "2026-08-07T05:15:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 70
maintainers: ["Narayana-CT", "Durga-CT", "sivakondri-CT"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3efdeb22e22d15e8be42cfa9e736a7a3efcb4df79231f2a2878e54630be1618/greearb/lanforge-scripts"
---

# LANforge Perl, Python, and Shell Scripts

## Overview

**This repository contains a collection of scripts and Python and Perl-based scripting libraries designed to automate LANforge systems.**

These scripts span a variety of use cases, including automating Chamber View tests, configuring LANforge ports and traffic pairs, and much more.
Scripts will be kept backwards and forwards compatible with LANforge releases as much as possible.

**No additional setup is required to run these scripts on a system with LANforge pre-installed**. On your LANforge system, you can find this repository in the
`/home/lanforge/scripts/` directory. The contents of the directory match the version of LANforge installed on your system (see the
[tagged releases](https://github.com/greearb/lanforge-scripts/tags) for tagged versions of scripts/automation).

As currently implemented, scripts in this repository require the directory structure as present. Many scripts import from and call into each other (primarily Python),
so modifying script location will likely break script assumptions. Things that may break assumptions and prevent script usage include moving the script to another directory.

Please…
