---
repo: "osbytes/reelsaw"
name: "reelsaw"
description: "Self-hosted AI clipper: long-form video to vertical shorts with face-tracked reframing, verified filler cuts and captions"
readmeQualityOk: true
url: "https://github.com/osbytes/reelsaw"
homepage: "https://reelsaw.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-clip-generator", "ai-clip-maker", "ai-video-editing", "opus-clip-alternative", "self-hosted", "self-hosted-ai", "video-generation", "youtube-shorts", "ai-clipping", "ollama"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T17:24:54Z"
lastCommitAt: "2026-10-31T15:58:35Z"
lastReleaseAt: "2026-10-18T22:18:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 63
maintainers: ["dillonstreator"]
openGraphImageUrl: "https://opengraph.githubassets.com/283766f46b93d0d03872b74e484025837bc6d10b760630a4fe5ae38e518e2aba/osbytes/reelsaw"
discussionCount: 1
---

Self-hosted, AI-powered long-form → short-form video clipper. Paste a YouTube link or upload a video; Reelsaw transcribes it, asks an LLM for the most clippable moments, then renders vertical 9:16 clips with word-highlight captions and a hook overlay. A hosted service at [app.reelsaw.com](https://app.reelsaw.com) runs the same code (Free, then $12 / $29 / $59 a month, metered in source minutes).

Pure TypeScript. Any AI vendor via the [AI SDK](https://ai-sdk.dev). One-step deploy with Docker Compose.

  &nbsp;

## Features

**Pipeline**

- **Any AI vendor** – language model, transcription model and caption-alignment model are each a `provider:model` string: OpenAI, Anthropic, Google, Groq, Deepgram, AssemblyAI, Vercel AI Gateway, or any OpenAI-compatible server (Ollama, vLLM, LM Studio, local Whisper servers). Fully local with no API keys is supported.
- **Research-backed clip selection** – map → pool → rank: the transcript is chunked at long pauses with 20% overlap (no "lost in the middle" on long videos), every standalone moment is collected per chunk in parallel, candidates are snapped/deduped, then scored on a rubric (hook / value / flow / shareability, plus relevance with a…
