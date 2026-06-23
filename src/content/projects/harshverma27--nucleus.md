---
repo: "harshverma27/nucleus"
name: "nucleus"
description: "A modern STM32 developer platform for declarative hardware configuration and real-time trace debugging."
url: "https://github.com/harshverma27/nucleus"
homepage: "http://heyharsh.me/nucleus/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ide", "nucleus", "stm32"]
stars: 10
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-20T15:20:47Z"
lastCommitAt: "2026-06-23T06:41:45Z"
lastReleaseAt: "2026-06-13T08:59:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 51
maintainers: ["harshverma27", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/62321848e02b7d31bdcebd3086a4b95e83d110105050505af11946a7dc24bc58/harshverma27/nucleus"
---

# Nucleus



> A CLI-first STM32 developer platform: declarative hardware configuration,
> a constraint solver that actually understands silicon, dual-backend
> hardware-in-the-loop testing, and real-time trace debugging.

**Not an IDE replacement. A developer platform.**

Nucleus replaces STM32CubeIDE's two real lock-ins:

1. Graphical pin/peripheral configuration that produces opaque, un-diffable XML.
2. Integrated debug/trace/test tooling with no open-source, CI-friendly equivalent.

Everything lives in one version-controlled file, `stm32.toml`, validated and
driven entirely from the CLI — usable from any editor, gatable in CI, with VS
Code as an optional thin client on top.

📖 **[Read the docs](https://heyharsh.me/nucleus/)**
· **[Watch the demo video](https://youtu.be/8zDZzE12wec)**

---

## Table of Contents

- [What Nucleus Is](#what-nucleus-is)
- [Quick Start](#quick-start)
- [Features](#features)
  - [Verify — the constraint solver](#verify--the-constraint-solver)
  - [Prove — dual-backend hardware-in-the-loop testing](#prove--dual-backend-hardware-in-the-loop-testing)
  - [Observe — trace, history, CI](#observe--trace-history-ci)
  -…
