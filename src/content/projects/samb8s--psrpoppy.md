---
repo: "samb8s/PsrPopPy"
name: "PsrPopPy"
description: "Python implementation of PSRPOP, designed to be run from the command line or from Python scripts/interpreter"
readmeQualityOk: true
url: "https://github.com/samb8s/PsrPopPy"
language: "Fortran"
languages: ["Fortran", "Python"]
languagePcts: [54, 44]
stars: 18
forks: 34
openIssues: 2
closedIssues: 8
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2012-05-01T18:24:57Z"
lastCommitAt: "2026-08-21T04:12:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["tycohen"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd7e292b949dc7cbf4c731e69ec8925ac4c4044dc7e4faa807df5f12c5a5a69f/samb8s/PsrPopPy"
---

PsrPopPy
========

(For full documentation, see https://samb8s.github.io/PsrPopPy/ or manual.pdf)

Python implementation of PSRPOP (which was written by D Lorimer).
Several of the old models from that (e.g. NE2001) are still included in their native fortran, since re-writing those is beyond the scope of this work. Currently, only a rudimentary makefile is included. This is something that needs work from a willing volunteer!

The main external requirements are [matplotlib](https://github.com/samb8s/PsrPopPy/blob/HEAD/matplotlib.sourceforge.net) and [wxPython](http://wxpython.org/), which are used for the visualization stuff. It has a very useful API for making simple GUIs, as well as making beautiful plots. I've had difficulty compiliing wxPython from scratch on more recent versions of Mac OS X, but it should be straightforward to install via macports or similar.

Thanks
------

Many thanks to recent suggestions from Manjari Bagchi and Anirban Chakraborty. Their work https://arxiv.org/abs/2012.13243 used PsrPopPy, and they found some issues which I've been happy to correct.

If you spot any issues, please either let me know, or make a pull request - I'm not actively developing the…
