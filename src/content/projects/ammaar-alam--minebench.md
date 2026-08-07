---
repo: "Ammaar-Alam/minebench"
name: "minebench"
description: "Minecraft-style voxel benchmark for comparing AI models (Arena + Sandbox)"
readmeQualityOk: true
url: "https://github.com/Ammaar-Alam/minebench"
homepage: "https://minebench.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "benchmark", "llm", "nlp", "voxel", "comparison-benchmarks", "lmarena", "minecraft"]
stars: 302
forks: 22
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 7
recentReleases: 7
createdAt: "2026-01-08T19:01:45Z"
lastCommitAt: "2026-08-07T05:15:10Z"
lastReleaseAt: "2026-07-26T22:14:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 34
maintainers: ["Ammaar-Alam", "Dair133", "erik-d123"]
openGraphImageUrl: "https://opengraph.githubassets.com/18cdd189c8f686ad30f3d1a3945872166eb80919ae760342c9de3812986d6146/Ammaar-Alam/minebench"
discussionCount: 0
---

</a>
</p>

</p>

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

---

# MineBench

**A benchmark for evaluating AI spatial reasoning through Minecraft-style voxel construction.**

Models are given a natural-language prompt and must produce raw 3D coordinates as JSON. In tool mode, models call `voxel.exec` (minimal primitives: `block`, `box`, `line`) to generate large builds beyond token-only JSON limits. MineBench visualizes the output and ranks models via head-to-head voting with a confidence-aware Glicko-style system (public ordering by conservative score).

**[Try it live](https://minebench.ai)**

## Why MineBench?

Most LLM benchmarks test text and raw accuracy. MineBench instead tests whether a model can reason about 3D space. Given a prompt like "a medieval castle with four towers", the model must mentally construct geometry, pick materials, and output thousands of precise block coordinates. No vision model or diffusion – just math and spatial logic.

As it turns out, this kind of spatial reasoning correlates strongly with a model's raw general intelligence; the MineBench leaderboard tracks, anecdotally, the same hierarchy that most people observe in real-world usage: the smartest…
