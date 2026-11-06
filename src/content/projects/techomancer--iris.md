---
repo: "techomancer/iris"
name: "iris"
description: "SGI IPsomething Emulator"
readmeQualityOk: true
url: "https://github.com/techomancer/iris"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 138
forks: 28
openIssues: 31
closedIssues: 52
watchers: 8
contributors: 24
recentReleases: 5
createdAt: "2026-04-02T01:06:10Z"
lastCommitAt: "2026-11-06T13:20:01Z"
lastReleaseAt: "2026-11-06T13:04:40Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 92
undervaluedScore: 35
maintainers: ["jamesbraid", "techomancer", "Tzeentchnet"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b565d9709abce9e21b5178c20f9fbfab91e0fed3401c1b6ebbcd7fac0f904f3/techomancer/iris"
discussionCount: 5
---

Me and my homies Claude and Gemini present:

# IRIS — Irresponsible Rust IRIX Simulator

An SGI Indy / Indigo2 emulator, vibed into existence with Rust and AI assistance.
Boots IRIX 6.5 and 5.3. Has networking. Has a framebuffer.

**Status snapshot:**

- **Indy IP24** — primary daily-driver; IRIX desktop, X11, networking all work.
  R4400 (default) or R5000, picked at runtime.
- **Indigo2 IP22** — embedded PROM fallback, two SCSI controllers, and the
  fullhouse interrupt layout. Choose Newport XL, GR2 XZ/Extreme, or IMPACT
  graphics; GR2 and IMPACT use command interpreters and software rasterizers
  (see [Indigo2 IP22](https://github.com/techomancer/iris/blob/HEAD/docs/indigo2-ip22.md)).
- **Indigo2 IMPACT IP28** — R10000 CPU and IMPACT graphics, with IRIX 6.5
  booting to the desktop, with an embedded IP28 PROM fallback.
  Two 512 MB banks provide 1 GB of RAM
  (see [Indigo2 IP28](https://github.com/techomancer/iris/blob/HEAD/docs/indigo2-ip28.md)).

Prebuilt releases are available in [GitHub Releases](https://github.com/techomancer/iris/releases).

## Q&A

**Q: What is it?**

**A:** An SGI Indy / Indigo2 emulator with runtime-selectable R4400, R5000,
or R10000 CPUs. Emulates…
