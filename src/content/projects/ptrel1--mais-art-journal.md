---
repo: "ptrel1/mais_art_journal"
name: "mais_art_journal"
description: "A custom image generation plugin for MaiBot's Maibot plugin system, compatible with multiple APIs and local ComfyUI."
originalDescription: "基于 Maibot 插件的麦麦自定义生图插件，兼容多种 api 以及本地 ComfyUI。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ptrel1/mais_art_journal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-tools", "comfyui", "maibot-plugin", "pictures"]
stars: 14
forks: 11
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-05T09:31:27Z"
lastCommitAt: "2026-11-18T12:01:25Z"
lastReleaseAt: "2025-07-31T05:47:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 59
maintainers: ["Yae-Miko-Rabbit", "ptrel1", "Doulor"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d023d47f124792fb0ef3271d5c915c2fe330e9ce614333fd7bb404fe3421bd5/ptrel1/mais_art_journal"
---

Supports OpenAI-compatible services, NovelAI, Gemini, Doubao, Bailian, ComfyUI and other interfaces, and can work with MaiTrace for automatic selfies and proactive sharing.

## Quick Start

### 1. Install the Plugin

In the **MaiBot root directory**, run:

```shell
git clone https://github.com/ptrel1/mais_art_journal.git plugins/mais_art_journal
```

Choose one dependency installation command based on your system:

```shell
uv pip install --python .venv/Scripts/python.exe -r plugins/mais_art_journal/requirements.txt
```

```shell
uv pip install --python .venv/bin/python -r plugins/mais_art_journal/requirements.txt
```

Dependencies are installed into the Python environment used by MaiBot. For other environments, replace the `--python` path. After restarting MaiBot, `plugins/mais_art_journal/config.toml` is generated automatically. Doubao additionally requires the Ark SDK; see the dependency notes.

### 2. Enable and Configure Models

In the 'Getting Started' section of the plugin settings, **enable the plugin and save**. Open the 'Drawing Scroll Console' in the sidebar, then 'Model Services', and add or edit the service type, address, key, and model name for each model.
