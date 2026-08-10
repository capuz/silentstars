---
repo: "architectds/modeldock"
name: "modeldock"
description: "Keep everything in Codex - and add DeepSeek. Give DeepSeek eyes, ears, a voice, a web search, a memory, and the content-to-video skill. ModelDock focuses on one thing: making DeepSeek work natively inside Codex."
readmeQualityOk: true
url: "https://github.com/architectds/modeldock"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 93
forks: 10
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-19T21:57:40Z"
lastCommitAt: "2026-08-10T05:05:56Z"
lastReleaseAt: "2026-08-08T15:01:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["architectds", "Bruce-Yii"]
openGraphImageUrl: "https://opengraph.githubassets.com/047129d9072669566d2eec2df6561fd8fcf724a2604dbf6c25b11547f4ef0426/architectds/modeldock"
---

# Model Dock For Codex

Keep everything in Codex - and add DeepSeek. Give DeepSeek eyes, ears, a
voice, a web search, a memory, and the content-to-video skill. ModelDock
focuses on one thing: making DeepSeek work natively inside Codex.

A thin local Responses bridge for OpenCode Go and DeepSeek official, with
native GPT passthrough and live token, latency, and trace observability.

  English ·
</p>

</p>

</p>

</p>

## Why Model Dock For Codex

DeepSeek V4 Flash is fast and cheap, but it cannot see, speak, or listen, and
the OpenCode Go Responses endpoint it runs through has no hosted search (the
DeepSeek official endpoint does). Model Dock For Codex adds these as tools,
without rewriting the conversation history:

- **See** - paste an image into Codex and the request is routed to the vision
  model you chose in Settings, or let the model call `vision_inspect` on a
  screenshot or file.
- **Speak** - the `speak` tool turns text into a local audio file.
- **Hear** - the `hear` tool transcribes an audio file back to text.
- **Search** - the `web_search_exa` tool queries the web through Exa.
- **Remember** - `store_memory` and `recall_memory` give the model a lightweight…
