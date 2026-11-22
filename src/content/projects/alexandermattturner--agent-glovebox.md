---
repo: "AlexanderMattTurner/agent-glovebox"
name: "agent-glovebox"
description: "A minimal-friction secure experience that lets agents do their work. (beta)"
readmeQualityOk: true
url: "https://github.com/AlexanderMattTurner/agent-glovebox"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 70
forks: 15
openIssues: 97
closedIssues: 802
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-05-24T16:42:35Z"
lastCommitAt: "2026-11-22T01:57:03Z"
lastReleaseAt: "2026-07-12T09:56:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 35
maintainers: ["claude", "mergify[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248442200/662564c6-6530-4e3d-915c-4ef4aebf3840"
---

When handling dangerous materials, a chemist doesn't YOLO it barehanded on the open bench. They reach through a _glovebox_ to do their work.

AI agents deserve the same care. An eval sample can hand a model an attack task, and a coding agent works beside your credentials. The usual barriers are thin: a container shares the host kernel, and a prompted “auto-mode” classifier is one model's judgment on your real machine.

`glovebox` gives each agent a sealed enclosure: a hardware-isolated microVM whose outgoing traffic passes a host-enforced allowlist firewall, and a host-side record of every byte the agent sends out.

1. **An eval sandbox.** `pip install inspect-glovebox`, then `sandbox="glovebox"` on an [Inspect](https://inspect.aisi.org.uk) Task gives every sample its own microVM. Harbor and other harnesses can use it too.
2. **A CLI.** Type `glovebox` in a project folder to run a coding agent, Claude Code by default, in the same enclosure. An experimental AI monitor can halt the agent until you return.

## Run evals in glovebox

```bash
pip install inspect-glovebox
inspect-glovebox sandbox preflight # exits 0 when this host can boot a sandbox
```
