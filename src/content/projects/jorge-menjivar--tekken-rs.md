---
repo: "jorge-menjivar/tekken-rs"
name: "tekken-rs"
description: "Rust implementation of the Mistral Tekken tokenizer"
readmeQualityOk: true
url: "https://github.com/jorge-menjivar/tekken-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "mistral", "nlp", "tekken", "tokenizer"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-07-24T15:56:02Z"
lastCommitAt: "2026-08-22T04:07:32Z"
lastReleaseAt: "2026-08-18T10:49:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 46
maintainers: ["jorge-menjivar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82c5ad5e5dcbfecf7b7e28b99e5f1c1355ea55728a03c34a1b30507e7afaa498/jorge-menjivar/tekken-rs"
---

# tekken

A Rust implementation of the Mistral Tekken tokenizer with image and audio support. This library provides fast and efficient tokenization capabilities for text, image and audio data, fully compatible with Mistral AI's tokenizer.

## Features

- **Text Tokenization**: Full compatibility with Mistral's Tekken tokenizer
- **Image Support**: Resize and normalize images into `[IMG]` token grids (`image` feature)
- **Audio Support**: Encode and decode audio data with mel-scale spectrogram processing (`audio` feature)
- **Multiple Versions**: Support for tokenizer versions V3, V7, V11, V13, and V15
- **Special Tokens**: Complete handling of special tokens (BOS, EOS, audio tokens, etc.)
- **Model Settings**: Parsing and validation of `model_settings_builder` constraints (V15+)

## Installation

Add this to your `Cargo.toml`:

```toml
[dependencies]
tekken = "0.2.0"
```

Or use the Git repository directly:

```toml
[dependencies]
tekken = { git = "https://github.com/jorge-menjivar/tekken-rs" }
```

### Feature Flags

The multimodal features are enabled by default. Turn them off to drop their
dependencies:

| Feature | Default | Enables | Pulls in |
| --- | --- | --- | --- |
|…
