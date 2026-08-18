---
repo: "yashimwong/penampakan"
name: "penampakan"
description: "Safe visual tool orchestration for text-only language models"
readmeQualityOk: true
url: "https://github.com/yashimwong/penampakan"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["javascript", "css", "html5", "challenge"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2020-09-26T15:22:34Z"
lastCommitAt: "2026-08-18T04:09:32Z"
lastReleaseAt: "2026-08-18T04:10:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 65
maintainers: ["yashimwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf32ef43a098c7c2e06ca223baa583b614c1d6dcec0f9796a15d055d3ab34ef5/yashimwong/penampakan"
---

# Penampakan

Penampakan is an async-first Python library that lets a text-only language
model reason about static images. It turns results from replaceable vision
backends into typed, attributable observations, then runs a bounded tool loop
that requires the model to cite those observations in its answer.

The package can also be used without a language model for deterministic image
inspection. Its built-in Pillow backend provides normalized metadata and
dominant colors; optional adapters add Tesseract OCR and local Transformers
captioning or detection.

Penampakan is currently alpha software.

Maintained guides: [product scope](https://github.com/yashimwong/penampakan/blob/HEAD/docs/product.md),
[architecture and ownership](https://github.com/yashimwong/penampakan/blob/HEAD/docs/architecture.md),
[public contracts](https://github.com/yashimwong/penampakan/blob/HEAD/docs/contracts.md), [runtime behavior](https://github.com/yashimwong/penampakan/blob/HEAD/docs/runtime.md), and
[quality/release gates](https://github.com/yashimwong/penampakan/blob/HEAD/docs/quality.md).

## Why Penampakan?

- Provider-neutral protocols for text LLMs and vision backends.
- Async clients and sessions,…
