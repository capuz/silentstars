---
repo: "renezander030/capcut-cli"
name: "capcut-cli"
description: "Independent, unofficial CLI to edit CapCut and JianYing projects — subtitles, timing, speed, volume, templates, cut long-form to shorts. No API needed, reads draft_content.json directly. Not affiliated with ByteDance."
readmeQualityOk: true
url: "https://github.com/renezander030/capcut-cli"
homepage: "https://renezander.com"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [51, 46]
topics: ["capcut", "capcut-automation", "capcut-template", "claude-code-plugin", "jianying", "srt-export", "subtitle-editor", "capcut-api", "capcut-editor", "capcut-subtitles"]
stars: 385
forks: 59
openIssues: 5
closedIssues: 31
watchers: 2
contributors: 11
recentReleases: 2
createdAt: "2026-04-13T08:19:44Z"
lastCommitAt: "2026-08-28T12:23:34Z"
lastReleaseAt: "2026-06-03T15:22:17Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 30
maintainers: ["renezander030", "dependabot[bot]", "anupamme"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1209237271/ee0a6889-caff-4d6e-81e1-bf52f88392c2"
fundingLinks: ["GITHUB:https://github.com/renezander030"]
discussionCount: 3
---

</p>

# capcut-cli

English | [中文](https://github.com/renezander030/capcut-cli/blob/HEAD/README.zh-CN.md)

**Create and edit real CapCut / JianYing projects from the terminal — or any LLM agent.**

Open the result in CapCut with every track still editable. capcut-cli works directly on the local draft store: JSON in, JSON out, with no upload, API, MCP server, or HTTP daemon.

`raw recording` → `silence-aware cuts + styled captions` → `editable CapCut / JianYing draft`

[**▶ Watch a captioned output example (60 seconds)**](https://github.com/renezander030/capcut-cli/blob/HEAD/media/two-sisters-vietnam-short.mp4)

## Install and open your first editable draft

**Prerequisites:** Node ≥ 18 (built-ins only — no native modules). Optional tools unlock specific commands: Whisper for `caption`, FFmpeg for `render`, ffprobe for automatic media metadata, and `ANTHROPIC_API_KEY` for `translate`.

```bash
npm install -g capcut-cli
```

```bash
capcut doctor
capcut quickstart my-first --video clip.mp4 --srt captions.srt
capcut info ./my-first/ -H
```

**Result:** a real local project with video and captions on editable tracks — not a flattened export. Open it in CapCut or JianYing to review,…
