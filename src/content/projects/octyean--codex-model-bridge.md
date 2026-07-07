---
repo: "octyean/codex-model-bridge"
name: "codex-model-bridge"
description: "An efficient and powerful compatibility layer that allows you to conveniently use large models like DeepSeek, Mimo, and Kimi in Codex."
originalDescription: "一个高效且强大的兼容层，让您便捷的在Codex中使用DeepSeek、Mimo、Kimi等大模型"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/octyean/codex-model-bridge"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-14T08:36:59Z"
lastCommitAt: "2026-07-07T06:36:56Z"
lastReleaseAt: "2026-06-30T06:08:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/96b66be0c53200fda3ae63a198d12919e28419700a2d3faa04818984469a4c74/octyean/codex-model-bridge"
---

# codex-bridge

`codex-bridge` is a model bridge for Codex CLI / Codex App.

It connects OpenAI-compatible models like DeepSeek, Kimi, Qwen, and Mimo to Codex, allowing them to continue using the native capabilities reserved for GPT in Codex: `apply_patch`, `web_search`, `tool_search`, `local_shell`, `function`, `custom`, image input, model directory, and reasoning configuration.

```text
Codex CLI / App
  -> codex-bridge /v1/responses
  -> OpenAI-compatible upstream
  -> model
```

## What it can do

- Allows third-party models to call `apply_patch` in Codex, enabling the creation, modification, and deletion of files.
- Keeps Codex native capabilities like `web_search`, `tool_search`, `local_shell`, `function`, and `custom` available.
- Enables Codex App to recognize `display_name`, context window, tool capabilities, and image capabilities in the model directory.
- Automatically reads the upstream `/models` and adds requestable models to the Codex model directory.
- Allows text-only models to also accept images: first read the image, then convert the content to text for the model.
- Lets OpenAI native GPT / o series models use the native `/responses`, preserving `reasoning` and…
