---
repo: "fmasi/parley"
name: "parley"
description: "Parley — private, on-device meeting transcription for Apple Silicon. Dual-stream mic + system audio, speaker diarization, 146x real-time. Open-source, zero cloud."
readmeQualityOk: true
url: "https://github.com/fmasi/parley"
homepage: "https://fmasi.eu/parley/"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["apple-silicon", "coreml", "macos", "meetings", "menu-bar-app", "on-device", "privacy", "screencapturekit", "speaker-diarization", "speech-to-text"]
stars: 7
forks: 0
openIssues: 59
closedIssues: 138
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T16:41:44Z"
lastCommitAt: "2026-10-31T09:53:59Z"
lastReleaseAt: "2026-07-10T09:24:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 56
maintainers: ["fmasi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00586d9221f683584b70913588b5ecc8c2df7270fbafa5d2fea79388c824ffde/fmasi/parley"
---

# parley

> Private, on-device meeting transcription for Apple Silicon. Captures your microphone **and** the
> far side of the call (Zoom, Teams, Meet, Slack, FaceTime), and turns them into speaker-attributed
> transcripts that never leave your Mac. 100% open-source, open-model, airgapped.

🤝 **Sister project:** [**mailrag**](https://github.com/fmasi/mailrag) — private, self-hosted email RAG. Two halves of one idea: a private, open context stack your AI agents can draw on.

> **What it buys you.** Meeting transcription that's *private by construction* — every byte stays on
> your Mac, on open models, with nothing phoning home. It transcribes and labels speakers chunk by
> chunk in the background *as you record*, so when you stop, only the last chunk is left: a 3-hour
> meeting is ready about as fast as a 30-minute one. On an M5 Pro that runs at **~140× real-time for
> transcription and ~110× for diarization** on the Neural Engine and GPU. It separates "you" from
> "them" with **dual-stream capture** and survives a crash mid-recording with **zero data loss**.

## Why this exists

The first time I used cloud AI for meeting notes it felt like a cheat code — until I thought about…
