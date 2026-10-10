---
repo: "Dicklesworthstone/franken_manim"
name: "franken_manim"
description: "A sovereign, deterministic rewrite of 3b1b's manim in pure Rust — native TeX math typesetting (no LaTeX), an analytic Bézier renderer with the 3b1b look, certified bit-reproducible renders, and source compatibility with existing manimlib scenes. One binary; ffmpeg is the only external tool."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_manim"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 36]
stars: 21
forks: 2
openIssues: 5
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-07-20T04:35:47Z"
lastCommitAt: "2026-10-10T10:06:30Z"
lastReleaseAt: "2026-10-04T03:56:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1306217133/064e290b-2c9d-407a-b2dd-c6eba91db088"
---

# franken_manim

**A sovereign, deterministic rewrite of manim (Grant Sanderson's mathematical-animation engine behind 3Blue1Brown) in pure Rust on the FrankenSuite. API- and semantics-compatible with `manimlib`, it typesets TeX mathematics natively (no LaTeX, no Pango, no system fonts), rasterizes Bézier geometry analytically instead of replaying GPU workarounds, and produces bit-identical certified renders on any machine at any thread count. The native Rust library, `fmn` CLI, and Studio install as one CPython-free binary that needs nothing but (optionally) ffmpeg; existing Python scenes use the separately installed, host-CPython `fmn-python` portal.**

```bash
curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/franken_manim/main/scripts/install.sh | bash
```

> **A note on tense (read this first).** This README is written in the **present tense, as if the entire design in [`COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKEN_MANIM.md`](https://github.com/Dicklesworthstone/franken_manim/blob/HEAD/docs/planning/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKEN_MANIM.md) is fully realized**: the 1.0 target state where every performance gate is green and every subsystem is live.…
