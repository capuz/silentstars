---
repo: "opentalon/opentalon"
name: "opentalon"
description: "Open-source enterprise AI orchestration — built in Go to solve real enterprise problems, not toy demos."
readmeQualityOk: true
url: "https://github.com/opentalon/opentalon"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 13
closedIssues: 25
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-02-21T19:03:54Z"
lastCommitAt: "2026-10-07T10:30:27Z"
lastReleaseAt: "2026-10-06T07:44:00Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 63
maintainers: ["mscdit", "zhisme", "OpakAlex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163524450/a1f6c7b9-1a94-4d9c-bbfb-25c89f67a9cf"
---

# OpenTalon

**Open-source enterprise AI orchestration — built in Go to solve real enterprise problems, not toy demos.**

> 📚 **Looking for setup, deployment, scheduler, extensibility, or other detailed guides?** See the [**`docs/`**](https://github.com/opentalon/opentalon/blob/HEAD/docs/) directory.

---

## The big ideas behind OpenTalon

OpenTalon exists to solve **enterprise** issues — the gap between a chatbot demo and an AI system a real organization can actually depend on. Three ideas drive the design:

- 📘 **[Enterprise AI Orchestration](https://opakalex.github.io/posts/enterprise-ai-orchestration/)** — why one big LLM call is not an enterprise architecture, and how multi-provider routing, deterministic preprocessing, plugin isolation, and policy enforcement combine into a system that holds up in production.
- 📘 **[Expert-in-the-Loop (EITL)](https://opakalex.github.io/posts/expert-in-the-loop/)** — moving past "human-in-the-loop" rubber-stamping toward workflows where domain experts encode rules, gates, and review steps the system enforces deterministically — implemented in OpenTalon via [Tln workflows & EITL rules](#tln-workflows--eitl-rules).
- 🛠️ **LLMs write code,…
