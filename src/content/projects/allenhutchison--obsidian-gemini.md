---
repo: "allenhutchison/obsidian-gemini"
name: "obsidian-gemini"
description: "An obsidian plugin to interact with Google Gemini"
readmeQualityOk: true
url: "https://github.com/allenhutchison/obsidian-gemini"
homepage: "https://allenhutchison.github.io/obsidian-gemini/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 497
forks: 61
openIssues: 18
closedIssues: 405
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2024-10-23T15:34:58Z"
lastCommitAt: "2026-07-04T22:53:16Z"
lastReleaseAt: "2025-07-03T21:39:25Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 99
undervaluedScore: 37
maintainers: ["allenhutchison", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ba6ed8705bd19f55561d6faffaf17ed78401e3f9816413b677efca2797b3ffe/allenhutchison/obsidian-gemini"
discussionCount: 34
---

# Gemini Scribe for Obsidian

Gemini Scribe is an Obsidian plugin that integrates Google's Gemini AI models, providing powerful AI-driven assistance for note-taking, writing, and knowledge management directly within Obsidian. It leverages your notes as context for AI interactions, making it a highly personalized and integrated experience.

> **Note:** Pick one of two setup paths in plugin settings → **Provider**:
>
> - **Google Gemini (cloud)** — requires a Gemini API key (free tier available at [Google AI Studio](https://aistudio.google.com/apikey)).
> - **Ollama (local)** — runs locally with no API key; install [Ollama](https://ollama.com), pull a model, and select it in settings. See [docs/guide/ollama-setup.md](docs/guide/ollama-setup.md) and the [provider capability matrix](docs/reference/provider-capabilities.md) for what's supported.

## What's New in v4.10.2

**🛠️ Gemini Scribe 4.10.2 - Interactions API transport fix & recoverable deletes**

_4.10.2 is a hotfix for the 4.10 line — two fixes on top of the full 4.10 feature set:_

- **🧪 Interactions API transport fixed** - With **Use Interactions API** enabled, every request failed with a CORS error ("Failed to fetch")…
