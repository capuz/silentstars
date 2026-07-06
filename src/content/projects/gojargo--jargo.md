---
repo: "gojargo/jargo"
name: "jargo"
description: "A WebRTC-native, audio-first conversational-AI framework for Go."
readmeQualityOk: true
url: "https://github.com/gojargo/jargo"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-18T15:22:39Z"
lastCommitAt: "2026-07-06T07:04:40Z"
lastReleaseAt: "2026-07-02T15:36:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["fallais"]
openGraphImageUrl: "https://opengraph.githubassets.com/5783a3cd43b1c8949cf12f75fe5381a3868f48f3c67147411999ccb2e28df04d/gojargo/jargo"
---

**A WebRTC-native, audio-first conversational-AI framework for Go.**

</div>

---

**jargo** builds real-time voice agents in Go: audio in over WebRTC, a streaming
transcription → reasoning → speech pipeline with turn-taking and barge-in, and
audio back out — over [RTVI](https://docs.pipecat.ai/client/introduction) so
existing clients interoperate.

> **Status:** early work in progress. APIs are unstable and will change.

## Why?

[Pipecat](https://github.com/pipecat-ai/pipecat) is great, and jargo is a port of
it — the architecture and many design decisions are Pipecat's.

### Python might not be the way

This port exists for one reason: I'd rather not run a voice agent on Python.

Python is the right tool when you need the AI/data-science ecosystem. A
real-time voice *server* doesn't: the models run as services or as ONNX, and
what's left is plumbing — audio framing, WebRTC, concurrency, and shipping a
binary. For that, Go is a better fit: one static binary to deploy, low and
predictable memory, fast startup, and real concurrency for many simultaneous
sessions without a GIL. The heavy numerics stay where they belong (the ONNX
Runtime, the remote services), so giving up Python…
