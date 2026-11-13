---
repo: "sharukeshalagiri/Whisperer"
name: "Whisperer"
description: "Self-hosted, privacy-first desktop dictation and meeting notes. Electron + FastAPI + on-device ONNX speech recognition."
readmeQualityOk: true
url: "https://github.com/sharukeshalagiri/Whisperer"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [52, 33]
topics: ["dictation", "electron", "fastapi", "mcp", "onnx", "onnxruntime", "parakeet", "privacy", "python", "react"]
stars: 10
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-11-08T20:47:34Z"
lastCommitAt: "2026-11-13T05:37:30Z"
lastReleaseAt: "2026-11-12T06:34:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 39
maintainers: ["sharukeshalagiri", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9e4a689f357e06c44418bc97db372b3b0df0a8f54b3088e850d181a485be7d8/sharukeshalagiri/Whisperer"
---

Hold a shortcut, speak, and Whisperer types polished text into whatever app has focus. Record a meeting and get a transcript, an editable summary and answers to questions about what was said. Everything runs against a FastAPI server you control, or, with **Continue without signing in**, against the same server running on your own computer with on-device speech recognition.

- **Self-hosted.** Sign in through your own OpenID Connect provider and pick the inference: OpenAI, LiteLLM, Ollama or any OpenAI-compatible endpoint.
- **Local mode.** No account and no server. Pinned ONNX speech models run on this computer.
- **No telemetry.** No analytics, crash reporting or tracing. Diagnostics stay in a local log file.
- **Honest about data flow.** The UI says where audio and text are sent. Any HTTP endpoint you configure receives them, even on localhost.

The demo above is a real recording of the released 0.2.0-beta.2 Linux build in Local mode. A synthetic spoken sentence is transcribed on the computer by the Whisper base model and pasted into a separate window through the actual X11 insertion path.

## Why it's interesting

- **A sandboxed Electron app with a validated bridge.** Every…
