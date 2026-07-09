---
repo: "dgrauet/ltx-2-mlx"
name: "ltx-2-mlx"
description: "Pure MLX port of LTX-2 (Lightricks LTX-2.3) for Apple Silicon — video + audio generation"
readmeQualityOk: true
url: "https://github.com/dgrauet/ltx-2-mlx"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 72
forks: 24
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-03-18T23:22:09Z"
lastCommitAt: "2026-07-09T20:45:19Z"
lastReleaseAt: "2026-05-08T20:46:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 43
maintainers: ["dgrauet", "plz12345", "dgrauet-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6d68a0e3f5efafbafa8e3b11058d4e38d4b0314f955530d5191aec9598db28c/dgrauet/ltx-2-mlx"
---

# ltx-2-mlx

Pure MLX port of [LTX-2](https://github.com/Lightricks/LTX-2) for Apple Silicon. Three-package monorepo mirroring the reference structure — inference, pipelines, and training — running natively on Metal.

## Features

- **Text-to-Video** — generate video + stereo 48kHz audio from a text prompt
- **Image-to-Video** — animate a reference image
- **Audio-to-Video** — generate video conditioned on an audio track
- **Retake / Extend** — edit existing videos (regenerate segments, add frames)
- **Keyframe interpolation** — smooth transition between reference images
- **IC-LoRA** — reference video conditioning (depth/pose/edges)
- **HDR IC-LoRA** — LogC3-compressed HDR generation (V2V upgrade or pure T2V) producing linear HDR `.npz` + SDR mp4 preview
- **LipDub** *(experimental)* — lip-dub a reference video by re-syncing visuals to the source audio
- **Two-stage generation** — half-res → neural upscale → refine
- **HQ generation** — res_2s second-order sampler + CFG/STG guidance
- **Prompt Relay** — sequence local prompts over time within one generation (`--segment "text" [LEN]`); a training-free Gaussian penalty gates each prompt's tokens to a slice of the timeline via the…
