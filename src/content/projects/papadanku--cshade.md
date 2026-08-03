---
repo: "papadanku/CShade"
name: "CShade"
description: "Image and video processing shaders for ReShade."
readmeQualityOk: true
url: "https://github.com/papadanku/CShade"
homepage: "https://papadanku.github.io/CShade/"
language: "HLSL"
languages: ["HLSL"]
languagePcts: [100]
topics: ["hlsl", "image-processing", "reshade", "video-processing", "shaders", "optical-flow", "ai", "ai-agents", "gemini"]
stars: 58
forks: 4
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-10-05T05:13:58Z"
lastCommitAt: "2026-08-03T06:42:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["papadanku"]
openGraphImageUrl: "https://opengraph.githubassets.com/69ca861ae2747ba910eb36ad228d6c1fd527eb2182fceeb53b41d78a34351377/papadanku/CShade"
---

# CShade

## About

CShade is an HLSL shader collection for ReShade. CShade introduces conventional image and video processing effects from a different angle.

CShade also includes `.fxh` files that contain algorithms used in the collection or have potential use.

## Features

### Inter-Shader Merging

CShade allows users to blend shaders together and configure shaders to output a combination of Red/Green/Blue/Alpha.

### Adaptive Exposure

CShade features an adaptive-exposure shader that uses hardware blending for temporal smoothing. The shader also features spot-metering, allowing users to expose their image depending on an area.

### Image, Video, and Post Processing

- **Image Processing**: CShade features shaders that deal with getting information about images.
    - **Sharpening**: [FidelityFX Contrast Adaptive Sharpening (CAS)](https://gpuopen.com/manuals/fidelityfx_sdk/fidelityfx_sdk-page_techniques_contrast-adaptive-sharpening/), [FidelityFX Robust Contrast Adaptive Sharpening (RCAS)](https://gpuopen.com/manuals/fidelityfx_sdk/fidelityfx_sdk-page_techniques_super-resolution-upscaler/#robust-contrast-adaptive-sharpening-rcas)
    - **Anti-Aliasing**: [Fast Approximate…
