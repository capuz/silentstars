---
repo: "xmarduel/pycut"
name: "pycut"
description: "clone of jscut  in python"
readmeQualityOk: true
url: "https://github.com/xmarduel/pycut"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["cnc", "gcode", "gcode-generation", "gcode-visualizer", "gcode-simulation", "svg"]
stars: 11
forks: 2
openIssues: 4
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2021-05-20T17:42:22Z"
lastCommitAt: "2026-10-23T09:32:18Z"
lastReleaseAt: "2026-10-18T19:33:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 61
maintainers: ["xmarduel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2cfac23cdab997b7d4e7adfb71ab76f46701b6c104ee349994413f21decd43d/xmarduel/pycut"
---

# PyCut

clone of jscut in python

Disclamer: This software is used at the user's own risk. No responsibility is accepted by its creator.

## Why PyCut

With <strong>PyCut</strong>, you do not need to do 3D modelling. SVG files (2D) are <strong>PyCut</strong> input format, and for simple milling tasks it is perfectly OK. Granted, SVG shapes (paths) definition is not so straightforward as one could think, and free software lacks good SVG paths modelling applications. Infact, writing a SVG file with a text editor is sometimes the best way. To generate complex SVG paths, other tools may be used (see Tutorial), and the results may be paste into the hand-written files.

Before starting, please have a look at the tutorial to be sure your SVG input files follow the PyCut requirements (mostly: how to define the view box; shapes must have an unique id in order to be imported in the viewer; take care if paths definitions are closed (Z) or not).

## Usage

start the program from the installation folder

```
> python pycut.py -h
> python pycut.py
> python pycut.py --version
> python pycut.py -p <path_to_project>
> python pycut.py -g <path_to_gcode>   # view an external gcode data
> python…
