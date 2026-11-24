---
repo: "randomNinja64/SimpleLLMChat"
name: "SimpleLLMChat"
description: "Simple LLM Chat Client (CLI and GUI written targeting .NET 4)"
readmeQualityOk: true
url: "https://github.com/randomNinja64/SimpleLLMChat"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-03T19:29:06Z"
lastCommitAt: "2026-11-24T14:05:42Z"
lastReleaseAt: "2026-01-28T22:12:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 74
maintainers: ["randomNinja64"]
openGraphImageUrl: "https://opengraph.githubassets.com/e145a6dccb9b894a0f474c33bdcdd76960eb382731413f0372d57393ae09379f/randomNinja64/SimpleLLMChat"
---

## About

SimpleLLMChat is a lightweight C# CLI and GUI application that makes LLMs accessible on both legacy and modern Windows systems. The software is designed to work with OpenAI-compatible endpoints and can be extended via a tool system.

## Features
- **Customizable GUI** - The GUI's colors and fonts can be customized.
- **GUI/CLI Modes** - The software can be used either via its REPL CLI or a GUI wrapper.
- **Image Support** - Images can be passed to supported models via both the CLI and GUI.
- **Markdown Rendering** - The GUI can render Markdown formatting for easier reading.
- **OpenAI-Compatible Endpoint Support** - In addition to OpenAI, any service/server offering the OpenAI v1 chat endpoint can be used, including [llama.cpp](https://github.com/ggerganov/llama.cpp) and [LM Studio](https://lmstudio.ai/).
- **Retrieval Augmented Generation (RAG)** - Retrieve information from documents via a local knowledge folder (see [RAG](#rag)).
- **Script-Friendly** - Output without tool calls, tool outputs, and reasoning can be piped out of the CLI using the `-o` or `--output-only` flag. **Note**: Tool calls requiring manual approval will automatically be denied.
