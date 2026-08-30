---
repo: "tatolab/streamlib"
name: "streamlib"
description: "Control runtime for building things in the Physical AI space. Everything from self piloting vehicles to humanoid robots. Purposefully built to fuse LLM / AI control policies with your code"
readmeQualityOk: true
url: "https://github.com/tatolab/streamlib"
homepage: "https://tatolab.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["gpu", "headless", "low-latency", "real-time", "rust", "video", "video-processing", "computer-vision", "edge-computing", "mcp"]
stars: 6
forks: 0
openIssues: 146
closedIssues: 816
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-17T19:05:15Z"
lastCommitAt: "2026-08-30T00:44:55Z"
lastReleaseAt: "2026-02-01T20:40:15Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 70
maintainers: ["tato123", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cc9b403d644fc5de5f186c8da4b4bb475a562a87590bd7620551f2682be4f5d/tatolab/streamlib"
---

**One perception and control runtime that runs on the hardware itself** — an embedded board, a drone,<br>
a robot already running ROS, or the laptop you develop on. Write each stage in Python; a Rust engine runs it on the device.

For teams shipping physical AI: humanoids, autonomous vehicles, self-piloting drones,<br>
and the data-collection rigs that train them.

[Install](#install) · [Quickstart](#quickstart) · [Inspect a live device](#inspect-a-device-thats-already-running) · [How it works](#how-it-works) · [What ships today](#what-ships-today) · [License](#license) · [tatolab.com](https://tatolab.com)

</div>

<!-- Demo GIF slot. Generate on the rig with `vhs docs/assets/demo.tape`, commit the
     result, then replace this comment with:

---

- **Real-time processing on commodity hardware.** Deadline-driven stages on dedicated OS threads at
  a priority you declare — an off-the-shelf GPU and a Linux box, not a proprietary accelerator or a
  vendor runtime you have to buy into.
- **GPU acceleration for video, built in.** Capture lands in device memory and stays there — imported
  zero-copy where the device exports it, transparently uploaded where it doesn't, with no…
