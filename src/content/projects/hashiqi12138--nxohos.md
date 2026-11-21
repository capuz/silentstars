---
repo: "hashiqi12138/nxohos"
name: "nxohos"
description: "Switch games natively on HarmonyOS NEXT: NSO AArch64 static rewrite + Horizon HLE + NVN-to-Vulkan replay. Zelda BOTW runs on device (M1 baseline)."
originalDescription: "Switch games natively on HarmonyOS NEXT: NSO AArch64 static rewrite + Horizon HLE + NVN-to-Vulkan replay. Zelda BOTW runs on device (M1 baseline)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hashiqi12138/nxohos"
language: "Python"
languages: ["Python", "C"]
languagePcts: [56, 41]
topics: ["arm64", "gaming", "harmonyos", "native-port", "nx2android", "nxnative", "ohos", "openharmony", "switch", "vulkan"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-11-08T19:03:26Z"
lastCommitAt: "2026-11-21T13:21:17Z"
lastReleaseAt: "2026-11-21T12:32:58Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["hashiqi12138", "justagoodman", "seedds"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e9defedd57a82a414013e17c0ef1f0f332c94662c143db53cbeacb7165f66c8/hashiqi12138/nxohos"
---

# nx2ohos — Native porting of Switch games to HarmonyOS NEXT

Bring Nintendo Switch games to HarmonyOS (HarmonyOS NEXT / OpenHarmony) via **native execution**: no CPU emulation. The game's ARM64 machine code runs directly, with HLE only replacing Horizon system calls. NVN graphics calls are translated offline into SPIR-V and then replayed to the screen via Vulkan.

> Current status: **one HAP runs all games** (host + runtime profile). Running on a real device, *The Legend of Zelda: Breath of the Wild* Shrine scene runs at 11 fps / 104.7 ms.
> Verification records are in `docs/verify/` (gates G0.1–G1.5 PASS + [BOTW on-device record](https://github.com/hashiqi12138/nxohos/blob/HEAD/ohos-port/docs/verify/G1.6-BOTW.md) + on-device screenshots).
