---
repo: "junginho0901/Kubeast"
name: "Kubeast"
description: "Open-source multi-cluster Kubernetes console with an AI assistant that works within each user's permissions. Alert investigation, secret masking, audit log, MCP server, one-line Helm install."
readmeQualityOk: true
url: "https://github.com/junginho0901/Kubeast"
homepage: "https://junginho0901.github.io/Kubeast/"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [48, 42]
topics: ["ai-assistant", "devops", "helm", "k8s", "kubernetes", "kubernetes-dashboard", "llm", "mcp", "multi-cluster", "ollama"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-01-24T17:32:24Z"
lastCommitAt: "2026-11-09T04:34:18Z"
lastReleaseAt: "2026-10-27T12:14:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 68
maintainers: ["junginho0901"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1141342501/93ddb410-cd74-4fa9-91bc-d15f203591e5"
---

# <img src="frontend/public/icon.svg" alt="" width="40" height="40" align="top"> Kubeast

**English** | [한국어](https://github.com/junginho0901/Kubeast/blob/HEAD/README.ko.md)

A multi-cluster Kubernetes operations platform with a built-in AI assistant. In the web UI you can view and manage resources across multiple clusters (Workloads, Network, Storage, RBAC, GPU, Helm, etc.), and use LLM-based chat to view, diagnose and change resources.

Project site (feature clips): https://junginho0901.github.io/Kubeast/

Key features:

- AI assistant with multiple LLMs (OpenAI, Anthropic, Gemini, Azure OpenAI, Ollama) that operates clusters through tool calling
- When an alert from Alertmanager or Grafana arrives, the AI investigates it with read tools and leaves a report
- Multi-cluster management, RBAC per user and per cluster, and temporary access requests with approval
- Helm release management (rollback, upgrade, uninstall, test)
- GPU and DRA monitoring, Prometheus metrics, log search (Loki), topology visualization, Node Shell
- Audit log (hash chain) for every write and sensitive operation, and terminal session recording
- Passwords, keys and tokens in what the AI's tools read are…
