---
repo: "hojiahao/cinefoundry"
name: "cinefoundry"
description: "Spotfoundry (广告工坊): an agentic ad-film studio that runs on a single NVIDIA DGX Spark — one brief in, a finished, compliance-checked ad out. Agent Skills + local Nemotron / StepFun / ComfyUI. Source-available under BUSL-1.1."
originalDescription: "Spotfoundry (广告工坊): an agentic ad-film studio that runs on a single NVIDIA DGX Spark — one brief in, a finished, compliance-checked ad out. Agent Skills + local Nemotron / StepFun / ComfyUI. Source-available under BUSL-1.1."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hojiahao/cinefoundry"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["agent-skills", "ai-video", "comfyui", "dgx-spark", "nemotron", "nvidia", "stepfun"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-21T06:53:40Z"
lastCommitAt: "2026-10-17T07:58:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 37
maintainers: ["hojiahao"]
openGraphImageUrl: "https://opengraph.githubassets.com/904ac75841a9a536120d726f3ea7918f22bff22ab4ae4ae6aa08427c31399675/hojiahao/cinefoundry"
---

**Cinefoundry (影工坊)** is an agent that produces finished ad films on a single NVIDIA DGX Spark. Give it one creative idea in a sentence, and it delivers a short video ad with complete visuals, voiceover, and music, correct subtitles, and copy that passes compliance checks. Materials, models, and every generated frame stay on the local machine throughout.

> Formerly named Spotfoundry (广告工坊) and CineLoom. The project is expanding from ad films to short videos and micro-dramas and was renamed Cinefoundry; the old repository address automatically redirects here.

Excellent Award, 3rd NVIDIA DGX Spark Hackathon · Agent Skills Development Challenge · Author: 贺家豪 · Ten-day essay contest: [Ten Days: Ten Days of Making an Ad Film on a DGX Spark](https://zhuanlan.zhihu.com/p/2088218312492828625)

| Pain point | Existing AI video tools | Cinefoundry |
|---|---|---|
| Assets for unreleased products can't be uploaded to the cloud | Image and video generation goes through cloud APIs | Nemotron, Step3-VL, Qwen-Image, and Wan2.2 all run on one Spark, so films can be made even offline |
| The product changes between shots, and garbled text appears in the frames | Each shot is generated…
