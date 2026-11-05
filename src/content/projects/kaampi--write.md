---
repo: "kaampi/Write"
name: "Write"
description: "StoryBook AI — local-first prose tool. The Story Bible holds truth. The model drafts. You decide."
readmeQualityOk: true
url: "https://github.com/kaampi/Write"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-17T09:16:33Z"
lastCommitAt: "2026-11-05T00:22:36Z"
lastReleaseAt: "2026-10-03T09:46:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 62
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f8ae10662b84c13333af2e77b85bb9fe4da48e5295bebe688497eb1f17180da/kaampi/Write"
---

kaampi Write is a desktop writing tool for long-form fiction — novels and series — built around a **Story Bible**: locked facts about your people, places, objects, groups, and events that every draft, rewrite, and consistency check is checked against. The model fills in prose; it never gets to invent canon on its own.

**No cloud API keys, ever.** kaampi Write only talks to a model server running on your own computer or network — [Ollama](https://ollama.com), or any OpenAI-compatible server such as LM Studio, llama.cpp, or vLLM (see [Models](https://github.com/kaampi/Write/blob/HEAD/docs/models.md)). Cloud providers (OpenAI, Anthropic, Google, and others) are deliberately excluded at the network layer — the provider code refuses to resolve to their hostnames, not just undocumented as an option.

The UI is English, Swedish, or Norwegian Bokmål. **Prose language** on Settings is the language of the sentences themselves — export files and model prompts follow that field when it is set, otherwise the language of the manuscript.

## What's inside

- **Story Bible** — people, places, objects, groups, and events, each locked or still a draft. Drafting, Extend, Elaborate, and Rewrite all…
