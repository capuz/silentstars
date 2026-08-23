---
repo: "Dicklesworthstone/franken_whisper"
name: "franken_whisper"
description: "Agent-first Rust ASR orchestration stack: Bayesian backend routing across whisper.cpp/insanely-fast-whisper/whisper-diarization, real-time NDJSON streaming, SQLite persistence, TTY audio transport, conformance harness. 107K lines, 2000+ tests, zero unsafe code."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_whisper"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["agent-first", "asr", "bayesian", "cli", "diarization", "ffmpeg", "gpu", "machine-learning", "ndjson", "rust"]
stars: 65
forks: 8
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-02-22T23:14:13Z"
lastCommitAt: "2026-08-23T04:08:46Z"
lastReleaseAt: "2026-08-10T05:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164301692/1a9c6e35-bdd6-4205-8bd5-620fb9f856a7"
---

# franken_whisper

</div>

</div>

**Agent-first Rust ASR stack with a real in-process pure-Rust Whisper engine (no FFI, no Python, no subprocess), adaptive Bayesian backend routing, real-time NDJSON streaming, DTW word timestamps, and SQLite-backed run history. In current live-incumbent, same-invocation matched-greedy CPU comparisons, the native large-v3-turbo engine is 2.99× faster than whisper.cpp on a 124.5-second whole job; tiny.en is 1.52× faster on a 124.5-second transcribe-only workload and 1.51× faster on a 300-second transcribe-only workload.**

<h3>Install in one line</h3>

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/franken_whisper/main/install.sh?$(date +%s)" | bash
```

<sub>SHA-256-verified prebuilt binaries for <b>Linux</b> (x86_64 / aarch64), <b>macOS</b> (Intel / Apple&nbsp;Silicon), and <b>WSL</b> — proxy-aware, airgap-capable (<code>--offline</code>), reversible (<code>--uninstall</code>). Windows users: grab <code>windows_amd64.zip</code> from <a href="https://github.com/Dicklesworthstone/franken_whisper/releases/latest">the latest release</a>. All flags: <a href="#installation">Installation</a>.</sub>

</div>

## Agent quickstart…
