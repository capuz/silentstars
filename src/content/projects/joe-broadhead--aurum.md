---
repo: "joe-broadhead/aurum"
name: "aurum"
description: "Speech both ways. On-device by default. Local STT + TTS CLI, aurum-core, aurum-ffi."
readmeQualityOk: true
url: "https://github.com/joe-broadhead/aurum"
homepage: "https://joe-broadhead.github.io/aurum/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["asr", "cli", "crates-io", "rust", "speech-to-text", "stt", "transcription", "whisper", "tts"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-24T06:26:40Z"
lastCommitAt: "2026-08-04T06:11:58Z"
lastReleaseAt: "2026-08-01T11:58:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 69
maintainers: ["joe-broadhead"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bc1ef8a9c722ff8f75e6f325008c4ac817d885b88c9d7674b4912a3058a6e6/joe-broadhead/aurum"
---

# Aurum

</div>

```
    _                              
   / \  _   _ _ __ _   _ _ __ ___  
  / _ \| | | | '__| | | | '_ ` _ \ 
 / ___ \ |_| | |  | |_| | | | | | |
/_/   \_\__,_|_|   \__,_|_| |_| |_|
                                   
   Speech both ways.
   On-device by default.
```

**Speech both ways. On-device by default.**
No API key required · local whisper + KittenTTS · optional remote providers · reusable **`aurum-core`**

[Docs](https://joe-broadhead.github.io/aurum/) ·
[Quickstart](https://github.com/joe-broadhead/aurum/blob/HEAD/docs/getting-started/quickstart.md) ·
[Providers](https://github.com/joe-broadhead/aurum/blob/HEAD/docs/guide/providers.md) ·
[Library](https://github.com/joe-broadhead/aurum/blob/HEAD/docs/library/integration.md) ·
[Security](https://github.com/joe-broadhead/aurum/blob/HEAD/SECURITY.md)

</div>

---

## What it does

Aurum is an on-device **speech CLI** and **Rust library**:

1. **STT** — audio file → text with **whisper.cpp** (Metal on macOS)
2. Optionally **clean** the text (fillers, bullets, professional, summary)
3. Emit **`txt`**, **`srt`**, or **`json`**
4. **TTS** — `aurum tts "…"` → mono **WAV** on-device (KittenTTS / Kokoro ONNX; no…
