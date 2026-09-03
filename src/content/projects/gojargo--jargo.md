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
stars: 72
forks: 3
openIssues: 7
closedIssues: 28
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-06-18T15:22:39Z"
lastCommitAt: "2026-09-03T08:14:22Z"
lastReleaseAt: "2026-08-30T16:38:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 37
maintainers: ["fallais", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d83bfd0a35efb1aa853ce53855ca8abe224d69e5b75fd757f0b04aced810d4b5/gojargo/jargo"
---

**A WebRTC-native, audio-first conversational-AI framework for Go.**

</div>

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
[benchmarks](https://github.com/gojargo/jargo-benchmarks) for the honest performance picture.

## Features

- **Transports**:…
