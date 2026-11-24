---
repo: "rookiestar28/ComfyUI-RookieUI"
name: "ComfyUI-RookieUI"
description: "The ultimate A1111-style sidebar. Bring the classic UX you know and love into ComfyUI."
readmeQualityOk: true
url: "https://github.com/rookiestar28/ComfyUI-RookieUI"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [64, 34]
topics: ["webui", "a1111-stable-diffusion-webui", "a1111-webui", "sd-webui", "stable-diffusion-webui", "image-generation", "controlnet", "xyz-tools", "comfyui-custom-node", "comfyui-extension"]
stars: 98
forks: 6
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2026-04-10T10:07:54Z"
lastCommitAt: "2026-11-24T13:54:40Z"
lastReleaseAt: "2026-10-09T13:19:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 33
maintainers: ["rookiestar28", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/243449778d6b521911566766b7a43f3979d1a26bdd04637722e122cf57cf0c8b/rookiestar28/ComfyUI-RookieUI"
---

# ComfyUI-RookieUI

ComfyUI-RookieUI is a ComfyUI custom node extension that reproduces an A1111-style sidebar workflow while keeping inference inside native ComfyUI execution. **The project target is not only visual similarity.** RookieUI aims to reproduce A1111-style workflow semantics for Stable Diffusion in a ComfyUI host:

- **prompt / negative prompt parsing and conditioning behavior**
- **sampler / scheduler / seed / CFG mapping**
- **img2img, inpaint, and extras postprocessing flows**
- **integrated ControlNet and ADetailer behavior**
- **PNG metadata embedding, round-trip, and apply workflow**
- **Prompt Workbench authoring tools and XYZ Plot sweep sessions**
- **queue / progress / result UX and host-integrated workflow behavior**

The core objective of this project is not merely to replicate the classic UI/UX, but to faithfully reproduce A1111's unique prompt parsing capabilities and image generation characteristics for the Stable Diffusion model family to the greatest extent possible. Even so, RookieUI supports more than just the Stable Diffusion family.
