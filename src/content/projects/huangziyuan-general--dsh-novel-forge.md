---
repo: "huangziyuan-general/dsh-novel-forge"
name: "dsh-novel-forge"
description: "AI writing long novels fails in four ways: the setting collapses, earlier text is forgotten, padding inflates the word count, and pages fill with AI-sounding prose. This plugin blocks all four in code. No chapter gets written until its detailed outline is approved, changes to a set value are rejected outright, repeated sentences and paragraphs are caught by automated review, and the six-dimension de-AI-flavor scan uses zero tokens. The right-sidebar Forge panel offers read-aloud, whole-book health checks, and batch drafting with resumable breakpoints. It provides 20 novel_* tools. You just tell the story, and code handles the gatekeeping. Novel-writing guardrails plugin for DeepSeek Harness (DSH)."
originalDescription: "AI 写长篇的四个死法：设定崩、看不见前文、水文超字数、满屏 AI 味——这个插件全用代码堵死。细纲不批准就不给写章，设定改值直接拒绝，重复句段机审拦下，六维去 AI 味扫描零 token。右侧栏锻炉面板带听书、全书体检、批量起草断点续跑；20 个 novel_* 工具，你只管讲故事，把关交给代码。Novel-writing guardrails plugin for DeepSeek Harness (DSH)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/huangziyuan-general/dsh-novel-forge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["dsh-plugin", "novel-writing", "ai-writing", "chinese", "deepseek", "guardrails", "writing-tools"]
stars: 40
forks: 6
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-11T16:44:18Z"
lastCommitAt: "2026-11-06T11:23:09Z"
lastReleaseAt: "2026-10-10T01:42:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 40
maintainers: ["huangziyuan-general"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f81ed6f34142b92e7382e403edb69ecf76226aa91023a37cfc4cd84fbf94b0f/huangziyuan-general/dsh-novel-forge"
discussionCount: 1
---

# dsh-novel-forge · Novel Forge

> Chinese docs | [English](https://github.com/huangziyuan-general/dsh-novel-forge/blob/HEAD/README.en.md)

  [](https://github.com/huangziyuan-general/dsh-novel-forge/actions/workflows/ci.yml)

A Chinese-language long-form novel writing plugin for DeepSeek Harness (DSH). It is not a 'prompt collection'. Instead, it builds **consistency, gating, and auditing** into the tool layer and data layer: the model handles drafting, while the plugin blocks anything broken, distorted, or overflowing before it is written to disk.

**Who it's for:** Long-form authors with multiple characters, multiple volumes, or serials of dozens or hundreds of chapters, who get stuck on 'the setting collapsed', 'forgot earlier text', 'suspense spoiled', or 'too much AI flavor'.

**One-line pitch:** All key constraints are coded: changing a value within the same chapter is rejected as a conflict, hidden characters never enter the context, an outline missing a scene gets the draft rejected, old versions are never overwritten, and long-text retrieval runs locally with zero dependencies.

[Quick start](#快速开始约-5-分钟) | [UI overview](#界面一览) | [Hard constraints table](#ai-写作通病与硬约束) |…
