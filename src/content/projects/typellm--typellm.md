---
repo: "TypeLLM/TypeLLM"
name: "TypeLLM"
description: "TypeLLM: LLMs with type-safe generation"
readmeQualityOk: true
url: "https://github.com/TypeLLM/TypeLLM"
homepage: "https://typellm.ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "types", "llms", "jev"]
stars: 217
forks: 17
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-09-17T12:41:27Z"
lastCommitAt: "2026-09-25T09:01:57Z"
lastReleaseAt: "2026-09-25T07:41:42Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 35
maintainers: ["zmtomorrow", "rejojer"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f84e12ec68378014a601aff46e74bf5170460330eb34c80fd3f839cbfd5f237/TypeLLM/TypeLLM"
---

# TypeLLM: LLMs with type-safe generation

<h4 align="center">
</h4>
</div>

## Updates

- **[2026/09/24]** Added [image input](#image-input) for vision-language models, tested with Qwen3.8-27B.
- **[2026/09/23]** Added [JevBench results](https://github.com/TypeLLM/TypeLLM/blob/main/evals/jevbench/README.md): TypeLLM scored 195/231 without thinking and 228/231 with thinking.
- **[2026/09/23]** Added [permutation averaging](#per-question-permutation-averaging) to improve the predictive distribution. See the [blog post](https://typellm.ai/blog/fair-die).
- **[2026/09/22]** Added `depends_on` dependency graphs with incremental prefix reuse. See the [blog post](https://typellm.ai/blog/type-safe-workflow).
- **[2026/09/19]** Added optional [thinking mode](#thinking-mode) with a per-field budget.
- **[2026/09/18]** Added constrained `integer` and `number` outputs.

## Introduction

TypeLLM brings type-safe generation to existing autoregressive LLMs without changing their architecture or weights. Inspired by [TypeSafe AI's Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), it lets models retain their native thinking and free-form generation while producing…
