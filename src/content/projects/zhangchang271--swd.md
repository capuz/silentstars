---
repo: "zhangchang271/SWD"
name: "SWD"
description: "wave-equation inversion"
readmeQualityOk: true
url: "https://github.com/zhangchang271/SWD"
language: "MATLAB"
languages: ["MATLAB", "C++"]
languagePcts: [75, 25]
stars: 40
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-30T06:28:56Z"
lastCommitAt: "2026-09-23T08:47:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["zhangchang271"]
openGraphImageUrl: "https://opengraph.githubassets.com/158bab3ae0f1f6da5eabedda129396ac4663f8077743b39ab70644d6d53b4767/zhangchang271/SWD"
---

# Skeletonized Wave-Equation Dispersion Spectrum Inversion (SWD)

## Description
Skeletonized Wave-Equation Dispersion Spectrum Inversion (SWD), is a cutting-edge method in geophysical research aimed at obtaining a robust and reliable near-surface S-wave velocity structure. This method leverages a skeletal inversion framework that avoids traditional full waveform inversion's susceptibility to cycle-skipping by implementing a smooth gradient approximation between the dispersion spectrum and the misfit function. This is achieved through the SoftMax approximation.

The technique innovatively derives the gradient of the misfit function with respect to the velocity model utilizing the chain rule and adjoint state method. This integration allows SWD to couple with the wave equation, enabling precise and stable S-wave velocity inversions. Unlike conventional methods, SWD does not depend on a layered assumption, thus enhancing lateral resolution significantly.

SWD capitalizes on the concept of skeletonizing complex surface wave arrivals into simpler forms—specifically, picked dispersion curves in the phase-velocity and frequency domains, akin to wave-equation traveltime tomography. These…
