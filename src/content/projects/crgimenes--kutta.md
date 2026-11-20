---
repo: "crgimenes/kutta"
name: "kutta"
description: "A 2D wind tunnel for aeromodelers and anyone who likes watching air misbehave"
readmeQualityOk: true
url: "https://github.com/crgimenes/kutta"
homepage: "https://crgimenes.github.io/kutta/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["go", "aeromodelling", "ebitengine", "aerodynamics", "airfoil", "educational", "fluid-simulation", "golang", "lattice-boltzmann", "simulation"]
stars: 148
forks: 23
openIssues: 0
closedIssues: 22
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-07-02T12:52:26Z"
lastCommitAt: "2026-11-20T11:57:15Z"
lastReleaseAt: "2026-07-31T06:57:25Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 19
maintainers: ["crgimenes", "johncohn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1287173180/e366870b-87df-49ea-a11c-0eee0d178356"
discussionCount: 1
---

# kutta - 2D wind tunnel

A 2D wind tunnel for aeromodelers and anyone who likes watching air misbehave.
It streams a flow past an airfoil and draws the speed field, the vorticity, smoke
streaklines and the lift/drag vectors while you turn the angle of attack. You can
also draw your own shape, cut a wing into wing + flap, animate the control
surfaces, and watch the wake fall apart when you push the angle too far.

It is **qualitative, not validated CFD**. Lattice units stand in for physical
ones, so it gets the *shape* of the flow right (stagnation point, wake, suction
over the top, separation as the angle grows) and the actual numbers wrong. Use it
for intuition and for a demo that looks good on a projector, not for sizing a real
wing.

Written in Go with [Ebitengine](https://ebitengine.org). One executable, nothing
to install alongside it.

## Try it in your browser

**[Open the wind tunnel →](https://crgimenes.github.io/kutta/)**

The whole simulator runs as WebAssembly, with nothing to install. A browser tab
cannot reach your files, so opening and saving `.afoil` scenes, importing SVG and
the native menu are desktop only.
