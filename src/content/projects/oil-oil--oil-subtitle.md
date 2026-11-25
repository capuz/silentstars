---
repo: "oil-oil/oil-subtitle"
name: "oil-subtitle"
description: "Subtitle skill for Claude Code & Codex: transcribe, proofread and burn subtitles. Help you add Chinese subtitles to videos."
originalDescription: "Subtitle skill for Claude Code & Codex: transcribe, proofread and burn subtitles. 帮你给视频加中文字幕。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/oil-subtitle"
homepage: "https://www.oiloil.org"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 24]
topics: ["agent-skill", "agent-skills", "asr", "captions", "claude-code", "claude-skills", "codex", "codex-skill", "ffmpeg", "skill"]
stars: 128
forks: 15
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-17T05:53:32Z"
lastCommitAt: "2026-11-25T03:19:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 11
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/98d3b013058a043f9683b6362b3557608be1e11223bb733a1613f23bb20b16bc/oil-oil/oil-subtitle"
---

# oil-subtitle

Transcribes, proofreads, previews and burns Chinese subtitles into local videos, with chapter progress and an English subtitle track on the same timeline.

It can also translate the proofread Chinese subtitles into an English SRT file while keeping the original timeline. When only the English subtitle file is requested, it does not start the preview, generate chapters, or burn the video.

[快速开始](#快速开始) · [工作流程](#工作流程) · [维护词库](#维护-hotwords-与-glossary) · [数据边界](#数据边界)

## Preview

The left side shows live subtitle and chapter progress in the preview. On the right, you can edit or delete individual lines, or run batch find-and-replace. After confirming, click "Save and close" to continue with burning. By default, a half-width space is inserted between Chinese characters and adjacent English or digits. The preview, the SRT/ASS files, and the final video all use the same rule.
