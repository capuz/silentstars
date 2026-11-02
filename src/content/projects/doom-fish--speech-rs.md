---
repo: "doom-fish/speech-rs"
name: "speech-rs"
description: "Safe Rust bindings for Apple's Speech framework — on-device speech recognition (SFSpeechRecognizer) on macOS."
readmeQualityOk: true
url: "https://github.com/doom-fish/speech-rs"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [65, 35]
topics: ["apple", "macos", "on-device", "rust", "speech-recognition", "doom-fish"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-15T15:40:01Z"
lastCommitAt: "2026-11-02T17:52:38Z"
lastReleaseAt: "2026-10-26T20:18:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 57
undervaluedScore: 45
maintainers: ["1313"]
openGraphImageUrl: "https://opengraph.githubassets.com/342e03c0b5c2055426111a13886de474a4fcb556cb4d2ea87d0eb3b31edf2709/doom-fish/speech-rs"
---

# speech

Safe Rust bindings for Apple's [Speech](https://developer.apple.com/documentation/speech) framework on macOS.

> **Status:** v0.9 requires on-device recognition by default and fixes
> use-after-free bugs in the async and live-recognition bridges. v0.8 added
> the Tier-1 `async` feature; v0.7 audited the classic `SFSpeech*`
> recognition surface and covers the macOS 26 analyzer, asset-inventory, and
> custom language-model authoring APIs alongside `DictationTranscriber`.

```toml
[dependencies]
speech = "0.9"
```

## Requirements

macOS 13 or later. Custom language models need macOS 14. The macOS 26
analyzer family (`SpeechAnalyzer`, `SpeechTranscriber`, `SpeechDetector`,
`AssetInventory`) and `DictationTranscriber` need macOS 26 at run time and a
build with the macOS 26 SDK; otherwise those calls return
`SpeechError::RecognizerUnavailable`.

## Async API

Enable the `async` feature to get executor-agnostic `Future` wrappers for
Speech.framework's callback-handler and `async throws` APIs:

```toml
[dependencies]
speech = { version = "0.9", features = ["async"] }
```

```rust,no_run
use speech::async_api::{AsyncSpeechRecognizer, AsyncSpeechAnalyzer};
use…
