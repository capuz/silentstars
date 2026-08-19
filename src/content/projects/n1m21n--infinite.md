---
repo: "n1m21n/Infinite"
name: "Infinite"
description: "Node-based audiovisual modular workstation for macOS — real-time GPU video compositing, procedural 3D geometry & physics, modular synths, DSP effects, and AU/VST3 plugin hosting with cross-domain modulation and Syphon I/O."
readmeQualityOk: true
url: "https://github.com/n1m21n/Infinite"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-06T16:24:26Z"
lastCommitAt: "2026-08-19T04:07:52Z"
lastReleaseAt: "2026-08-16T13:15:46Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["n1m21n", "namansoniii"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa1084d5b47712db67f59f87141b91a7b986143e1e99fbb49cd5b59ed1919894/n1m21n/Infinite"
---

# Infinite

A unified node-based audiovisual modular workstation for macOS. Real-time GPU image and video compositing, procedural 3D geometry and simulation, and a full modular synthesizer and DSP rack with AU and VST3 plugin hosting — all interconnected through a universal modulation graph.

Architecturally it is a descendant of [BespokeSynth](https://github.com/BespokeSynth/BespokeSynth)'s module system — a registry of node types, typed cables, and a pull-based cook-once-per-frame DAG — extended across GPU textures, procedural geometry, and real-time audio buffers.

---

## Features Overview

**160+ node types across comprehensive creative domains:**

| Category | Description & Nodes |
|---|---|
| **Source** | **Image**, **Video** (hardware-accelerated AVFoundation), **Syphon In** (zero-copy real-time GPU video receiver from OBS, Resolume, TouchDesigner, etc.), **Shape** (10 SDF primitives), **Noise** (6 kinds: Value, Perlin, Voronoi, Ridged, Simplex, White), **Ramp** (5 gradient types: Linear, Radial, Angle, Diamond, Box), **Texture** (Voronoi, Brick, Magic, Wave, Musgrave), **Draw** (paintable canvas with 6 procedural brushes, eraser, and transport-synced stroke recording),…
