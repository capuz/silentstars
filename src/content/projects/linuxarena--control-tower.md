---
repo: "linuxarena/control-tower"
name: "control-tower"
description: "A python library built on top of Inspect AI to support Control research and evaluations, by Redwood and EquiStamp"
readmeQualityOk: true
url: "https://github.com/linuxarena/control-tower"
homepage: "https://docs.linuxarena.ai"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["ai-control"]
stars: 30
forks: 39
openIssues: 3
closedIssues: 36
watchers: 0
contributors: 35
recentReleases: 4
createdAt: "2026-03-17T15:41:29Z"
lastCommitAt: "2026-09-15T08:54:32Z"
lastReleaseAt: "2026-07-29T14:11:06Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 62
maintainers: ["henri123lemoine", "TommyBark", "HolyMichael"]
openGraphImageUrl: "https://opengraph.githubassets.com/662f3f5524cca365c4f657075661fb2c903c12ff3454779bb74b42fbdb76500d/linuxarena/control-tower"
---

Welcome to Control Tower, a framework for AI control evaluations built on [Inspect](https://inspect.aisi.org.uk/) and maintained by [LinuxArena](https://linuxarena.ai).

> **Experimental**: This project is under active development. APIs and interfaces may change without notice.

Control Tower provides many built-in components, including blue-team protocols, action- and trajectory-level monitors, end-to-end sabotage evaluations, safety-usefulness curves, and trajectory tooling. Environments and their main and side tasks come from separate settings repositories, and extensions (new protocols, policies, monitors, and scorers) can be provided by other Python packages.

To get started:

```bash
git clone https://github.com/linuxarena/control-tower && cd control-tower
uv sync
cp .env.example .env          # set ANTHROPIC_API_KEY (or OPENAI_API_KEY)
uv run ct settings pull linuxarena
```

Check the install without spending a model call or building an image. It takes a couple of minutes and prints nothing until it finishes:

```bash
PYTHONUNBUFFERED=1 uv run ct run eval --policy test --task-file simple --tags test --no-upload
```

Then run a real eval. The first one builds the environment…
