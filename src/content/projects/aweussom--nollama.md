---
repo: "aweussom/NoLlama"
name: "NoLlama"
description: "NPU Ollama - An Ollama/OpenAI compatible API for Intel OpenVINO compatible computers"
readmeQualityOk: true
url: "https://github.com/aweussom/NoLlama"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 132
forks: 19
openIssues: 7
closedIssues: 38
watchers: 4
contributors: 5
recentReleases: 5
createdAt: "2026-04-12T09:27:07Z"
lastCommitAt: "2026-11-04T11:26:58Z"
lastReleaseAt: "2026-10-29T12:12:19Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["aweussom", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eef39654b4fdf32f2ba58443b9c050eea4eaa6e6ececc3516f9aff8e2aca3ef/aweussom/NoLlama"
discussionCount: 2
---

# NoLlama

**Local LLM server for the full Intel stack.** NPU, ARC iGPU, ARC discrete, CPU.
OpenAI + Ollama APIs. One server, every Intel device.

No NVIDIA required. No Ollama install. No llama.cpp. **No problem.**

It detects your hardware, picks the best device, and speaks both OpenAI and
Ollama APIs — so any client that talks to either just works. It drives coding
agents too: OpenCode, Goose and VS Code Copilot Chat run against it with local
**tool-calling** on your Intel GPU or CPU.

## Quick start

**No git?** Grab the [latest release ZIP](https://github.com/aweussom/NoLlama/releases/latest),
unzip, then double-click **`install-windows.bat`** (Windows) or run
**`./install-linux.sh`**. Both check for PowerShell 7 and Python 3.10+ and offer
to install what's missing.

Already have those, or cloned the repo:

```powershell
.\install.ps1     # detects hardware, pick a model, writes start.ps1
.\start.ps1       # then open http://localhost:8000
```

Needs Intel hardware, Python 3.10+, PowerShell 7+. Windows and Linux both work.
Details in [docs/DEVICES.md](https://github.com/aweussom/NoLlama/blob/HEAD/docs/DEVICES.md).

## Use it from anything

Point any OpenAI client at…
