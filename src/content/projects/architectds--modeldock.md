---
repo: "architectds/modeldock"
name: "modeldock"
description: "Keep everything in Codex - and add DeepSeek. Give DeepSeek eyes, ears, a voice, a web search, a memory, and the content-to-video skill. ModelDock focuses on one thing: making DeepSeek work natively inside Codex."
readmeQualityOk: true
url: "https://github.com/architectds/modeldock"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 116
forks: 14
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-19T21:57:40Z"
lastCommitAt: "2026-08-19T04:08:54Z"
lastReleaseAt: "2026-08-08T15:01:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["architectds", "jt-wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8f983d68e6e4e438bdfd98085e5437fa8b0c88ec4b170c7fbb1365e98b4bdbe/architectds/modeldock"
---

# Model Dock For Codex

Keep everything in Codex - and add DeepSeek. Give DeepSeek eyes, ears, a
voice, a web search, and a memory. ModelDock focuses on one thing: making
DeepSeek work natively inside Codex.

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
- **Remember** - `store_memory`, `recall_memory`, and `learn` give the model a
  lightweight cross-session memory: store…
