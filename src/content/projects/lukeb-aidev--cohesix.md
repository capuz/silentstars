---
repo: "lukeb-aidev/cohesix"
name: "cohesix"
description: "Cohesix is an open-source research OS for trustworthy AI infrastructure. Built on the formally verified seL4 microkernel, its Queen/Worker hives turn AI intent into capability-scoped, bounded, auditable action across edge GPU fleets - “infrastructure for AGI.”"
readmeQualityOk: true
url: "https://github.com/lukeb-aidev/cohesix"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [43, 37]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-24T05:44:38Z"
lastCommitAt: "2026-08-28T14:14:50Z"
lastReleaseAt: "2026-02-18T08:28:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 63
maintainers: ["lukeb-aidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae09ebcf318b9b07b3884ddb3fd639dc71602d8ddb167b3d7bb055cc02abd110/lukeb-aidev/cohesix"
discussionCount: 2
---

src="docs/COHESIX_LOGO.png"
      alt="Cohesix"
      width="720"
    />
  </div>
</div>
<br />
Cohesix is a research operating system for edge AI, built around a simple idea:
an AI fleet should have air-traffic control, not a pile of tools holding
unrestricted credentials.

Each Cohesix hive has a Queen—the central orchestration authority—and a small
set of narrowly focused Worker roles for heartbeat telemetry, GPU lease and
status records, and LoRA adapter/model lifecycle receipts. These Workers are
control-plane roles inside Cohesix, not the macOS or Linux machines in the
fleet. The checked-in target profiles declare Heartbeat, GPU, and LoRA as
executable roles with bounded target-task authority; WorkerBus remains a
model/session-only role. That declaration is not evidence that a particular
QEMU or Pi run created or accepted those tasks.

The selected QEMU and Pi topologies each admit 256 passive Worker instances
across those three executable roles. Two bounded executor lanes
provide useful concurrency without multiplying active scheduling-context
demand per Worker.

Cohesix is designed to coordinate large, mixed-platform hives of GPU-backed AI
systems. Linux GPU nodes and…
