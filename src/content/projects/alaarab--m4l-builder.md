---
repo: "alaarab/m4l-builder"
name: "m4l-builder"
description: "Programmatically build Max for Live (.amxd) devices in Python"
url: "https://github.com/alaarab/m4l-builder"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T04:09:58Z"
lastCommitAt: "2026-06-26T23:40:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["alaarab", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ac228035d1823270508c90e550927764adf0009186ab37a6136ea69be2cb08c/alaarab/m4l-builder"
---

# m4l-builder

Build Max for Live devices in Python. Write scripts, emit `.amxd` files straight to your Ableton User Library. No Max GUI required. Everything is version-controllable, scriptable, and reproducible. Zero runtime dependencies -- pure stdlib.

## Workspace boundaries

`m4l-builder` is the library/tooling repo. The active flagship plugin products
and their per-plugin workspaces live in the sibling `../Max4LivePlugins` repo
on this machine (or `MAX4LIVEPLUGINS_ROOT` if you have it checked out
elsewhere).

This repo intentionally does not ship in-repo plugin/device scripts. If you are
building or revising a real plugin, start in
`Max4LivePlugins/plugins/<plugin>/`. Migrated legacy device scripts now live in
`../Max4LivePlugins/legacy_examples/`.

## Install

```bash
pip install m4l-builder
```

## Quick start

```python
from m4l_builder import AudioEffect, WARM, device_output_path

device = AudioEffect("My Gain", width=150, height=110, theme=WARM)

device.add_panel("bg", [0, 0, 150, 110])
device.add_dial("gain", "Gain", [10, 6, 50, 90],
                min_val=-70.0, max_val=6.0, initial=0.0,
                unitstyle=4, annotation_name="Gain")

device.add_newobj("mul_l",…
