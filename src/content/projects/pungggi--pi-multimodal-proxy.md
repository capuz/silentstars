---
repo: "pungggi/pi-multimodal-proxy"
name: "pi-multimodal-proxy"
description: "Automatic image, video and audio description for any model in Pi. Routes media to a multimodal model and injects descriptions into context."
readmeQualityOk: true
url: "https://github.com/pungggi/pi-multimodal-proxy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 13
forks: 7
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-03T12:30:50Z"
lastCommitAt: "2026-07-05T21:00:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 48
maintainers: ["claude", "pungggi"]
openGraphImageUrl: "https://opengraph.githubassets.com/808f559282a52f579a7685206025ac8e5b5f060699ad320181d63f3019b8ef7b/pungggi/pi-multimodal-proxy"
---

# pi-multimodal-proxy

Automatic **image, video, and audio** description for any model in [Pi](https://pi.dev).

When images are sent, this extension routes them to a **vision-capable model**, collects descriptions, persists them in the session, and injects them into the agent's context — so even text-only models can "see" your images across turns.

When **video or audio files** are detected, they are routed to a **multimodal model** (default: Grok 4.3) that natively understands video content — transcribing speech with speaker diarization, describing visual scenes, reading on-screen text, and reasoning about the content — all in a single call.

## What's new in 1.8.0

- **Media knowledge survives context compaction** — when Pi compacts the conversation, the user messages that carried image attachments (and injected video fences) are summarized away, which previously left the agent blind to all earlier media. The proxy now detects compaction on the active branch and re-injects a **post-compaction recall digest**: truncated image/video descriptions keyed by the same stable `image="..."` ids that `analyze_image` accepts, so the agent can still reason about — and re-query — *"that…
