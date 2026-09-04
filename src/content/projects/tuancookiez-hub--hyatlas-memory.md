---
repo: "tuancookiez-hub/HyAtlas-Memory"
name: "HyAtlas-Memory"
description: "A plugin for Hermes to connect Hy-Memory as a memory provider as well as a dashboard view"
readmeQualityOk: true
url: "https://github.com/tuancookiez-hub/HyAtlas-Memory"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [47, 33]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-11T19:01:34Z"
lastCommitAt: "2026-09-04T08:11:02Z"
lastReleaseAt: "2026-07-07T20:55:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["tuancookiez-hub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1266587256/e775f590-57a4-48d0-b77b-a9c402f8be5d"
---

# HyAtlas v4 — Pure-Go Memory Core

> **One binary. Seven layers. Cross-platform.** Single 17.6 MB Go binary, no Python at runtime, in-process BGE embeddings, 7-layer memory model fully active. **Linux ✅ · macOS ✅ · Windows ✅.**

HyAtlas v4.0 is a complete rewrite of the HyAtlas memory system in pure Go. It replaces the Python floor (venv, zvec, Kuzu, FastAPI, HTTP embed subprocess) with a single binary: an embedded Chromem vector store, in-process BGE-small embeddings via onnxruntime-go, and async LLM fact extraction. The 7-layer memory model (Profile · Raw · Fact · Summary · Knowledge · Schema · Intention) is fully active — including L4 Summary extraction which was dormant in v3.5.

**Previous floor:** [HyAtlas v3.5.0](https://github.com/tuancookiez-hub/HyAtlas-Memory/releases/tag/v3.5.0) — Python/Zvec/Kuzu. See [V3_V4_COMPARISON.md](https://github.com/tuancookiez-hub/HyAtlas-Memory/blob/HEAD/V3_V4_COMPARISON.md) for the full side-by-side and [CHANGELOG.md](https://github.com/tuancookiez-hub/HyAtlas-Memory/blob/HEAD/CHANGELOG.md) for the migration history.

---

## Quick start (Linux / macOS / Windows)

### The one-liner (recommended)

```bash
curl -fsSL…
