---
repo: "wendylabsinc/WendyOS"
name: "WendyOS"
description: "Physical AI Harness for Robotics & IoT"
readmeQualityOk: true
url: "https://github.com/wendylabsinc/WendyOS"
homepage: "https://docs.wendy.dev/latest"
language: "Go"
languages: ["Go"]
languagePcts: [69]
topics: ["edge", "iot", "jetson", "nvidia", "physical", "developer-tools", "edge-computing", "embedded-linux", "raspberry-pi", "ai-harness"]
stars: 92
forks: 8
openIssues: 24
closedIssues: 73
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2025-04-04T09:45:50Z"
lastCommitAt: "2026-10-14T08:58:18Z"
lastReleaseAt: "2025-04-23T21:11:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["Joannis", "konstantinbe", "justsem"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a1d7cbb80bf4568123185ea55d81e3b2f9861a7de1e1fe885d681ea33874bc0/wendylabsinc/WendyOS"
---

# Wendy

Build and run apps on robots, Raspberry Pis, Jetsons, and other Linux devices.
Wendy builds your code, deploys it, and brings the logs back to your terminal.
Start with a simulated robot on your own computer, then connect hardware when
it is ready.

[Documentation](https://docs.wendy.dev) · [Discord](https://discord.gg/wendylabsinc) · [Examples](https://github.com/wendylabsinc/WendyOS/blob/HEAD/Examples)

## Start with a moving robot

The guided tour creates a simulated Unitree Go2, opens its 3D view, and runs a
short walking demonstration. You can try it without a physical robot or a
Wendy Cloud account.

You need macOS or Linux, a running Docker installation with Buildx, and internet
access for the initial downloads and build. The robot VM uses four virtual CPUs
and 4 GiB of memory; allow disk space for the OS image and containers. Apple
Silicon is the fastest path. x86 computers emulate the ARM64 virtual device and
can take longer. The first
run downloads an OS image and builds the robot software, so allow several minutes.
The tour checks Docker and QEMU before starting. See the prerequisite details
below if either is missing. Python runs inside the container; you do…
