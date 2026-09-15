---
repo: "qorm/asm.js"
name: "asm.js"
description: "Write in JavaScript, Run as Native."
readmeQualityOk: true
url: "https://github.com/qorm/asm.js"
homepage: "https://asm.js.cn"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-01-20T04:29:14Z"
lastCommitAt: "2026-09-15T08:54:39Z"
lastReleaseAt: "2026-07-26T17:23:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 65
maintainers: ["qorm"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b48e47ea8dbf74d52af5c19ada89631f2992afb8ee437283bc65be4aa071bc4/qorm/asm.js"
---

# asm.js

  </a>
</p>

[Official Site (asm.js.cn)](https://asm.js.cn) | [中文版 README](https://github.com/qorm/asm.js/blob/HEAD/README.zh-CN.md) | [VIS 视觉识别规范](https://github.com/qorm/asm.js/blob/HEAD/docs/VIS.md)

A JavaScript-to-native compiler that translates JavaScript into standalone ARM64/x64 native executables — with **no third-party dependencies and no external interpreter at runtime**.

## Status

A self-hosting, zero-dependency JavaScript→native AOT compiler supporting 5 major platforms (macOS/Linux ARM64+x64, Windows x64).

- **Conformance**: Latest test262 conformance benchmark achieves **100%** of the executed official stride-5 sample (6,276/6,276; `tests/test262/last_report.md` on macOS-ARM64, 2026-09-08: FAIL 0, COMPILE_FAIL 0, CRASH 0). Not every eligible variant. Numbers and the five-target matrix: [docs/FACTS.md](https://github.com/qorm/asm.js/blob/HEAD/docs/FACTS.md).
- **Self-Hosting**: Full bootstrap determinism (`gen1 == gen2 == gen3` byte-identical fixed point) verified on macOS-ARM64 and Linux-ARM64.
- **Fixtures**: 522 manifests; gate requires FAIL=0 (current local run: PASS=515 XFAIL=7 FAIL=0).
- **Version History**: For detailed release notes and change…
