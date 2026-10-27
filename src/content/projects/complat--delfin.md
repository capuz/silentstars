---
repo: "ComPlat/DELFIN"
name: "DELFIN"
description: "Computational Chemistry Meets Agentic Machine Learning"
readmeQualityOk: true
url: "https://github.com/ComPlat/DELFIN"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agents", "computational-chemistry", "smiles", "inverse-design"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 10
recentReleases: 3
createdAt: "2025-09-19T07:03:55Z"
lastCommitAt: "2026-10-27T09:17:01Z"
lastReleaseAt: "2026-09-19T13:09:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 74
maintainers: ["hmaximilian", "koehlet"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd7c6315cf3a35f7b4cc632c96c6bbedfe36b6263c920187299b12f7f4f4460d/ComPlat/DELFIN"
---

**DELFIN** is an open-source, AI-orchestrated computational chemistry platform for automated molecular property prediction and inverse molecular design. Behind a single **SMILES-in / property-out** interface, it connects structure generation, quantum-chemistry workflows, machine-learning potentials, interactive dashboards, automated reports, and AI agents into one practical research platform.

**DELFIN is operated by AI agents.** They configure and submit calculations, monitor them, interpret the outputs, and modify DELFIN's own code where a workflow has to be extended. Work that stands on its own is delegated to subagents running in parallel, each with its own tools and permissions.

Hosted models (Claude, OpenAI, KIT Toolbox) and local open-source models (Ollama, vLLM, LM Studio) are supported alike. With a local model server the model calls stay on your own hardware; what else reaches the network, and how to run without outside access, is listed under [Network access and offline use](#network-access-and-offline-use). The agents' shell commands run under bubblewrap or Landlock on Linux, or Seatbelt on macOS, where the host supports one of them; on a host where none works they…
