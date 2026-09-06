---
repo: "darktable-org/darktable-ai"
name: "darktable-ai"
description: "Repository storing the Darktable models for the AI support"
readmeQualityOk: true
url: "https://github.com/darktable-org/darktable-ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 35
forks: 5
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 8
recentReleases: 2
createdAt: "2026-02-22T13:00:36Z"
lastCommitAt: "2026-09-06T08:02:32Z"
lastReleaseAt: "2026-08-21T18:26:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 31
maintainers: ["andriiryzhkov", "TurboGit", "piratenpanda"]
openGraphImageUrl: "https://opengraph.githubassets.com/68fba54b8d9a9f022c3f136ea81ebec2473cefb4ef460262816a09f233aab138/darktable-org/darktable-ai"
---

# Darktable AI Models

AI model conversion and packaging pipeline for [darktable](https://www.darktable.org/) – an open-source photography workflow application and raw developer ([GitHub](https://github.com/darktable-org/darktable)).

Currently targets the ONNX backend. The pipeline is designed to support additional backends as darktable gains support for other AI runtimes.

## Models

| Model                                                                         | Task    | Description                                     |
|-------------------------------------------------------------------------------|---------|-------------------------------------------------|
| [`denoise-nafnet`](https://github.com/darktable-org/darktable-ai/blob/HEAD/models/denoise-nafnet/README.md)                           | denoise | NAFNet denoiser trained on SIDD dataset         |
| [`denoise-nind`](https://github.com/darktable-org/darktable-ai/blob/HEAD/models/denoise-nind/README.md)                               | denoise | UNet denoiser trained on NIND dataset           |
|…
