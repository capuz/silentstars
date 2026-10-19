---
repo: "Leosu16/enableMacSiriAI"
name: "enableMacSiriAI"
description: "Manages and locks the country-code cache for non-mainland-China-market Apple Silicon Macs used in mainland China, without disabling SIP, helps enable Siri AI, and restores regional availability of overseas Maps and News."
originalDescription: "为在中国大陆使用的外版 Apple Silicon Mac 管理并锁定国家码缓存，无需关闭 SIP，帮助启用 Siri AI，并恢复海外版 Maps 与 News 的地区可用性。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Leosu16/enableMacSiriAI"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-11T10:05:53Z"
lastCommitAt: "2026-10-19T09:14:12Z"
lastReleaseAt: "2026-08-13T01:37:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 65
undervaluedScore: 37
maintainers: ["Leosu16"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e26092366d70720dd465b00d5c0d4cabee24128f8a510fa03982b7d3be9890f/Leosu16/enableMacSiriAI"
---

# enableMacSiriAI

`enableMacSiriAI` is intended for users in mainland China who use non-China-market Apple Silicon Macs. It can read, modify, lock, and restore the macOS country code cache without disabling SIP and without installing kernel extensions. After setting the country code to a supported overseas region, it can also restore regional availability of overseas Apple Maps and Apple News.

[English README](https://github.com/Leosu16/enableMacSiriAI/blob/HEAD/README_EN.md)

> [!WARNING]
> This is an unofficial experimental tool. Modifying the country code cache may affect Maps, location services, content availability, and other regional features, and it cannot guarantee that Apple Intelligence or Siri AI will be available.

## Requirements

- macOS 27
- Apple Silicon Mac
- A device sold outside mainland China
- An administrator account

This tool does not support China-market Macs. When it encounters an unsupported device or an unrecognized cache format, it refuses to make changes.

## Quick Start

Download the project, open Terminal in the project directory, then run:

```bash
chmod +x enableMacSiriAI
./enableMacSiriAI
```

Select a country or action in the menu:

- `1` —…
