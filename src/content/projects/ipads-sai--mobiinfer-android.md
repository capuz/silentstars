---
repo: "IPADS-SAI/Mobiinfer-Android"
name: "Mobiinfer-Android"
description: "MobiInfer runs 35B-A3B-class MoE models fully on-device on the Qualcomm Hexagon NPU, streaming experts from flash with lookahead scheduling (LES) and DSpark speculation."
originalDescription: "MobiInfer runs 35B-A3B-class MoE models fully on-device on the Qualcomm Hexagon NPU, streaming experts from flash with lookahead scheduling (LES) and DSpark speculation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/IPADS-SAI/Mobiinfer-Android"
language: "C++"
languages: ["C++"]
languagePcts: [56]
stars: 224
forks: 27
openIssues: 1
closedIssues: 1
watchers: 12
contributors: 19
recentReleases: 9
createdAt: "2026-10-15T04:30:02Z"
lastCommitAt: "2026-11-23T12:21:32Z"
lastReleaseAt: "2026-11-23T12:24:31Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["yydhYYDH", "Fly0307", "Dino1844"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c44fcf34f17be41b208af8dc22a0add68afb28b9a44c277eec30bef23b7d2e/IPADS-SAI/Mobiinfer-Android"
---

MobiInfer · Android

**Run 35B-class MoE large models locally on your phone**

Chinese | [English](https://github.com/IPADS-SAI/Mobiinfer-Android/blob/HEAD/README_EN.md)

---

## Latest News

- [2026.11.23] 🚀 **Released MobiInfer-Android v0.4.6; Q2 tiled expert packs push 35B-A3B decoding to 31.1 tok/s**
- [2026.11.11] 🚀 **Released MobiInfer-Android v0.4.5; MiniCPM-V 4.7 MoE decoding peaks at 23.3 tok/s**
  - ⚡ **Cross-layer expert pipeline**: expert reads from disk switched to O_DIRECT, gate predictions submitted 2 layers ahead (H+2), each expert has its own task queue plus a resident read thread, hiding I/O within computation; same device and same prompt, decoding at 23.3 tok/s.
  - 🧵 **Can run inference in parallel with other apps**: MoE inference does not require exclusive use of the device; generation continues while other apps run in the foreground, with throughput maintained at 21.3–21.8 tok/s.
  - 🧩 **Hexagon v85 support**: v73 / v75 / v79 / v81 / v85 skel files are all built into the package; backend synced with upstream 2026-11-10 (repack, operator fusion, long-context FA).
