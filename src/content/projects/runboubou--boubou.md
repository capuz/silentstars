---
repo: "runboubou/boubou"
name: "boubou"
description: "Run voice AI locally with open-source models. Bring it to any device with one command."
readmeQualityOk: true
url: "https://github.com/runboubou/boubou"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["cli", "llama-cpp", "local-ai", "offline-first", "rust", "speech-to-speech", "voice", "voice-assistant", "runtime"]
stars: 51
forks: 5
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-11-02T04:30:32Z"
lastCommitAt: "2026-11-12T05:43:53Z"
lastReleaseAt: "2026-11-12T05:10:20Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["bella-chai", "LuozhuZhang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e971bdef3e9ea0a03337aacbe4e7c7779198937b23e5404207ef20d2c148c5a/runboubou/boubou"
---

Open models run on your machine. Speak, pause for a reply, and interrupt whenever you like.

  Apple Silicon · Linux · <a href="LICENSE">MIT licensed code</a>

## Quick start

Apple Silicon Mac, macOS 13.3+ and Node.js 18+:

```sh
npx boubou@beta run LFM3-Audio-2B
```

Allow microphone access. The first run downloads about **1.4 GB**. Then speak English.

On macOS, run `npx boubou@beta` to choose from the menu: the Liquid models and, on Macs with 16 GB of memory and macOS 15 or later, three modular voices (Qwen3-TTS 0.6B, Pocket TTS and Phonon). Run other modular voices by their IDs from `boubou list`.

The npm command also works on x86-64 Linux. Build from source for arm64 Linux.

You need Rust 1.91+ and Xcode Command Line Tools on macOS. On Linux, install a C compiler, `pkg-config` and ALSA development headers.

```sh
git clone https://github.com/runboubou/boubou.git
cd boubou
cargo build --locked --release
./target/release/boubou run LFM3-Audio-2B
```

On macOS, run `./target/release/boubou` to open the picker shown above. Liquid models also support x86-64 and arm64 Linux with glibc 2.38+, OpenSSL 3 and `libgomp`. The picker currently requires macOS.

```sh
boubou list
boubou…
