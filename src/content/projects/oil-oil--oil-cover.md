---
repo: "oil-oil/oil-cover"
name: "oil-cover"
description: "Video cover & thumbnail skill for Claude Code & Codex. Helps you make Xiaohongshu and Bilibili covers from video frames."
originalDescription: "Video cover & thumbnail skill for Claude Code & Codex. 帮你用视频画面做小红书和 B 站封面。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/oil-cover"
homepage: "https://www.oiloil.org"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 40]
topics: ["agent-skill", "agent-skills", "bilibili", "claude-code", "claude-skills", "codex", "codex-skill", "content-creation", "cover", "cover-design"]
stars: 309
forks: 31
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T10:05:48Z"
lastCommitAt: "2026-11-25T03:17:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 10
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/fced5c21e000b641eb1655763053e2313f0f825dad6c00a20294631061c14c26/oil-oil/oil-cover"
---

# oil-cover

Generates covers in three aspect ratios based on real video content, with frame selection analysis, title design, and optional creator avatar compositing.

Direction: **real screen evidence + Apple-like product visuals + clear titles + clean person-free composition**. The cover is generated as one complete image in a single pass, not assembled locally by overlaying text.

> Author: oil 欧呦（[@oil-oil](https://github.com/oil-oil)）

## Features

- **Fast video frame selection**: Local multi-threaded scanning and scoring filters out high-definition candidate frames, then a multimodal model selects by semantics. The entire video is not uploaded.
- **Complete visual spec**: `references/cover-rules.md` covers composition, background layers, font and titles, accents, automatic quality checks, and prompt skeletons.
- **Three aspect ratios and on-demand parallel subsets**: By default, generates Xiaohongshu `3:4` portrait, general/Bilibili homepage main cover `4:3` landscape, and `16:9` landscape in parallel. Also supports `--aspect both` (`3:4` + `4:3`), a single aspect ratio, or comma-separated combinations (e.g. `3x4,4x3`).
