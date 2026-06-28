---
repo: "karolswdev/HoldSpeak"
name: "HoldSpeak"
description: "Cross-platform local voice typing and meeting transcription for macOS and Linux."
url: "https://github.com/karolswdev/HoldSpeak"
homepage: "https://github.com/karolswdev/HoldSpeak#readme"
language: "Python"
languages: ["Python", "Swift"]
languagePcts: [58, 27]
topics: ["faster-whisper", "linux", "macos", "mlx-whisper", "privacy", "python", "speech-to-text", "textual", "transcription", "tui"]
stars: 277
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-03-26T02:35:39Z"
lastCommitAt: "2026-06-28T02:03:23Z"
lastReleaseAt: "2026-06-13T12:20:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["karolswdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee0663fb7e657d69f21a948269a227e2c848ca94ff533194b721907dc6aa4b84/karolswdev/HoldSpeak"
---

# HoldSpeak

</p>

Hold a key and speak, and your words land in whatever app you are in,
optionally rewritten by your own model with your project's context. Record or
import a meeting, and it comes back as reviewable decisions, action items, and
typed artifacts, with a follow-up panel that shows what is still open. One
local runtime on macOS and Linux does both, for the two places a developer's
voice does work: the keyboard and the meeting. Whisper runs locally; the LLM is
one you run or point at. No cloud, no account, no telemetry.

> **Status: 0.x, early but real.** HoldSpeak is on PyPI (`pip install holdspeak`).
> The features are mature; APIs, config, and defaults can still change while it is
> pre-1.0. Upgrades are safe by default (your data is backed up first). Feedback
> and contributions welcome.

## The two modes

| Dictate | Meet |
| --- | --- |
|  |  |
| Hold the hotkey, speak, release: the text goes into the active app. Turn on the dictation pipeline and rough speech is routed by intent, enriched with your project's context, and rewritten for its target (Codex, Claude, the terminal, the browser, your editor). Every run lands in the dictation journal; one tap on a wrong…
