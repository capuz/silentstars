---
repo: "Matlan1/localm"
name: "localm"
description: "Run local LLMs fully offline - chat, coding agent, image, music, video generation, knowledge/RAG, voice. Privacy-first, with GUI and CLI, no cloud required."
readmeQualityOk: true
url: "https://github.com/Matlan1/localm"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["coding-agent", "gguf", "llama-cpp", "llm", "mcp", "offline-first", "ai-assistant", "local-llm", "privacy", "rag"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-08T06:50:48Z"
lastCommitAt: "2026-11-13T11:22:09Z"
lastReleaseAt: "2026-10-15T06:29:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["Matlan1"]
openGraphImageUrl: "https://opengraph.githubassets.com/348957f572e562e0104cc905008b5ae99b87739083e51f7a934434e4826c34ad/Matlan1/localm"
discussionCount: 1
---

At its core LocaLM is a **model loader plus a plugin engine**: GGUF and HuggingFace models ([which ones](https://github.com/Matlan1/localm/blob/HEAD/docs/models.md)) through an OpenAI-compatible server, with chat always on and everything else - the coder agent, image/music/video generation, Knowledge (RAG), durable memory, voice, scheduled jobs, and MCP - a plugin you install when you want it. See [Offline first](#features) for exactly what does and does not touch the network.

## Quick start

```bash
# Install (Linux/macOS) - or on Windows, clone and double-click setup.bat
curl -fsSL https://raw.githubusercontent.com/Matlan1/localm/master/install.sh | bash

localm pull owner/repo:model-Q4_K_M.gguf   # Download a GGUF from HuggingFace
localm gui                                  # Chat + coder + plugins in your browser
localm run mymodel --prompt "Explain RDNA2" # Offline terminal chat or single prompt
localm serve mymodel                        # OpenAI-compatible API server
```

The one-click install puts `localm` in `~/localm`, not on your PATH: run `~/localm/localm.sh <args>` (on Windows, `localm.bat <args>` from the clone), or answer `y` to "Make 'localm' runnable from any…
