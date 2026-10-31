---
repo: "CeroxeAnivie/RTRendererAPI"
name: "RTRendererAPI"
description: "A standalone Java hardware ray tracing Vulkan library"
originalDescription: "一个独立的 Java 硬件光线追踪 Vulkan 库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CeroxeAnivie/RTRendererAPI"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-24T07:52:28Z"
lastCommitAt: "2026-10-31T15:59:10Z"
lastReleaseAt: "2026-10-25T11:30:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["CeroxeAnivie"]
openGraphImageUrl: "https://opengraph.githubassets.com/180192714fea730824062e7bf0639e52e0181020f7c0631df9701bc01bedb4bf/CeroxeAnivie/RTRendererAPI"
---

# RTRendererAPI

**A hardware ray tracing rendering library powered by Java**

Programmable scenes / native-format mapped frames / direct Vulkan GPU display / general graphics, compute, and hardware RT

---

> **Introduction**
>
> RTRendererAPI provides Java desktop applications and engine processes with a vendor-neutral, host-agnostic general rendering semantics contract. The public `renderer-api` contains no game, engine, or NVIDIA-specific scene fields. 7.0.0 centers on a single retained RT main path and provides explicit resource, shader, binding, pipeline, render-pass, barrier, draw, and external-frame semantics. Applications only need to depend on `renderer-api` to get backend discovery, scene submission, a general command transaction, asynchronous CPU frames, an official GPU presenter, and explicit Vulkan expert interop. The Windows Vulkan backend, LWJGL, the corresponding Windows natives, and the NVIDIA provider are all resolved as transitive Maven dependencies, so no manual DLL deployment is needed.
>
> **Recommended use cases**: Java desktop renderers, offscreen ray tracing, real-time RTX previews, and GPU frame integration with existing Vulkan pipelines.

> **7.0.0…
