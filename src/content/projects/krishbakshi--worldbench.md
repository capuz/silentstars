---
repo: "KrishBakshi/worldbench"
name: "worldbench"
description: "Testing llms on the generation of structured, living natural worlds."
readmeQualityOk: true
url: "https://github.com/KrishBakshi/worldbench"
homepage: "https://worldbench.krishbakshi.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [71]
topics: ["ai", "benchmark", "llm-evaluation", "minecraft", "threejs", "voxel-terrain"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-14T07:22:18Z"
lastCommitAt: "2026-10-29T05:50:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["KrishBakshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/778c8c30895a3a2109fa96c4bce75711367bf92956c37070e846de37e0975fc3/KrishBakshi/worldbench"
---

# WorldBench

**Evaluating LLMs on Three.js Voxel World Generation**

*A benchmark for 3D world generation in Three.js: can a language model build a living world from one description?*

[**Paper**](https://arxiv.org/abs/2610.10622) ·
[**Website**](https://worldbench.krishbakshi.com) ·
[**Space**](https://huggingface.co/spaces/KrishBakshi/worldbench) ·
[**Prompt**](https://github.com/KrishBakshi/worldbench/blob/HEAD/prompts/prompt.md)

*Click the animation for the full-quality video.*

worldbench gives a model a single prompt: a detailed description of a floating voxel island with ten biomes, rivers, weather, wildlife, a day/night cycle and seasons. The model has to answer with **one self-contained HTML file** that renders that world in 3D with **Three.js**: the library imported from a CDN, with no build step and no separate asset files. The file has to open in a browser and just run, with a free camera to orbit, zoom and pan around the island. worldbench then checks, piece by piece, how much of the described world actually exists, looks right and behaves right.

## What kind of benchmark this is

worldbench is an **execution-based, rubric-graded code-generation benchmark**: a…
