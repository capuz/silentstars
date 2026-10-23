---
repo: "withceleste/celeste-python"
name: "celeste-python"
description: "Open source, type-safe primitives for multi-modal AI. All modelities, all providers, one interface 🌟"
readmeQualityOk: true
url: "https://github.com/withceleste/celeste-python"
homepage: "https://withceleste.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "async", "developer-tools", "multimodal", "python", "sdk", "streaming", "type-safe"]
stars: 227
forks: 22
openIssues: 34
closedIssues: 72
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2025-10-28T16:58:00Z"
lastCommitAt: "2026-10-23T12:04:23Z"
lastReleaseAt: "2025-11-18T08:54:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 38
maintainers: ["Kamilbenkirane", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f8c3a14202234a297498af75c85842891ea1f1026d4c0435f3206f4f9c12ae/withceleste/celeste-python"
discussionCount: 1
---

# Celeste AI

**The primitive layer for multi-modal AI**

All modalities. All providers. One interface.

Primitives, not frameworks.

[Quick Start](#-quick-start) • [Request Provider](https://github.com/withceleste/celeste-python/issues/new)

# Celeste AI

Type-safe, modality/provider-agnostic primitives.

- **Unified Interface:** One API for OpenAI, Anthropic, Gemini, Mistral, and 14+ others.
- **True Multi-Modal:** Text, Image, Audio, Video, Embeddings, Search —all first-class citizens.
- **Type-Safe by Design:** Full Pydantic validation and IDE autocomplete.
- **Zero Lock-In:** Switch providers instantly by changing a single config string.
- **Primitives, Not Frameworks:** No agents, no chains, no magic. Just clean I/O.
- **Lightweight Architecture:** No vendor SDKs. Pure, fast HTTP.

## 🚀 Quick Start
```python
import celeste

# One SDK. Every modality. Any provider.
text   = await celeste.text.generate("Explain quantum computing", model="claude-opus-4-5")
image  = await celeste.images.generate("A serene mountain lake at dawn", model="flux-2-pro")
speech = await celeste.audio.speak("Welcome to the future", model="eleven_v3")
video  = await celeste.videos.analyze(video_file,…
