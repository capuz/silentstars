---
repo: "elvis-epx/sdr"
name: "sdr"
description: "Random collection of SDR and modulation scripts"
readmeQualityOk: true
url: "https://github.com/elvis-epx/sdr"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 41
forks: 11
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-01-15T00:59:22Z"
lastCommitAt: "2026-10-25T02:46:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 31
maintainers: ["elvis-epx"]
openGraphImageUrl: "https://opengraph.githubassets.com/90304bfa61b55b3b13d6e08a457433f4395f376780c4129732462441e4d36205/elvis-epx/sdr"
---

# SDR and Modulation scripts

This repository is a loose collection of SDR, analog and digital modulation
scripts.

## Main folder

Contains SDR stuff. Highlights:

fm1.py: FM mono receiver. Check the scripts 'python\_fm\_mono' and 'python\_fm\_rt'
for usage.

fm1s.py: FM stereo receiver. Client scripts are 'python\_fm\_stereo' and
'python\_fm\_rt\_stereo'.

fastfm.pyx: FM stereo decoder with PLL written in Cython. Used by fm1s.py in
fast mode. Compile the module with 'make' and run fm1s.py with -o if your
machine can't decode stereo FM in realtime.

fm\_rds.py: FM RDS decoder. Reads the FM baseband produced by fm1.py and prints
the decoded RDS data: station ID (PI), program type (PTY), station name (PS),
RadioText and clock time. Use -d for debug output. Client scripts are
'python\_fm\_rt\_rds' (realtime) and 'python\_fm\_rds' (records a sample,
saves the baseband to teste\_rds.raw and decodes it).

filters.py: Pure Python implementations of common filters: low-band, high-band,
passband, FM stereo deemphasis, and decimator.

power.py/power: Show signal strength of band using RTL-SDR. Note that unit is
dbFS, which is relative and not relatable to absolute units like dBmV/m or dBm.…
