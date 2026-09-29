---
repo: "pyobs/pyobs-core"
name: "pyobs-core"
description: "Core packages for pyobs"
readmeQualityOk: true
url: "https://github.com/pyobs/pyobs-core"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 4
openIssues: 11
closedIssues: 166
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2019-03-07T13:41:27Z"
lastCommitAt: "2026-09-29T08:11:22Z"
lastReleaseAt: "2021-11-03T12:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 71
maintainers: ["thusser", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33baaf94a4eb53bbacb0ad052778cf2db8ea89bf47f7614e19f487e0104c1455/pyobs/pyobs-core"
---

pyobs
=====

http://www.pyobs.org/

Quick start
-----------

Create a directory and a virtual environment:

    mkdir test
    cd test
    python3 -m venv venv

Activate environment and install pyobs-core:

    source venv/bin/activate
    pip3 install pyobs-core

Create a test configuration test.yaml:

    class: pyobs.modules.test.StandAlone
    message: Hello world
    interval: 10

And run it:

    pyobs test.yaml

Optional extras
----------------
A few features require additional dependencies that aren't installed by default:

    pip3 install "pyobs-core[full]"

adds support for things like INDI/telegram/matrix notifications, image processing (photutils, ccdproc, sep) and
a few other optional integrations.

    pip3 install "pyobs-core[gui]"

adds the PySide6/qfitswidget-based Qt widgets used by the camera GUIs shipped with the various `pyobs-*` camera
modules (e.g. `pyobs-asi`, `pyobs-qhyccd`).

CLI tools
---------
Installing *pyobs-core* provides three console scripts:

* `pyobs` runs a single module configuration in the foreground.
* `pyobsd` runs and manages one or more module configurations as background daemons.
* `pyobsw` is the Windows equivalent of `pyobs`.…
