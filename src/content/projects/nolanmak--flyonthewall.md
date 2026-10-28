---
repo: "nolanmak/FlyOnTheWall"
name: "FlyOnTheWall"
description: "Bot-free, local-first macOS meeting recorder in Rust. Captures system audio and your mic; bring your own transcription and LLM keys."
readmeQualityOk: true
url: "https://github.com/nolanmak/FlyOnTheWall"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["core-audio", "local-first", "macos", "meeting-notes", "privacy", "rust", "speech-to-text", "transcription"]
stars: 5
forks: 1
openIssues: 60
closedIssues: 74
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-09T19:07:07Z"
lastCommitAt: "2026-10-28T09:57:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["nolanmak"]
openGraphImageUrl: "https://opengraph.githubassets.com/86f40205bb6ca3be1fc6a93b64ce64e0098444fe4ea184776e560e2f21b48d58/nolanmak/FlyOnTheWall"
---

# FlyOnTheWall

An open-source, local-first meeting recorder for macOS. It captures system audio and your microphone as two separate streams with **no bot joining the call**, transcribes them live through **Deepgram with your own API key** or **on your Mac with whisper.cpp**, and turns each finished meeting into a title, a summary that cites the transcript, and action items whose evidence is checked, using a summary engine you choose. The meeting library is a SQLCipher-encrypted database on your own disk. **The recorded audio beside it is not encrypted yet** — see [Privacy](#privacy).

> **Status: pre-release.** macOS only (14.4 or later), built from source. There are no signed or prebuilt releases. Capture, live Deepgram transcription, the encrypted library, summaries, exports and the web dashboard are implemented and wired together; the largest gaps are listed under [Known gaps](#known-gaps). **[docs/REQUIREMENTS.md](https://github.com/nolanmak/FlyOnTheWall/blob/HEAD/docs/REQUIREMENTS.md)** is the 2026-08 design record, not a description of the current code; work is tracked in [issues](https://github.com/nolanmak/FlyOnTheWall/issues).

### Known gaps

- **Audio is not encrypted…
