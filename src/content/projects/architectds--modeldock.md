---
repo: "architectds/modeldock"
name: "modeldock"
description: "Keep everything in Codex - and add DeepSeek. Give DeepSeek eyes, ears, a voice, a web search, a memory, and the content-to-video skill. ModelDock focuses on one thing: making DeepSeek work natively inside Codex."
readmeQualityOk: true
url: "https://github.com/architectds/modeldock"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 115
forks: 14
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-19T21:57:40Z"
lastCommitAt: "2026-08-21T04:10:00Z"
lastReleaseAt: "2026-08-08T15:01:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["architectds", "jt-wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/25bb34d7f352f9b71cce1be8b34ce147ca199dd294ea9e3638f204f4ef6a6ff5/architectds/modeldock"
---

# Model Dock For Codex

Keep everything in Codex - and add the models it does not ship with. Give
DeepSeek, Qwen, or a model running on your own machine eyes, ears, a voice, a
web search, and a memory, without leaving Codex.

A thin local Responses bridge for OpenCode Go, DeepSeek official, and local
engines - Ollama, llama.cpp, and vLLM are detected on loopback, and any other
OpenAI-compatible endpoint can be added by URL - with native GPT passthrough
and live token, latency, and trace observability.

  English ·
</p>

</p>

</p>

</p>

## Why Model Dock For Codex

DeepSeek V4 Flash is fast and cheap, but it cannot see, speak, or listen, and
the OpenCode Go Responses endpoint it runs through has no hosted search (the
DeepSeek official endpoint does). A Qwen or any other model you host yourself
has the same gaps. Model Dock For Codex adds these as tools,
without rewriting the conversation history:

- **See** - paste an image into Codex and the request is routed to the vision
  model you chose in Settings, or let the model call `vision_inspect` on a
  screenshot or file.
- **Speak** - the `speak` tool turns text into a local audio file.
- **Hear** - the `hear` tool transcribes an…
