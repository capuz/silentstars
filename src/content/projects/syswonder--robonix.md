---
repo: "syswonder/robonix"
name: "robonix"
description: "embodied AI operating system (EAIOS)"
url: "https://github.com/syswonder/robonix"
homepage: "http://robonix.syswonder.org"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [58, 38]
topics: ["embodied-ai", "linux", "operating-system", "robotics", "ros2", "agent", "skill-md"]
stars: 33
forks: 26
openIssues: 21
closedIssues: 13
watchers: 3
contributors: 13
recentReleases: 1
createdAt: "2025-09-25T05:44:36Z"
lastCommitAt: "2026-06-25T06:41:14Z"
lastReleaseAt: "2026-05-15T00:51:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 54
maintainers: ["enkerewpo", "1mujue", "allcontributors[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2460d42c07232563541c5ad7b72dfe6a5b0f0bd0f95361cf8c791e41b63618a8/syswonder/robonix"
discussionCount: 1
---

</p>

<h3 align="center">Robonix — The Embodied AI Operating System</h3>

  <em>An EAIOS that turns the robot body into a uniform, capability-first runtime — so models, sensors, and actuators plug in once and reuse everywhere.</em>
</p>

</p>

<br />

https://github.com/user-attachments/assets/604b2c7f-3b6d-46be-858b-c52acaf686e3

## Status

> \[!WARNING]
> Robonix is in early development. APIs, IDL layouts, and internal designs
> may change without notice. No API stability until a versioned release.

## What it is

Robonix is the **operating system** between a robot's hardware and an embodied
LLM/VLM/VLA/WAM brain. It standardises how device drivers, runtime services, user
skills, and the planner discover and talk to each other; it owns identity,
configuration, time, transport, logging, health, body model, scene model,
execution, and safety as named, replaceable components.

| Component                        | Responsibility                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| **[atlas](system/atlas/)**       | Capability registry…
