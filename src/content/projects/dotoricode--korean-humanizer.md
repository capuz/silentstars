---
repo: "dotoricode/korean-humanizer"
name: "korean-humanizer"
description: "Korean humanizer prompt and skill for removing the usual AI smell from generated writing."
readmeQualityOk: true
url: "https://github.com/dotoricode/korean-humanizer"
homepage: "https://github.com/dotoricode/korean-humanizer/wiki"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [59, 41]
topics: ["ai-writing", "claude", "humanizer", "korean", "korean-nlp", "llm", "prompt-engineering", "ai-detection", "claude-code", "claude-skill"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T05:47:34Z"
lastCommitAt: "2026-10-01T10:24:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["dotoricode", "shesl-tinkerland"]
openGraphImageUrl: "https://opengraph.githubassets.com/f417313c8a3765043d7931eeddf9bb58a1165009477990c2107ec6051618abea/dotoricode/korean-humanizer"
---

# korean-humanizer

> A skill and prompt for editing awkward Korean AI prose while preserving meaning.

[한국어](https://github.com/dotoricode/korean-humanizer/blob/HEAD/README.ko.md) · [中文](https://github.com/dotoricode/korean-humanizer/blob/HEAD/README.zh-CN.md)

The last released version is **v1.0.1**. This document describes **unreleased 2.0 preparation**. See the [1.x compatibility promise](https://github.com/dotoricode/korean-humanizer/blob/HEAD/docs/STABILITY-PROMISE.md) and [migration draft](https://github.com/dotoricode/korean-humanizer/blob/HEAD/docs/MIGRATION-1.x-to-2.x.md).

The catalog provides context-dependent editing candidates, not words to replace in every sentence. Preserve facts, tone, uncertainty and conditions; leave already natural text unchanged.

---

## Recorded model comparison

These are first final responses from native `/korean-humanizer` and `$korean-humanizer` calls on 2026-10-01. The request contains no injected skill/catalog text or answer hints. Outputs were not rewritten after the response; diff blocks extract only the response bodies. Both CLIs selected `medium` effort.

### Linkedin

**Claude Code + Opus 5.5**

```diff
- 이번 프로젝트를 통해 다양한 기술적 도전을…
