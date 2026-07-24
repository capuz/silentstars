---
repo: "lukeb-aidev/cohesix"
name: "cohesix"
description: "Cohesix is an open-source research OS for trustworthy AI infrastructure. Built on the formally verified seL4 microkernel, its Queen/Worker hives turn AI intent into capability-scoped, bounded, auditable action across edge GPU fleets - “infrastructure for AGI.”"
readmeQualityOk: true
url: "https://github.com/lukeb-aidev/cohesix"
language: "C"
languages: ["C", "Rust"]
languagePcts: [46, 35]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-24T05:44:38Z"
lastCommitAt: "2026-07-24T06:07:18Z"
lastReleaseAt: "2026-02-18T08:28:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 64
maintainers: ["lukeb-aidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/460c6dbdee9e897a5032e3a1c8106341bba7e3901c1f7163c9c92a4cdff07f81/lukeb-aidev/cohesix"
discussionCount: 2
---

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" bgcolor="#333333">
        src="apps/swarmui/frontend/assets/icons/cohesix-header.svg"
        alt="Cohesix"
        width="720"
      />
    </td>
  </tr>
</table>

# Cohesix

Cohesix is a research operating system for edge AI, built around a simple idea:
an AI fleet should have air-traffic control, not a pile of tools holding
unrestricted credentials.

Each Cohesix hive has a Queen—the central orchestration authority—and a small
set of narrowly focused Worker roles for heartbeat telemetry, GPU lease and
status records, and LoRA adapter/model lifecycle receipts. These Workers are
control-plane roles inside Cohesix, not the macOS or Linux machines in the
fleet. In the checked-in target profiles they are root/host model and session
views; no general Worker child TCB is launched yet.

Cohesix is designed to coordinate large, mixed-platform hives of GPU-backed AI
systems. Linux GPU nodes and macOS or Linux operator and AI hosts keep their
models, agents, training, inference, and hardware stacks in their native
operating systems. The project includes the complete Cohesix control-plane
toolkit:…
