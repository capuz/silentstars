---
repo: "gojargo/jargo"
name: "jargo"
description: "Conversational-AI framework for Go."
readmeQualityOk: true
url: "https://github.com/gojargo/jargo"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai-agents", "audio", "conversational-ai", "go", "golang", "llm", "pion", "realtime", "speech-recognition", "speech-to-text"]
stars: 107
forks: 11
openIssues: 0
closedIssues: 36
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-06-18T15:22:39Z"
lastCommitAt: "2026-11-04T13:04:39Z"
lastReleaseAt: "2026-10-30T12:43:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["fallais", "dependabot[bot]", "Sud-Puth"]
openGraphImageUrl: "https://opengraph.githubassets.com/940d414ad8de027f2577cb8dab430909351df2c2a7e3fc34b6a4c77f49d7863c/gojargo/jargo"
---

**A WebRTC-native, audio-first conversational-AI framework for Go.**

---

**jargo** is a framework for real-time voice agents in Go: audio in over WebRTC,
a streaming transcription → reasoning → speech pipeline with turn-taking and
barge-in, and audio back out.

## Why?

[Pipecat](https://github.com/pipecat-ai/pipecat) is great, and jargo is a port of
it. The architecture and many design decisions are Pipecat's.

### Python might not be the way

This port exists for one reason: I'd rather not run a voice agent on Python.

Python is the right tool when you need the AI/data-science ecosystem. A
real-time voice *server* doesn't: the models run as services or as ONNX, and
what's left is plumbing: audio framing, WebRTC, concurrency, and shipping a
binary. For that, Go is a better fit: one static binary to deploy, low and
predictable memory, fast startup, and real concurrency for many simultaneous
sessions without a GIL. The heavy numerics stay where they belong (the ONNX
Runtime, the remote services), so giving up Python costs little here. See the
[benchmarks](https://github.com/gojargo/jargo/blob/HEAD/docs/benchmarks.md) for the honest performance picture.

## Features

-…
