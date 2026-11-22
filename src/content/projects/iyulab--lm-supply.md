---
repo: "iyulab/lm-supply"
name: "lm-supply"
description: ".NET library for on-demand local AI model inference — zero bundled models, lazy loading, hardware-aware GPU/CPU selection, 10 task types including embeddings, generation, vision, and audio."
readmeQualityOk: true
url: "https://github.com/iyulab/lm-supply"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["ai", "dotnet", "llm", "local-inference", "machine-learning", "nuget"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-13T03:41:18Z"
lastCommitAt: "2026-11-22T11:45:34Z"
lastReleaseAt: "2026-01-07T07:17:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["birdnamoo", "zizixmas"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd600feb5857a6690c97e21442350d5b9310d18c85eb768590474aa1d7bf018f/iyulab/lm-supply"
---

# LMSupply

**Local Model Supply for .NET — on-demand AI inference**

> Start small. Download what you need. Run locally.

```csharp
// This is all you need. No setup. No configuration. No API keys.
await using var model = await LocalEmbedder.LoadAsync("auto");  // Hardware-optimized selection
float[] embedding = await model.EmbedAsync("Hello, world!");
```

LMSupply is designed around three core principles:

### 🪶 Minimal Footprint
Your application ships with **zero bundled models**. The base package is tiny. Models, tokenizers, and runtime components are downloaded **only when first requested** and cached for reuse.

### ⚡ Lazy Everything
```
First run:  LoadAsync("default") → Downloads model → Caches → Runs inference
Next runs:  LoadAsync("default") → Uses cached model → Runs inference instantly
```
No pre-download scripts. No model management. Just use it.
