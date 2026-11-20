---
repo: "Faisal-Fayaz/sidekick"
name: "sidekick"
description: "Sidekick - local-first terminal companion agent "
readmeQualityOk: true
url: "https://github.com/Faisal-Fayaz/sidekick"
homepage: "https://faisal-fayaz.github.io/sidekick/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 7
forks: 3
openIssues: 26
closedIssues: 224
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-19T07:17:35Z"
lastCommitAt: "2026-11-20T12:18:33Z"
lastReleaseAt: "2026-09-23T15:52:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 70
maintainers: ["Faisal-Fayaz"]
openGraphImageUrl: "https://opengraph.githubassets.com/13e4b0ed4c7924d908da99e6b745388e35e04b8761ee7cda655b3a90def85dcd/Faisal-Fayaz/sidekick"
discussionCount: 0
---

# Sidekick

**A local-first terminal agent for developers — chat, code, and 27 tools, on your hardware.**

*No cloud account required. No API bill by default. Your files, memory, and voice stay on your machine unless you hand it a key.*

```bash
uv tool install "sidekick-agent[voice]" && sk init && sk
```

## Quickstart

```bash
uv tool install "sidekick-agent[voice]"   # global `sk`, local STT included
sk init                                    # hardware → model → verify → web search
sk                                         # fullscreen chat
```

Requires Python 3.12+. The local path needs Ollama (`ollama serve`). `sk init`
checks your hardware, suggests a model that fits, and verifies the connection.
Any OpenAI-compatible endpoint also works — bring a key or point Sidekick at a
local server.
