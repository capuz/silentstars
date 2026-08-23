---
repo: "PyDevices/pydevices-examples"
name: "pydevices-examples"
description: "Examples, integration guides, and an installable PyScript gallery for the PyDevices driver stack."
readmeQualityOk: true
url: "https://github.com/PyDevices/pydevices-examples"
homepage: "https://pydevices.github.io/pydevices-examples/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["display", "lvgl", "micropython", "circuitpython", "audio", "cpython", "examples", "gallery", "pydevices", "pyscript"]
stars: 52
forks: 11
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2023-11-10T20:46:28Z"
lastCommitAt: "2026-08-23T04:08:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["bdbarnett"]
openGraphImageUrl: "https://opengraph.githubassets.com/329efe084d403efeadad8aa307b1ba106141baa42d24045521a00fe6ed753cff/PyDevices/pydevices-examples"
discussionCount: 7
---

<h1 align="center">PyDevices Examples</h1>

<h3 align="center">See the portable PyDevices driver stack in action.</h3>

</p>

|  |  |
|:--:|:--:|
| `paint.py` | `tiny_toasters.py` |

This repository is the examples, integration documentation, and browser gallery
for the PyDevices driver ecosystem. The reusable product source lives in
**[pydevices](https://github.com/PyDevices/pydevices)**:

- `displaydev` and `audiodev` provide portable display and audio interfaces.
- `events`, `keys`, and `multimer` provide shared event, key, and timing primitives.
- `appdev` is an optional application traffic controller for non-LVGL apps.
- `board_configs`, `board_peripherals`, and hardware drivers connect those interfaces
  to real boards and desktop/browser hosts.

Those libraries are designed to work across MicroPython, CircuitPython, and
CPython on microcontrollers, Linux, Windows, Android, browsers, and notebooks.
This repo demonstrates that portability; it is not the package source of truth.

> **Alpha quality.** The organization is being prepared for its first external
> users, so names and APIs may still evolve.

## Try it

The fastest route is the interactive
**[PyScript…
