---
repo: "QuintinShaw/openasr"
name: "openasr"
description: "Local-first speech-to-text: no cloud, no telemetry, fail-closed by design. One CLI, seven model families, signed model catalog, OpenAI-compatible local API."
readmeQualityOk: true
url: "https://github.com/QuintinShaw/openasr"
homepage: "https://openasr.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["asr", "ggml", "local-first", "rust", "speech-recognition", "speech-to-text", "transcription", "whisper"]
stars: 187
forks: 11
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-02T06:37:31Z"
lastCommitAt: "2026-07-23T06:16:25Z"
lastReleaseAt: "2026-07-08T04:32:56Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 33
maintainers: ["QuintinShaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f49a307ae9140c45ab9b23963d1f6bcc96da432fc8929fd49eb0fccf67b4637/QuintinShaw/openasr"
fundingLinks: ["GITHUB:https://github.com/QuintinShaw"]
---

[English](https://github.com/QuintinShaw/openasr/blob/HEAD/README.md) | [简体中文](https://github.com/QuintinShaw/openasr/blob/HEAD/README.zh-CN.md)

# OpenASR

**Turn speech into text, entirely on your device.**

[Website](https://openasr.org) · [Documentation](https://github.com/QuintinShaw/openasr/blob/HEAD/docs/DOCS_INDEX.md) · [License](https://github.com/QuintinShaw/openasr/blob/HEAD/LICENSE)

<sub>Pre-v1 — under active development. CLI flags, API surface, and pack format may change between 0.x releases.</sub>

</div>

---

<h3><a href="https://openasr.org/download/">Download the Desktop App</a></h3>
<p><strong>macOS</strong> (Apple Silicon) · <strong>Windows</strong> (x64, Windows 10+) · Linux desktop coming soon</p>
</div>

No terminal needed. Install the app, drop in an audio file, and get your transcript — everything runs on your machine.

> This repository is the Apache-2.0 open core behind the desktop app: a Rust CLI, a local OpenAI-compatible HTTP API, and the ggml inference engine. The desktop app wraps the same engine in a native GUI — no hidden network calls.

---

## What it does

- **Transcribe audio files** — single files or entire folders, output as plain text,…
