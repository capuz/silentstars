---
repo: "kdeps/kdeps"
name: "kdeps"
description: "AI Appliance Builder - YAML-defined AI agents and workflow pipelines. Ship as Docker, K8s, ISO, or a single binary."
readmeQualityOk: true
url: "https://github.com/kdeps/kdeps"
homepage: "https://kdeps.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["agent", "llms", "workflow", "yaml", "orchestration", "ai", "llamafile", "nvidia", "agentic", "gguf"]
stars: 37
forks: 5
openIssues: 15
closedIssues: 448
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-01T01:46:41Z"
lastCommitAt: "2026-09-11T08:15:02Z"
lastReleaseAt: "2025-02-02T00:43:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["jjuliano", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/836501717/81bba773-3b05-4680-9d12-d15b311c38e8"
discussionCount: 1
---

# kdeps

> Before moving on, please consider giving us a GitHub star ⭐️. Thank you!

**Git-native AI Appliance Builder** - your agent is YAML in your repo; ship the workflow, tools, and model as one self-contained deployment that runs anywhere.

kdeps packages an AI workload - agent or deterministic API, not a chatbot - into a unit you can run as a terminal REPL, an HTTP API, a Docker image, Kubernetes manifests, a bootable ISO, or a single binary. The definition is text you commit: reviewed as a pull request, versioned by git tag, built reproducibly from a commit in CI. Change the YAML, and the appliance behaves differently - your git history is the changelog of the agent's behavior. One YAML file replaces a Python script wiring together an LLM SDK, a web server, retry logic, and a Dockerfile. It runs open-source, self-hosted models by default, so the built appliance has no per-token cost and no dependency on an external AI service - it works the same on a laptop and inside an air-gapped network. kdeps is a small number of bounded pieces - pick the one you need:

- **[kdeps agent](https://kdeps.com/agent/)** - run `kdeps` and you are in an autonomous AI REPL: tool use, memory,…
