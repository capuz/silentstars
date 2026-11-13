---
repo: "Letrange-g/BeamNG-VRS"
name: "BeamNG-VRS"
description: "Foveated VRS  with eye tracking for BeamNG vulkan VR"
readmeQualityOk: true
url: "https://github.com/Letrange-g/BeamNG-VRS"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T01:28:09Z"
lastCommitAt: "2026-11-13T05:41:18Z"
lastReleaseAt: "2026-10-10T15:16:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["Letrange-g", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf8884d8a28e9d3ff43671d679a5a6b9a04eaeac6c5c7aa2c85c16c8ccf501d/Letrange-g/BeamNG-VRS"
---

# BeamNG-VRS

Foveated rendering for **BeamNG.drive VR** (Direct3D 12 or Vulkan), plus edge cropping and a lens-corner mask.
Keep more detail where you look and reduce rendering work around the edges.
Works with a fixed center or supported eye tracking.

**Windows x64 · Release 0.4.3 · built for BeamNG.drive 0.40.** Performance varies by headset, GPU and scene.

## What's new in 0.4.3

### Quad views (experimental, Direct3D 12)

Set `[VR] Mode=quad` in the INI to try a new way of rendering. Your eye only sees fine
detail in a small area around where it looks. Quad views render that area sharp and
everything around it cheaply:

- **Focus view (sharp):** each eye renders only a small window, 35% x 35% of its field
  of view by default. With eye tracking the window follows your gaze; without it, it
  stays in the centre. Because it covers only part of the field of view, it gets the
  game's full pixel density at a fraction of the pixel count.
- **Wide view (cheap):** each eye also gets one wide view that covers its whole field of
  view at low resolution (a quarter of your headset's per-eye width and height by
  default, `WideResolution=0.25`) and lower detail. Live reflections,…
