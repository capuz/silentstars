---
repo: "ridit-jangra/Miles"
name: "Miles"
description: "Vibe Talking."
readmeQualityOk: true
url: "https://github.com/ridit-jangra/Miles"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 49]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-04-06T05:50:53Z"
lastCommitAt: "2026-10-25T08:40:46Z"
lastReleaseAt: "2026-08-03T11:47:46Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 74
undervaluedScore: 51
maintainers: ["ridit-jangra"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ed2a149ae93638cd4913846effb427cd5e24747bd673c2d82dd0b586901bd62/ridit-jangra/Miles"
---

# Miles

A voice harness that runs on your machine with multiple `tts`, `stt` & `llm` providers to choose from. You talk to it and it talks back. it can handle subagents, multiple tool calling, calling subagents in parallel while you keep chatting with it.

Built on [Pipecat](https://github.com/pipecat-ai/pipecat). `TTS (Text to Speech)`, `LLM (Large Language Model)` & `STT (Speech to Text)` are all swappable through `config.toml`.
Miles can get more tools, mcps & subagents through plugins. Miles is shipped with no plugins so its zero bloat.

## Features

- **Customiziblity:** choose any provider you like, change it in `config.toml` and miles adapts to it. Miles auto-installs it and auto download its models.
- **Background agents:** Miles can spawn background agents to do longer tasks or do things it can't do itself, so you can keep chatting with it while it does the work in background.
- **Memory:** Miles can remember the facts you tell him to remember and it can remember facts from your conversations (you can turn off auto remember from `config.toml`).
- **Alerts:** A full inbox system from where Miles can read alerts that plugins sent.
- **Confirmations:** Miles ask for your…
