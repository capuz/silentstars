---
repo: "c0d3ster/Fractaleyez"
name: "Fractaleyez"
description: "An easy-to-use, fully configurable, realtime music visualizer"
readmeQualityOk: true
url: "https://github.com/c0d3ster/Fractaleyez"
homepage: "https://fractaleyez.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 15
forks: 2
openIssues: 13
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-03-20T02:56:37Z"
lastCommitAt: "2026-11-02T17:57:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["c0d3ster", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e9e33f3226e301b295ca4a026c8851ee2750afd57a5416d0a4f1c97340d8bb7/c0d3ster/Fractaleyez"
---

# Fractaleyez

Fractaleyez is a new way to visualize your music. It stacks mathematical fractals, particle attractors, video and a logo on a single three.js canvas and drives them with your microphone in real time.

The visualizer runs without any music, but it gets much better when your microphone picks up background audio. Audio analysis happens live, so the visuals respond to the beat of whatever is playing around you.

## Controls

- **Arrow keys** control your speed and rotation.
- **Mouse** steers your path of travel.
- **V / F / O / L** toggle the Video, Fractal, Orbit and Logo layers.
- **S** turns the Shockwave effect on and off.

## Layers

What you see is a stack of up to 5 enabled layers, composited back to front. Each layer has an on/off switch (with a fade in and out), an opacity slider and a blend mode. The first-load default has Video, Fractal and Orbit on and Logo off.

| Layer | Hotkey | What it is |
|-------|--------|------------|
| Video | V | Looping video clips (galaxy, earth). Pick clips in the Video section. Clips crossfade as you change them. |
| Fractal | F | A Julia set rendered in a fragment shader, zooming endlessly toward its center. See [The Fractal…
