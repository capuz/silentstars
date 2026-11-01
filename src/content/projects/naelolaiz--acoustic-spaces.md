---
repo: "naelolaiz/acoustic-spaces"
name: "acoustic-spaces"
description: "Testing AI generated code for generating filters simulating acoustic spaces (as CATT/EASE/..)"
readmeQualityOk: true
url: "https://github.com/naelolaiz/acoustic-spaces"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["acoustic-analysis", "acoustic-model", "acoustic-simulation", "acoustics", "ambisonics", "audio-dsp", "auralization", "binaural", "convolution-reverb", "hrtf"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-13T14:01:36Z"
lastCommitAt: "2026-11-01T10:43:45Z"
lastReleaseAt: "2026-10-28T18:58:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["naelolaiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca6d7752b4d840f74f45a13d5915b9bc96d31c01b3fda5d9c275096560f841d9/naelolaiz/acoustic-spaces"
---

# acoustic_spaces

Open-source room acoustics simulator and auralisation toolkit, in the spirit of
CATT-Acoustic and ODEON: load a 3D model of a space, place sources and listeners,
compute impulse responses, and listen to the result in binaural, Ambisonics or
loudspeaker formats.

**Status: 4.0** (see the [roadmap](https://github.com/naelolaiz/acoustic-spaces/blob/HEAD/docs/roadmap.md) and the
[known issues](https://github.com/naelolaiz/acoustic-spaces/blob/HEAD/docs/validation.md#known-issues)).

## What it does

- **Rooms** from CAD and BIM models (OBJ, DXF, glTF, STL, IFC, Collada, SketchUp), from
  their dimensions or from a floor plan, with a material database and the material
  libraries of CATT-Acoustic and ODEON, walls and doors between rooms, audience seating,
  and directional, line, surface and array sources; a leak finder shows where a model
  is open: [scene files](https://github.com/naelolaiz/acoustic-spaces/blob/HEAD/docs/scenes.md).
- **Simulation**, in octave or third-octave bands: ray-traced early reflections with
  edge diffraction, added in pressure at low frequencies, a stochastic late tail and,
  for the lowest bands, a wave solver, both on the CPU or a GPU;…
