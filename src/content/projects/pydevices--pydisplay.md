---
repo: "PyDevices/pydisplay"
name: "pydisplay"
description: "Unified Display and Events Subsytem for  MicroPython, CircuitPython and Python"
readmeQualityOk: true
url: "https://github.com/PyDevices/pydisplay"
homepage: "https://pydevices.github.io/pydisplay"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["display", "drivers", "encoder", "lvgl", "micropython", "touchscreen", "circuitpython", "python", "library"]
stars: 51
forks: 11
openIssues: 1
closedIssues: 8
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2023-11-10T20:46:28Z"
lastCommitAt: "2026-07-25T06:01:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["bdbarnett", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e801dd6675bdc8bbfd947148334cd1f2ef2585bac43de23cadfaf4ac8c79e08/PyDevices/pydisplay"
discussionCount: 7
---

<h1 align="center">PyDisplay</h1>

<h3 align="center">Write your graphics code once. Run it <em>everywhere</em> Python runs.</h3>

  <b>Cross-platform display, input-event, and timer drivers for MicroPython, CircuitPython, and CPython.</b>
</p>

</p>

|  |  |
|:--:|:--:|
| @peterhinch's `active.py` | @russhughes's `tiny_toasters.py` |

PyDisplay is the portable foundation layer for Python graphics. It gives you **display drivers, unified input events, drawing primitives, fonts, palettes, and cross-platform timers** behind a single API — so the same drawing code runs unchanged on a $4 microcontroller, on your desktop, in a web browser, and even inside a Jupyter Notebook.

### It really does run everywhere

- **MicroPython** — on microcontrollers, on Unix, on Windows, in the browser via [PyScript](https://pyscript.net/), and in the [Wokwi](https://wokwi.com) online simulator.
- **CircuitPython** — on microcontrollers and on Unix.
- **CPython** — on Unix, on Windows, and in **Jupyter Notebook**.

Develop and debug on your laptop with a mouse, then deploy the *same* code to a touchscreen on an ESP32 — no display rewrite, no input rewrite, no timer rewrite.

### Build real GUIs on top…
