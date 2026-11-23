---
repo: "Hebbian-Robotics/rua"
name: "rua"
description: "Hebbian Robot-Use Agents (RUA)"
readmeQualityOk: true
url: "https://github.com/Hebbian-Robotics/rua"
homepage: "https://hebbianrobotics.com/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [53, 32]
topics: ["embodied-ai", "livekit", "physical-ai", "robot-use", "robot-use-agents", "robotics", "so101", "lerobot", "mcap", "robot-learning"]
stars: 88
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-11-14T05:51:29Z"
lastCommitAt: "2026-11-23T13:07:55Z"
lastReleaseAt: "2026-11-22T10:20:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["kstonekuan", "theogbrand", "shobhitagnihotri69"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce587f1edeb37e879434a54b32db677c533b2130bd77d058d7f7323b50364765/Hebbian-Robotics/rua"
---

Prompt an LLM and let it observe and act in the real world.</p>

## Get started

Start with the [browser viewer example](https://github.com/Hebbian-Robotics/rua/blob/HEAD/docs/getting-started.md). Set up your
arm, see its live state and camera feeds, and run your first agent.

## Build an agent

Build your own agent with the [Python](https://github.com/Hebbian-Robotics/rua/blob/HEAD/hebbian_rua/client/README.md),
[Rust](https://github.com/Hebbian-Robotics/rua/blob/HEAD/sdk/README.md), or [TypeScript](https://github.com/Hebbian-Robotics/rua/blob/HEAD/typescript-client/README.md) SDK.
RUA supplies robot tools, camera observations and execution. You bring the model
and the loop.

Here's an agent loop using the Python SDK. The
[complete Python example](https://github.com/Hebbian-Robotics/rua/blob/HEAD/examples/python/agent_quickstart.py) includes the
connection, lease and arm setup, plus loops for Claude and Gemini.
