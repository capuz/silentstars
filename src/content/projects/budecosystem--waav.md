---
repo: "BudEcosystem/WaaV"
name: "WaaV"
description: "Bud WaaV is high performant, Scalable Audio AI Gateway written in Rust."
readmeQualityOk: true
url: "https://github.com/BudEcosystem/WaaV"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["audio", "deepgram", "elevenlabs", "gateway", "google", "openai", "stt", "tts", "vad", "auidio-ai"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-01-05T19:33:53Z"
lastCommitAt: "2026-10-29T12:25:19Z"
lastReleaseAt: "2026-10-26T09:46:04Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 58
maintainers: ["dittops", "jithinAB"]
openGraphImageUrl: "https://opengraph.githubassets.com/d009f30b14b85d1c2096641cbefde8566e448b6d2f73bcfa7fa25fd53a471e96/BudEcosystem/WaaV"
---

One API for 44 speech vendors, realtime voice models and your own LLMs.<br>
  Self-hosted, open source, written in Rust. From <a href="https://github.com/BudEcosystem">Bud Ecosystem</a>.

WaaV sits between your app and the speech world. Your app streams audio or text to one endpoint; WaaV
transcribes it, runs your agent, speaks the answer and streams it back, with whichever providers you
choose. Swapping Deepgram for ElevenLabs, or a cloud model for your own, is a config change, not a
rewrite.

## Why WaaV

44 vendors behind one WebSocket and REST API (31 speech-to-text, 34 text-to-speech and 11
speech-to-speech integrations), plus drop-in OpenAI <code>/v1/audio</code> and <code>/v1/realtime</code> endpoints. Language
codes, voices and emotions are written once and mapped to each provider's own form.
Interaction mode answers at once, keeps the conversation going while slow work runs, stops when the
caller talks over it, and asks before it does anything that matters. Reasoning models stay usable on a
live call.
A single Rust binary with no OpenSSL. Auth, rate limits, caching, circuit breakers, reconnect and replay,
Prometheus metrics, and egress control that keeps every key on its…
