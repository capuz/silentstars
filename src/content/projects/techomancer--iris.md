---
repo: "techomancer/iris"
name: "iris"
description: "SGI Indy Emulator"
readmeQualityOk: true
url: "https://github.com/techomancer/iris"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 113
forks: 14
openIssues: 11
closedIssues: 23
watchers: 8
contributors: 12
recentReleases: 1
createdAt: "2026-04-02T01:06:10Z"
lastCommitAt: "2026-09-17T08:50:32Z"
lastReleaseAt: "2026-08-31T16:44:18Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 30
maintainers: ["techomancer", "danifunker", "iblowmymind"]
openGraphImageUrl: "https://opengraph.githubassets.com/954e738b45b6a665af2c7099d1f54d0ad0c16b6692db51568873b20f05b8dbee/techomancer/iris"
discussionCount: 1
---

Me and my homies Claude and Gemini present:

# IRIS — Irresponsible Rust IRIX Simulator

An SGI Indy / Indigo2 emulator, vibed into existence with Rust and AI assistance.
Boots IRIX 6.5 and 5.3. Has networking. Has a framebuffer.

**Status snapshot:**

- **Indy IP24** — primary daily-driver; IRIX desktop, X11, networking, JIT all work.
- **Indigo2 IP22** — boots to serial console; framebuffer/desktop path still in progress (use `console=d` + serial for debugging; see Indigo2 doc).

Pre-built binaries and the Mac App Store GUI are available at
[danifunker/iris releases](https://github.com/danifunker/iris/releases) (upstream packaging).
For latest code, build from source from upstream [techomancer/iris](https://github.com/techomancer/iris). Also please report bugs/issues in upstream repo.

## Q&A

**Q: What is it?**

**A:** An SGI Indy (MIPS R4400) emulator. Emulates enough hardware that IRIX
boots to a usable system: shell, networking, X11, the works.

**Q: But why?**

**A:** Wanted to see how far vibe coding could go, and to learn some Rust along the way.

**Q: You could have improved MAME.**

**A:** Didn't seem like fun.

**Q: So did you learn Rust?**

**A:** LOL, my brain hurts.…
