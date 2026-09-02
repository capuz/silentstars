---
repo: "ros-claw/rosclaw"
name: "rosclaw"
description: "Self-evolving runtime infrastructure for Physical AI and embodied agents. Ground AI agents into robot bodies with e-URDF, sandbox safety, capability routing, praxis capture, physical memory, runtime intervention, and skill evolution."
readmeQualityOk: true
url: "https://github.com/ros-claw/rosclaw"
homepage: "https://rosclaw.io"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agent", "automation", "embodied-ai", "llm", "openclaw", "physical-ai", "robot", "robotics", "ros", "ros2"]
stars: 191
forks: 33
openIssues: 2
closedIssues: 5
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2026-03-16T08:07:43Z"
lastCommitAt: "2026-09-02T08:04:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 29
maintainers: ["shaoxiang", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f10ea976bc56068e8d3c312e231992babedece1397e867a21034ee74f6c331ab/ros-claw/rosclaw"
discussionCount: 1
---

# ROSClaw

### Trustworthy Physical Execution Runtime and Control Plane for Embodied Agents

**Ground actions to a body, fail closed, execute with evidence, and return an auditable receipt.**

[Website](https://rosclaw.io) · [Quick Start](https://github.com/ros-claw/rosclaw/blob/HEAD/QUICKSTART.md) · [Architecture](https://github.com/ros-claw/rosclaw/blob/HEAD/ARCHITECTURE.md) · [Docs](https://github.com/ros-claw/rosclaw/blob/HEAD/docs/) · [Contact](mailto:ai@rosclaw.io)

</div>

```bash
curl -sSL https://rosclaw.io/get | bash
rosclaw firstboot --yes --profile offline --no-telemetry
rosclaw doctor --level verified
```

---

## What is ROSClaw?

ROSClaw is not another agent framework, a replacement for ROS 2, or a thin
LLM-to-ROS wrapper.

ROSClaw is a **trustworthy physical execution runtime and control plane for
embodied agents**. Codex, Claude Code, OpenClaw, VLA services, and other agents
are northbound clients. ROS 2, MCP, vendor SDKs, simulators, and robot
controllers are southbound systems.

Its canonical action path binds intent to a body and capability, applies policy
and authorization, arbitrates physical resources, dispatches to a driver, and
returns an evidence-bearing…
