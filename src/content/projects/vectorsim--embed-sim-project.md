---
repo: "vectorsim/embed_sim_project"
name: "embed_sim_project"
description: "frame work  for simulation and code generation"
readmeQualityOk: true
url: "https://github.com/vectorsim/embed_sim_project"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 34
forks: 7
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-02-23T09:05:16Z"
lastCommitAt: "2026-08-01T06:15:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 9
maintainers: ["vectorsim"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1164590963/cd6eece3-0f76-4ecc-ab0c-da915a808d04?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061710Z&X-Amz-Expires=300&X-Amz-Signature=988cc117ddf792ebac5d991a25850b50b8f9c9e61092793370d52a1ee4333c01&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMzMCwibmJmIjoxNzg1NTY1MDMwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.MDqq72R8xroh62juFhO7nSOBtRHFttOXIrWYi0ntK3I"
---

# EmbedSim

**An open-source Python framework for simulation and C code generation targeting embedded control systems.**

EmbedSim is a free, accessible alternative to MATLAB/Simulink, designed for embedded control engineers who need rigorous signal-flow simulation without proprietary toolchain lock-in. Built on a block-diagram paradigm with a clean Python API, it bridges the gap between algorithm development and production C code for MCU targets.

---

## What It Does

EmbedSim lets you build, simulate, and generate embedded C code from the same model — using nothing but Python and open-source tools.

- **Block-diagram simulation** — wire up control blocks using the `>>` operator and simulate with RK4 or Euler integrators
- **Dual Python/C backend** — every block runs in pure Python for rapid prototyping, or against a compiled Cython/C backend for performance and fidelity
- **Automatic C code generation** — emit `embedsim_loop.c` / `embedsim_loop.h` directly from your simulation graph for deployment on embedded targets
- **FMU co-simulation** — integrate FMI 2.0 `.fmu` models as first-class blocks alongside native Python blocks
- **Algebraic loop handling** — DFS-based…
