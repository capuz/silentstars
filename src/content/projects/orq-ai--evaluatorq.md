---
repo: "orq-ai/evaluatorq"
name: "evaluatorq"
description: "Evaluation module for the orq platfrom in python, including Red Teaming and Agent Simulation"
readmeQualityOk: true
url: "https://github.com/orq-ai/evaluatorq"
homepage: "https://orq-ai.github.io/evaluatorq/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agentic-ai", "evaluation", "orq"]
stars: 21
forks: 1
openIssues: 6
closedIssues: 6
watchers: 0
contributors: 10
recentReleases: 6
createdAt: "2026-06-19T13:50:09Z"
lastCommitAt: "2026-10-09T10:49:57Z"
lastReleaseAt: "2026-08-07T15:40:19Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["Baukebrenninkmeijer", "dependabot[bot]", "currentlycodinng"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e39fd32e46601be67e3225f8bc04bdf36270ccff025f073e58dba737969f90/orq-ai/evaluatorq"
---

Shipping an agent means answering three questions no test suite answers: does it give good answers, can it be talked into doing something it shouldn't, and does it hold up over a real conversation with an impatient human? evaluatorq answers all three from Python. It scores your agent's outputs against your data, attacks it the way a bad actor would — jailbreaks, prompt injection, tool abuse, data exfiltration — and puts a simulated user in front of it for a few dozen turns. Then it hands you a report naming what broke and what to do about it.

It runs locally against any agent — LangChain, LangGraph, OpenAI Agents SDK, PydanticAI, CrewAI, a plain async function, or an Orq-hosted agent. Nothing leaves your machine unless you opt into the [Orq](https://orq.ai) platform.

## Install

```bash
uv add evaluatorq                     # core evaluation
uv add "evaluatorq[redteam]"          # + adversarial red teaming
uv add "evaluatorq[simulation]"       # + multi-turn agent simulation
uv add "evaluatorq[all]"              # everything, including the dashboard
```

New here? Take the first line — it and the quick start below need no API key and no account (set `ORQ_API_KEY` and results…
