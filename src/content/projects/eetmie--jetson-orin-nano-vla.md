---
repo: "eetmie/jetson-orin-nano-vla"
name: "jetson-orin-nano-vla"
description: "Benchmarking Vision-Language-Action (VLA) models on an 8GB NVIDIA Jetson Orin Nano"
readmeQualityOk: true
url: "https://github.com/eetmie/jetson-orin-nano-vla"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["jetson", "jetson-orin-nano", "tensorrt", "triton", "vla", "vla-model"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-24T20:28:39Z"
lastCommitAt: "2026-11-20T11:58:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 40
maintainers: ["eetmie"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca92365b3e146a1ab14aeb920f0a2544378ceb2c8783539b3fd22e529d82896b/eetmie/jetson-orin-nano-vla"
---

# jetson-orin-nano-vla

A collection of vision-language-action (VLA) models on an **8 GB Jetson Orin Nano Super**, running on
TensorRT with ahead-of-time compiled Triton kernels. Export a checkpoint on your PC as a split ONNX bundle,
copy the bundle to the Jetson and run the model.

This repo is for benchmarking only. It measures how fast the models run on the board, and it does not provide the code to drive a robot with them. Use this as a base for your own projects.
