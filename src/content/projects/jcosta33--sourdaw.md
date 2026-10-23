---
repo: "jcosta33/sourdaw"
name: "sourdaw"
description: "A modern digital audio workstation (DAW) with a unified Rust DSP engine, Electron desktop shell, and Web Audio."
readmeQualityOk: true
url: "https://github.com/jcosta33/sourdaw"
homepage: "https://app.sourdaw.studio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["audio", "clap", "daw", "dsp", "electron", "mpe", "music-production", "rust", "web-audio", "agentic-ai"]
stars: 7
forks: 0
openIssues: 347
closedIssues: 1422
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-16T12:17:08Z"
lastCommitAt: "2026-10-23T12:04:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["hplovecraft208[bot]", "jcosta33"]
openGraphImageUrl: "https://opengraph.githubassets.com/780777cef3fb26af62a45485fe71a3af99179172f7755d85c7211fd9693448cc/jcosta33/sourdaw"
discussionCount: 0
---

# Sourdaw

**An open-source DAW with a built-in agent harness.**

[App](https://app.sourdaw.studio/) · [Website](https://www.sourdaw.studio/) · [Contributing](https://github.com/jcosta33/sourdaw/blob/HEAD/CONTRIBUTING.md) · [Security](https://github.com/jcosta33/sourdaw/blob/HEAD/SECURITY.md) · [Privacy](https://github.com/jcosta33/sourdaw/blob/HEAD/PRIVACY.md)

Sourdaw is a digital audio workstation for Chromium-based browsers and an
Electron desktop shell. The hosted app runs at
[app.sourdaw.studio](https://app.sourdaw.studio/).

Status: active alpha. There are no versioned releases or signed installers
yet; `main` is the current source.

## Stack

- Web app: TypeScript, React, Vite, and the Web Audio API. Project state is
  an Automerge CRDT document, so undo, persistence, and collaboration share
  one write path.
- Desktop: an Electron shell over the same app, backed by Rust crates for
  native audio, DSP, CLAP plugin hosting, and I/O, plus Rust-to-WASM packages
  shipped as committed artifacts.
- Collaboration: direct WebRTC sessions, an optional authenticated WebSocket
  relay (`server/`), and native LAN discovery. These are transports, not a
  hosted Sourdaw service.
-…
