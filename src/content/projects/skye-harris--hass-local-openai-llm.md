---
repo: "skye-harris/hass_local_openai_llm"
name: "hass_local_openai_llm"
description: "Home Assistant LLM integration for local OpenAI-compatible services (llamacpp, vllm, etc)"
readmeQualityOk: true
url: "https://github.com/skye-harris/hass_local_openai_llm"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["home-assistant", "homeassistant", "homeassistant-integration", "openai-api", "openai-compatible", "conversation-agent", "llamacpp", "vllm", "ai-agents", "ai-assistant"]
stars: 255
forks: 39
openIssues: 6
closedIssues: 66
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2025-10-18T03:43:16Z"
lastCommitAt: "2026-08-08T04:33:07Z"
lastReleaseAt: "2025-11-26T12:38:37Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 34
maintainers: ["skye-harris", "NickM-27", "BryanCLieberman"]
openGraphImageUrl: "https://opengraph.githubassets.com/a740ce3983180736879221226e84ae6798c5766ad05c054160bf52829fdc1981/skye-harris/hass_local_openai_llm"
discussionCount: 3
---

# Local OpenAI LLM <small>_(Custom Integration for Home Assistant)_</small>

**Allows use of generic OpenAI-compatible LLM services, such as (but not limited to):**

- llama.cpp
- vLLM
- LM Studio
- Ollama
- OpenRouter
- Requesty
- Scaleway
- DeepSeek
- LocalAI

**This integration has been forked from Home Assistants OpenRouter integration, with the following changes:**

- Added server URL to the initial server configuration
- Made the API Key optional during initial server configuration: can be left blank if your local server does not require one
- Uses streamed LLM responses
- Conversation Agents support TTS streaming
- Automatically strips `<think>` tags from responses
- Added support for image inputs for AI Task entities
- Added support for reconfiguring Conversation Agents
- Added option to trim conversation history to help stay within your context window
- Added temperature control
- Added option to strip emojis from responses
- Added support for parallel tool calling
- Added experimental Retrieval Augmented Generation capability
- Added chat template arguments support
- Added image generation support for AI Task entities
- Added tools support for Generate Data actions for…
