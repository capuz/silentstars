---
repo: "lucid-official/lucid"
name: "lucid"
description: "A deep learning framework for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/lucid-official/lucid"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["autograd", "deep-learning", "from-scratch", "apple-silicon", "metal", "lucid"]
stars: 6
forks: 3
openIssues: 44
closedIssues: 886
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2024-11-05T13:07:14Z"
lastCommitAt: "2026-11-15T08:10:07Z"
lastReleaseAt: "2026-09-26T22:29:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 93
maintainers: ["ChanLumerico", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fc773f9a951776bb23708eadda9c03130e24fc9b5fc9d901da48116578207c0/lucid-official/lucid"
discussionCount: 0
---

**[Documentation](https://lucid-official.github.io/lucid/docs)** ·
**[API Reference](https://lucid-official.github.io/lucid/api)** ·
**[Model Zoo](https://lucid-official.github.io/lucid/api/lucid.models)** ·
**[Architecture](https://lucid-official.github.io/lucid/architecture)** ·
**[Hugging Face](https://huggingface.co/ChanLumerico/lucid)** ·
**[Changelog](https://github.com/lucid-official/lucid/blob/HEAD/CHANGELOG.md)** ·
**[Contributing](https://github.com/lucid-official/lucid/blob/HEAD/CONTRIBUTING.md)**

---

Lucid is a deep learning framework for Apple Silicon, written from scratch. It gives you a
familiar Python API on top of a custom C++ engine that talks directly to Apple's hardware
stack — MLX on the GPU, Accelerate on the CPU — with no NumPy anywhere in the compute path.

It started as a framework you could read end to end, and it still is. What changed in 3.0 is
that it also became one you can train with: a rewritten C++ engine, 260+ registered ops,
mixed precision, an op-level profiler, and **hundreds of model implementations**, each one
built from its paper — and one you can ship from, with a native Core ML exporter that puts a
trained model on the **Neural Engine**.…
