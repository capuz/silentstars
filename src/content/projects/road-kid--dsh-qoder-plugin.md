---
repo: "road-kid/dsh-qoder-plugin"
name: "dsh-qoder-plugin"
description: "Connect Qoder models to DeepSeek Harness: call the same model service as the Qoder CLI with a PAT, supporting dual regions (China / international), model toggles, context windows, and daily check-in, and provide a read-only quota overview."
originalDescription: "把 Qoder 模型接入 DeepSeek Harness：用 PAT 调用与 Qoder CLI 同源的模型服务，支持国内版 / 国际版双区域、模型开关、上下文窗口与每日签到，并提供只读的额度概览。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/road-kid/dsh-qoder-plugin"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 26]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin", "llm", "model-provider", "qoder", "qoder-cn"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-27T08:03:55Z"
lastCommitAt: "2026-11-04T11:27:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["road-kid"]
openGraphImageUrl: "https://opengraph.githubassets.com/f14394a8f29a6a285e00e20bde16f23464fe94ce20a1ec5b6ae2b545d3425340/road-kid/dsh-qoder-plugin"
---

# dsh-qoder-plugin

[English](https://github.com/road-kid/dsh-qoder-plugin/blob/HEAD/README.en.md) | **Simplified Chinese**

Connect models from your **Qoder subscription** to [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH). Paste a personal access token (PAT) and you can select Qoder's models directly in DSH. No browser login flow is needed, and DSH's own conversation loop, compression, and permissions are unchanged.

The China edition (qoder.com.cn) and the international edition (qoder.com) are two separate entries, each with its own credentials, model catalog, and quota. They are never mixed. If you only use one edition, the other does not appear at all.

## What it does

- **Paste and go**: On the settings card, paste a PAT and click "Save". The plugin first validates the token against the matching region and saves it only if it passes. The model then appears in DSH's model picker, with no restart needed. You can later "Replace PAT" or "Clear PAT" at any time. A new token overwrites the old one only after it passes validation, so a mistyped paste will not lose a working credential.
- **Independent dual regions**: `qoder` (China edition) and…
