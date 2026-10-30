---
repo: "ParisNeo/lollms_client"
name: "lollms_client"
description: "A client to lollms server written in python"
readmeQualityOk: true
url: "https://github.com/ParisNeo/lollms_client"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-30T19:02:23Z"
lastCommitAt: "2026-10-30T10:23:01Z"
lastReleaseAt: "2025-03-05T21:31:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 67
maintainers: ["ParisNeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/045fd748c77809602cc3c102c644f3805085048a2fccdedacc4112b9c6844a84/ParisNeo/lollms_client"
---

# LoLLMs Client Library

**`lollms_client`** is a powerful and flexible Python library designed to simplify interactions with the **LoLLMs (Lord of Large Language Models)** ecosystem and various other Large Language Model (LLM) backends. It provides a unified API for text generation, multimodal operations (text-to-image, text-to-speech, etc.), and robust function calling through the Model Context Protocol (MCP).

Whether you're connecting to a remote LoLLMs server, an Ollama instance, the OpenAI API, or running models locally using GGUF (via `llama-cpp-python` or a managed `llama.cpp` server), Hugging Face Transformers, or vLLM, `lollms-client` offers a consistent and developer-friendly experience.

> ### ⚡ TL;DR — Zero-Config Client in One Line
>
> Configure your machine **once** with the built-in wizard (`python -m lollms_client.lollms_config_cli_env`), then any app on that machine gets a **fully-armed client — text, images, audio, everything** — with a single line:
>
> ```python
> from lollms_client.lollms_config_cli_env import get_client_from_env
>
> client = get_client_from_env(create_tti=True, create_tts=True, create_stt=True)
> ```
>
> One centralized config file…
