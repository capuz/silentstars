---
repo: "Dicklesworthstone/franken_whisper"
name: "franken_whisper"
description: "Agent-first Rust ASR orchestration stack: Bayesian backend routing across whisper.cpp/insanely-fast-whisper/whisper-diarization, real-time NDJSON streaming, SQLite persistence, TTY audio transport, conformance harness. 107K lines, 2000+ tests, zero unsafe code."
url: "https://github.com/Dicklesworthstone/franken_whisper"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["agent-first", "asr", "bayesian", "cli", "diarization", "ffmpeg", "gpu", "machine-learning", "ndjson", "rust"]
stars: 35
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-02-22T23:14:13Z"
lastCommitAt: "2026-07-03T06:24:23Z"
lastReleaseAt: "2026-07-02T21:19:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164301692/1a9c6e35-bdd6-4205-8bd5-620fb9f856a7"
---

# franken_whisper

</div>

</div>

**Agent-first Rust ASR stack with a real in-process pure-Rust Whisper engine (no FFI, no Python, no subprocess — and on CPU it beats whisper.cpp 2.33× on tiny.en, at parity on large-v3-turbo), adaptive Bayesian backend routing, real-time NDJSON streaming, DTW word timestamps, and SQLite-backed run history.**

<h3>Install in one line</h3>

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/franken_whisper/main/install.sh?$(date +%s)" | bash
```

<sub>SHA-256-verified prebuilt binaries for <b>Linux</b> (x86_64 / aarch64), <b>macOS</b> (Intel / Apple&nbsp;Silicon), and <b>WSL</b> — proxy-aware, airgap-capable (<code>--offline</code>), reversible (<code>--uninstall</code>). Windows users: grab <code>windows_amd64.zip</code> from <a href="https://github.com/Dicklesworthstone/franken_whisper/releases/latest">the latest release</a>. All flags: <a href="#installation">Installation</a>.</sub>

</div>

> **v0.2.0 — the native engine is real, and it is fast.** The in-process pure-Rust Whisper engine (built on [FrankenTorch](https://github.com/Dicklesworthstone/frankentorch) kernels, `#![forbid(unsafe_code)]` in-crate) now transcribes…
