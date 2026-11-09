---
repo: "tachsin/photonoxide"
name: "photonoxide"
description: "Light meets Rust. Photonics design and simulation with a live desktop studio, a Rust library and Python bindings: mode solvers, FDFD, FDTD, inverse design, circuits and fabrication flows. Open to everyone."
readmeQualityOk: true
url: "https://github.com/tachsin/photonoxide"
homepage: "https://tachsin.gr/projects/photonoxide"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["eigenmode-solver", "electromagnetics", "fdfd", "fdtd", "integrated-photonics", "mode-solver", "optics", "photonics", "rust", "simulation"]
stars: 11
forks: 4
openIssues: 8
closedIssues: 116
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-01T10:28:30Z"
lastCommitAt: "2026-11-09T11:59:25Z"
lastReleaseAt: "2026-10-05T14:26:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["tachsin", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1399747346/3fb3062f-ac4d-4542-a7e7-a383290bf98d"
discussionCount: 1
---

**Light meets Rust. Photonics design and simulation with a live desktop studio, a Rust library and Python bindings: mode solvers, FDFD, FDTD, inverse design, circuits and fabrication flows. Open to everyone.**

photonoxide is software for designing and simulating photonic devices and circuits: a desktop
studio that shows every run live, a Rust library and Python bindings, all running the same
solvers. It computes materials, waveguide modes, fields and spectra by FDFD and FDTD on the CPU
and GPU, components and circuits, and active and nonlinear devices, and it gives the fabrication
flow that would make a design. Adjoint gradients and optimization examples work today; inverse
design is planned for 0.7. The methods behind the code are written down: the methods pages
derive each solver from the papers it implements; the Academy, written lesson by lesson, teaches
devices and numerical methods at three depths with charts the library computes; the fabrication
flows show step by step how a design would be made, every stated process capability with its
source. Each method is checked against an analytic solution or a published result in a
[validation…
