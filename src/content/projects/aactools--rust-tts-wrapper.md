---
repo: "AACTools/rust-tts-wrapper"
name: "rust-tts-wrapper"
description: "Cross-platform TTS wrapper with C API — mirrors js-tts-wrapper / SwiftTTSWrapper. 21 engines: system, Sherpa-ONNX (191 models), and 19 cloud providers."
readmeQualityOk: true
url: "https://github.com/AACTools/rust-tts-wrapper"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 1
closedIssues: 17
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-01T17:43:15Z"
lastCommitAt: "2026-11-11T11:20:11Z"
lastReleaseAt: "2026-07-08T08:23:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["willwade", "23821"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c8bf1072a723d9498e5a12b0abcdbb37f8b09c69f9f9e9ace94a7758136b242/AACTools/rust-tts-wrapper"
---

# rust-tts-wrapper

Cross-platform text-to-speech for Rust — 28 engines behind one API,
plus a flat C ABI with bindings for .NET, Python, Node and Swift.

- **One API, three families**: OS voices (SAPI, AVSpeech,
  speech-dispatcher), offline engines (Sherpa-ONNX, floravox, qwen3,
  OmniVoice, Kyutai pocket), and 22 cloud providers (Azure, Google,
  OpenAI, ElevenLabs, Polly, …).
- **Real word timings** where the engine provides them (Azure/Edge
  WebSockets, Google timepoints, floravox duration tensors, pocket
  attention), honest estimates everywhere else.
- **Streaming audio** through callbacks as it arrives, SpeechMarkdown
  input, SSML, voice cloning (experimental).
- **A stable C ABI** (`include/tts_wrapper.h`) with stable error
  codes, a typed engine-setup schema and a tri-state credential check.

Sibling projects: [js-tts-wrapper](https://github.com/AACTools/js-tts-wrapper) ·
[swift-tts-wrapper](https://github.com/AACTools/swift-tts-wrapper) ·
[dotnet-tts-wrapper](https://github.com/AACTools/dotnet-tts-wrapper)

## Quick start

```rust
use rust_tts_wrapper::{create_engine, TtsEngine};

let engine = create_engine("openai", r#"{"apiKey":"sk-…"}"#)?;

let mut boundary =…
