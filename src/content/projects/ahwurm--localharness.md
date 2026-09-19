---
repo: "ahwurm/localharness"
name: "localharness"
description: "An open-source, model-agnostic agent harness for local LLMs. Define agents in YAML (tools, memory, deny-first permissions) and run them against any OpenAI-compatible endpoint: vLLM, Ollama, LM Studio, or llama.cpp."
readmeQualityOk: true
url: "https://github.com/ahwurm/localharness"
homepage: "https://localharness.dev"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "agent-framework", "ai-agents", "claude", "cost-optimization", "llama-cpp", "llm", "local-inference", "local-llm", "mit-license"]
stars: 36
forks: 4
openIssues: 4
closedIssues: 149
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-24T02:30:59Z"
lastCommitAt: "2026-09-19T02:43:08Z"
lastReleaseAt: "2026-07-12T22:03:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 49
maintainers: ["mjdufresne"]
openGraphImageUrl: "https://opengraph.githubassets.com/054b5c97ecfd76d274200ed122f118f305d552fb2bca9cebf9d6fc2e51d6cebd/ahwurm/localharness"
discussionCount: 3
---

# LocalHarness

**Run AI agents on the models you already run locally.**

LocalHarness does not serve models. It sits on top of the one you already serve — vLLM, llama.cpp, Ollama, or LM Studio — and gives it real agents: tools, memory, and permissions, written in YAML instead of Python.

Point it at any OpenAI-compatible endpoint and the same agent runs. One main agent reads your task and hands pieces to helpers, each working in its own fresh window with only the tools you allowed it.

The bet behind the project: most of what makes an agent good lives in the harness, not the model. The same model can swing tens of benchmark points depending on what is built around it.

Five things it does that are hard to find anywhere else:

- **It reads documents bigger than its own memory.** A long filing or contract is read in sections, start to finish — nothing is skipped and nothing is skimmed — and every number in the answer points back to the line it came from.
- **A web page cannot talk it into running commands.** Anything fetched off the internet is handled by a helper that has no power to run commands or change files. That wall is built into the structure, so it holds even when the…
