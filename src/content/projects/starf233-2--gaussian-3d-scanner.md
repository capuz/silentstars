---
repo: "starf233-2/Gaussian-3D-Scanner"
name: "Gaussian-3D-Scanner"
description: "Gaussian 3D Scanner turns any 2D photo into an interactive 3D parallax image on Android. "
originalDescription: "Gaussian 3D Scanner turns any 2D photo into an interactive 3D parallax image on Android. "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/starf233-2/Gaussian-3D-Scanner"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-30T16:00:57Z"
lastCommitAt: "2026-11-13T11:26:50Z"
lastReleaseAt: "2026-08-12T15:00:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 11
maintainers: ["starf233-2"]
openGraphImageUrl: "https://opengraph.githubassets.com/64f2fa77f09b2a2eebbc8e77c399ba89ba4a3f89c91a1e429c6c803a4fe82790/starf233-2/Gaussian-3D-Scanner"
---

# GaussianScanner v10.4 — QNN Hardware-Accelerated Edition

Single image → Depth Anything 3 Small (Qualcomm's official fp32 model) → depth map → 3D point cloud.

For performance optimization source code and validation scope, see [PERFORMANCE_AUDIT.md](https://github.com/starf233-2/Gaussian-3D-Scanner/blob/HEAD/PERFORMANCE_AUDIT.md). This round did not adjust the version number or update the backup.

For the latest high-resolution/automatic point size refactor, see [HIRES_POINTSIZE_REFACTOR.md](https://github.com/starf233-2/Gaussian-3D-Scanner/blob/HEAD/HIRES_POINTSIZE_REFACTOR.md):
Full 2x mode runs 10 inferences in total. Per-point projection determines the automatic point size, replacing the old tile high-frequency injection and fixed scaling anchor.

### Source archive	

`GaussianScanner-v10.4-source.zip` contains only self-written source code, Gradle configuration, utility scripts, and documentation, to facilitate public upload.
The following items are **not included** due to size or licensing reasons. Please supply them before building:

| Missing item | How to supply |
|---|---|
| `app/src/main/assets/da3_small_gpu_fp32.tflite` (143.7MB, exceeds GitHub's 100MB single-file…
