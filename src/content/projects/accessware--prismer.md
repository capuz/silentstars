---
repo: "accessware/prismer"
name: "prismer"
description: "Safe Rust bindings to prism, the platform-agnostic reader interface for speech and messages"
readmeQualityOk: true
url: "https://github.com/accessware/prismer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-28T01:35:14Z"
lastCommitAt: "2026-11-07T09:29:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["trypsynth", "Orinks"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e2f606650ab1a97feeeea525a165ddf1330840739e8ef61c84ff826254183c/accessware/prismer"
---

# Prismer

Rust bindings to [prism](https://github.com/ethindp/prism), the platform-agnostic reader interface for speech and messages. Prism unifies screen readers and TTS engines (SAPI, NVDA, JAWS, VoiceOver, AVSpeech, speech-dispatcher, Orca, Android TTS, WebSpeech, and more) behind one API, so this crate gives your Rust application speech, braille, and screen reader output on every major platform.

## Crates

- `prism-sys`: raw FFI bindings to the prism C API, `no_std`.
- `prismer`: safe idiomatic wrapper.

## Quick start

```rust
let prism = prismer::Prism::new()?;
let backend = prism.create_best()?;
backend.speak("Hello from Rust!", false)?;
```

See `crates/prismer/examples/speak.rs` for a fuller example, including feature detection and waiting for speech to finish.

## Picking a backend

There are four ways to get a backend:

| Method | Backend state | Initialized on return |
| --- | --- | --- |
| `create_best()` | private to you | yes |
| `create(id)` | private to you | no, call `initialize()` |
| `acquire_best()` | shared with other callers | yes |
| `acquire(id)` | shared with other callers | maybe, call `initialize()` and treat `AlreadyInitialized` as success |

Use…
