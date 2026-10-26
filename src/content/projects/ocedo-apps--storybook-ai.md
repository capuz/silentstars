---
repo: "ocedo-apps/StoryBook-AI"
name: "StoryBook-AI"
description: "StoryBook AI — local-first prose tool. The Story Bible holds truth. The model drafts. You decide."
readmeQualityOk: true
url: "https://github.com/ocedo-apps/StoryBook-AI"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-17T09:16:33Z"
lastCommitAt: "2026-10-26T09:17:04Z"
lastReleaseAt: "2026-10-03T09:46:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["claude", "ocedo-apps"]
openGraphImageUrl: "https://opengraph.githubassets.com/df9f2443c3ff356f0c2f535278844ee8f330e35bd20fcda812a27887096f93de/ocedo-apps/StoryBook-AI"
---

# StoryBook AI

A local-first prose tool. The Story Bible holds truth. The model drafts. You decide.

This is a sibling of [Sandbox AI](https://github.com/ocedo-apps/Sandbox-AI), not a part of it. Campaign export (this app → Sandbox campaigns) comes later. The other direction has a first piece: Sandbox's Storyboard can group campaign scenes into chapters and export chapter shells (title + brief, no prose) as JSON — this app does not read that file back in yet. No cloud API keys: StoryBook AI talks to a local model server on your own computer or network — [Ollama](https://ollama.com), or any OpenAI-compatible server such as LM Studio, llama.cpp, or vLLM (see [Models](https://github.com/ocedo-apps/StoryBook-AI/blob/HEAD/docs/models.md)). Cloud providers (OpenAI, Anthropic, Google, and others) are deliberately excluded — the provider layer refuses to resolve to their hostnames, not just undocumented.

The UI is English, Swedish, or Norwegian Bokmål. **Prose language** on Settings is the language of the sentences. Export files and model prompts follow that field when it is set, otherwise the language of the manuscript.

## Quickstart

On Windows, double-click **`starta.bat`**. On…
