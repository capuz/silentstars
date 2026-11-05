---
repo: "gojargo/jargo"
name: "jargo"
description: "Conversational-AI framework for Go."
readmeQualityOk: true
url: "https://github.com/gojargo/jargo"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agents", "audio", "conversational-ai", "go", "golang", "llm", "pion", "realtime", "speech-recognition", "speech-to-text"]
stars: 108
forks: 11
openIssues: 0
closedIssues: 36
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-06-18T15:22:39Z"
lastCommitAt: "2026-11-05T08:06:31Z"
lastReleaseAt: "2026-10-30T12:43:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["fallais", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69b2e2ab401331bf06e788573f147cfe72b15503d824539d685b8a0baace39ff/gojargo/jargo"
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
[benchmarks](#benchmarks) for the honest performance picture.

## Features

- **Transports**: WebRTC ([Pion](https://github.com/pion)),…
