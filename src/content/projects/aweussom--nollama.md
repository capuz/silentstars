---
repo: "aweussom/NoLlama"
name: "NoLlama"
description: "NPU Ollama - An Ollama/OpenAI compatible API for Intel OpenVINO compatible computers"
readmeQualityOk: true
url: "https://github.com/aweussom/NoLlama"
language: "Python"
languages: ["Python"]
languagePcts: [68]
stars: 78
forks: 16
openIssues: 0
closedIssues: 16
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2026-04-12T09:27:07Z"
lastCommitAt: "2026-08-07T05:17:06Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 35
maintainers: ["aweussom", "ichtar", "yzc3582"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbb6e1cbabd510a2f93d029fb15a0e1709f5cb18735da74f809d79c7e0588107/aweussom/NoLlama"
---

# NoLlama

**Local LLM server for the full Intel stack.** NPU, ARC iGPU, ARC discrete, CPU.
OpenAI + Ollama APIs. One server, every Intel device.

No NVIDIA required. No Ollama install. No llama.cpp. **No problem.**

Runs on Intel Core Ultra laptops (NPU + ARC iGPU), desktops with ARC
discrete GPUs (A770, B580), or any Intel CPU. Automatically detects your
hardware, picks the best device, and exposes both OpenAI and Ollama
compatible APIs — so any client that speaks to either just works.

**It drives coding agents, too.** VS Code Copilot Chat and OpenClaw run against
NoLlama with local **tool-calling** on your Intel GPU or CPU — no cloud, no
NVIDIA. See [Agent tools & coding assistants](#agent-tools--coding-assistants-vs-code-copilot-openclaw).

## When to use NoLlama, and when to use Ollama

NoLlama is not trying to replace Ollama. It exists to cover the Intel
devices Ollama doesn't reach well. Pick per device, not per project:

| You want to run on | Use | Why |
|---|---|---|
| **Intel NPU** (Core Ultra "AI Boost") | **NoLlama** | Ollama can't target the NPU at all. This is NoLlama's reason to exist. |
| **Intel iGPU / ARC**, text | **NoLlama** (for now) | OpenVINO INT4 is ~1.6×…
