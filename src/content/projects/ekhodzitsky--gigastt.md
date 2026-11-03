---
repo: "ekhodzitsky/gigastt"
name: "gigastt"
description: "Local STT server powered by GigaAM v3."
readmeQualityOk: true
url: "https://github.com/ekhodzitsky/gigastt"
homepage: "https://crates.io/crates/gigastt"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [71, 24]
topics: ["gigaam", "onnx", "speech-recognition", "stt", "asr", "on-device", "onnxruntime", "privacy", "russian", "rust"]
stars: 77
forks: 9
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-09T13:44:22Z"
lastCommitAt: "2026-11-03T12:47:09Z"
lastReleaseAt: "2026-04-17T13:13:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["ekhodzitsky", "dependabot[bot]", "x0retnop"]
openGraphImageUrl: "https://opengraph.githubassets.com/83db7c5cc4ef0797f3f4859d23e1a3f129d83c54982c70d78fa0aff0d7a21213/ekhodzitsky/gigastt"
discussionCount: 1
---

# gigastt

Local speech recognition for files, live audio and embedded applications.

gigastt is a Rust CLI and HTTP/WebSocket server powered by
[GigaAM](https://github.com/salute-developers/GigaAM) and ONNX Runtime.
Russian recognition is the default; multilingual models also support English,
Kazakh, Kyrgyz and Uzbek. Inference runs on your machine, with no cloud API,
account or API key. Models are downloaded once and can be provisioned offline.

This documentation follows **main**. For an installed release, use the
[documentation at its tag](https://github.com/ekhodzitsky/gigastt/tags).
Model bundles and language-binding releases have their own versions.

## Install

Choose one installation method:

- **Prebuilt binary:** download the archive for your platform from
  [Releases](https://github.com/ekhodzitsky/gigastt/releases), unpack it and put
  `gigastt` (`gigastt.exe` on Windows) on `PATH`. Builds cover macOS Apple Silicon,
  Linux x86_64/aarch64 and Windows x86_64. See [release verification](https://github.com/ekhodzitsky/gigastt/blob/HEAD/docs/verifying-releases.md).
- **Homebrew:**
  ```sh
  brew tap ekhodzitsky/gigastt https://github.com/ekhodzitsky/gigastt
  brew install…
