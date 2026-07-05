---
repo: "grubertw/mandelbrot_scout"
name: "mandelbrot_scout"
description: "GPU renderer for the Mandelbrot Fractal using Rust's Iced GUI library and a CPU resident engine for scouting quality reference orbits for per-pixel GPU perturbance computations."
readmeQualityOk: true
url: "https://github.com/grubertw/mandelbrot_scout"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2017-04-27T04:46:01Z"
lastCommitAt: "2026-07-05T20:54:50Z"
lastReleaseAt: "2026-06-09T03:10:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 59
maintainers: ["grubertw"]
openGraphImageUrl: "https://opengraph.githubassets.com/249304f8961d5db8bd9090fb44eb744fd35a5444e8090acbeea5a734311363f3/grubertw/mandelbrot_scout"
---

# Mandelbrot Scout
Renders the Mandelbrot Set on the GPU using Rusts's WGPU library and WGSL shaders, and Iced as the GUI overlay. Leverages perturbation theory to overcome the GPU's float 32 precision limitation, and instead discovers 'quality' reference orbits which are computed on the CPU in high precision. While working Mandelbrot renderers have demonstrated that perturbation can work well for almost any reference orbit as long as it is 'in the neighborhood' (of pixels being rendered by the GPU), the 'Scout' component tries to do better, by leveraging GPU feedback to pick complex-C locations that demonstrate late escape (i.e. high iteration counts) and use these locations as 'seeds' to span new (and better) reference orbits. 

What makes these reference orbits better? Simply stated, orbits with a higher iteration count (with respect to current GPU pixels), are less likely to cause 'perturbation glitches'. And while there are techniques to correct these glitches when they are detected, because low-precision math is being used, this presents more opportunity for error to accumulate, which distorts the image and makes it fuzzy, and thus best avoided, if possible! 

As a hobby…
